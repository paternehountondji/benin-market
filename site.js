/* ===========================================================
   Benin Market — menu mobile et formulaires
   Les formulaires envoient leur contenu sur le WhatsApp de
   Benin Market, puis affichent la page de remerciement.
   =========================================================== */

const BENIN_MARKET_WHATSAPP = "2290159000398";

/* ---------- Menu hamburger ---------- */

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
    navToggle.textContent = open ? "Fermer" : "Menu";
  });
}

/* ---------- Pré-remplissage depuis l'adresse (?offre=..., ?entreprise=...) ---------- */

const urlParams = new URLSearchParams(window.location.search);
["offre", "entreprise"].forEach((name) => {
  const field = document.getElementById(name);
  const value = urlParams.get(name);
  if (field && value) field.value = value;
});

/* ---------- Envoi des formulaires par WhatsApp ---------- */

document.querySelectorAll("form[data-whatsapp]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const lines = [form.dataset.titre, ""];
    form.querySelectorAll("[data-label]").forEach((field) => {
      let value = field.value.trim();
      if (field.type === "checkbox") value = field.checked ? "Oui" : "";
      if (field.tagName === "SELECT" && field.selectedIndex >= 0 && field.value) {
        value = field.options[field.selectedIndex].text;
      }
      if (value) lines.push(`${field.dataset.label} : ${value}`);
    });
    const url = `https://wa.me/${BENIN_MARKET_WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
    window.location.href = `merci.html?type=${encodeURIComponent(form.dataset.whatsapp)}`;
  });
});

/* ---------- Page de remerciement ---------- */

const merciTitle = document.getElementById("merci-title");
if (merciTitle && urlParams.get("type") === "avis") {
  merciTitle.textContent = "Merci pour votre avis";
  document.getElementById("merci-text").textContent =
    "Votre avis a été préparé dans WhatsApp. Appuyez sur Envoyer pour nous le transmettre. Il sera publié après vérification.";
}

/* ---------- Année du pied de page ---------- */

const footerYear = document.getElementById("footer-year");
if (footerYear) footerYear.textContent = new Date().getFullYear();

/* ---------- Application installable (fonctionne aussi hors connexion) ---------- */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* sans service worker, le site fonctionne normalement */
    });
  });
}
