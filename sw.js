/* ===========================================================
   Benin Market — service worker
   Stratégie « réseau d'abord » : on charge toujours la version
   en ligne, et on garde une copie pour l'afficher quand il n'y a
   pas de connexion. Ainsi une mise à jour du site est visible
   tout de suite.
   =========================================================== */

const CACHE = "benin-market-v1";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || !request.url.startsWith(self.location.origin)) return;
  /* La vidéo est lue par morceaux : on ne la met pas en cache. */
  if (request.headers.has("range") || request.url.endsWith(".mp4")) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request, { ignoreSearch: request.mode === "navigate" }))
  );
});
