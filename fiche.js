/* ===========================================================
   Benin Market — page d'une entreprise (fiche.html?id=...)
   Utilise les fonctions de script.js : loadBusinesses, slugify,
   escapeHtml, categoryLabel, badgesHtml, buildUrl.
   =========================================================== */

(async function initFiche() {
  const box = document.getElementById("fiche");
  if (!box) return;

  const id = new URLSearchParams(window.location.search).get("id") || "";
  const businesses = await loadBusinesses();
  const b = businesses.find((item) => slugify(item.nom) === id);

  if (!b) {
    box.innerHTML = `
      <h1>Entreprise introuvable</h1>
      <p>Cette fiche n'existe pas ou a été retirée de l'annuaire.</p>
      <a href="annuaire.html" class="btn btn-dark">Retour à l'annuaire</a>`;
    return;
  }

  document.title = `${b.nom} — Benin Market`;
  const pageUrl = window.location.href.split("#")[0];
  const digits = (b.contact || "").replace(/\D/g, "");
  const initial = escapeHtml((b.nom || "?").trim().charAt(0).toUpperCase());
  const visual = b.photo
    ? `<img class="fiche-photo" src="${escapeHtml(b.photo)}" alt="">`
    : `<span class="fiche-initial" aria-hidden="true">${initial}</span>`;

  /* Boutons de contact : seuls ceux qui ont une information s'affichent. */
  const actions = [];
  if (b.boutique) actions.push(`<a class="btn btn-primary" href="${escapeHtml(b.boutique)}">Visiter la boutique en ligne</a>`);
  if (digits) {
    actions.push(`<a class="btn btn-whatsapp" href="https://wa.me/${digits}" target="_blank" rel="noopener">Écrire sur WhatsApp</a>`);
    actions.push(`<a class="btn btn-dark" href="tel:+${digits}">Appeler</a>`);
  }
  if (b.lien) actions.push(`<a class="btn btn-light" href="${escapeHtml(b.lien)}" target="_blank" rel="noopener">${b.lien.includes("facebook.com") ? "Page Facebook" : "Voir le site"}</a>`);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${b.nom} ${b.ville} Bénin`)}`;
  actions.push(`<a class="btn btn-light" href="${mapUrl}" target="_blank" rel="noopener">Itinéraire</a>`);

  const shareText = `${b.nom}, ${b.ville} : ${b.description} ${pageUrl}`;
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  const reviews = Array.isArray(b.avis) ? b.avis : [];
  const reviewUrl = buildUrl("avis.html", { entreprise: b.nom });
  const reviewsHtml = reviews.length
    ? `<ul class="review-list">${reviews
        .map((r) => `<li><strong>${escapeHtml(r.auteur)}</strong> · ${escapeHtml(r.note)}/5<br>${escapeHtml(r.texte)}</li>`)
        .join("")}</ul>`
    : '<p>Pas encore d\'avis pour cette entreprise.</p>';

  /* Une entreprise listée à partir d'informations publiques peut réclamer sa fiche. */
  const claimed = b.membreFondateur || b.offre;
  const claimHtml = claimed
    ? ""
    : `<p class="fiche-claim">Cette fiche a été créée à partir d'informations publiques. Vous êtes le gérant ? <a href="rejoindre.html">Réclamer cette fiche</a></p>`;

  box.innerHTML = `
    <a class="fiche-back" href="annuaire.html">Retour à l'annuaire</a>
    <div class="fiche-head">
      ${visual}
      <div>
        <h1>${escapeHtml(b.nom)} ${badgesHtml(b)}</h1>
        <p class="meta">${escapeHtml(b.ville)}${b.membreFondateur ? " · Membre fondateur" : ""}</p>
        <span class="cat-tag">${escapeHtml(categoryLabel(b.categorie))}</span>
      </div>
    </div>
    <p class="fiche-desc">${escapeHtml(b.description)}</p>
    <div class="fiche-actions">${actions.join("")}</div>
    ${claimHtml}

    <div class="fiche-grid">
      <section class="fiche-block">
        <h2>Avis des clients</h2>
        ${reviewsHtml}
        <a href="${reviewUrl}" class="btn btn-light">Donner un avis</a>
      </section>

      <section class="fiche-block">
        <h2>Partager cette fiche</h2>
        <p>Envoyez cette page à vos clients et à vos proches.</p>
        <div class="fiche-share">
          <a class="btn btn-whatsapp" href="${shareUrl}" target="_blank" rel="noopener">Partager sur WhatsApp</a>
          <button type="button" class="btn btn-light" id="copy-link">Copier le lien</button>
        </div>
      </section>

      <section class="fiche-block fiche-qr">
        <h2>QR code de l'entreprise</h2>
        <p>Imprimez-le et collez-le sur votre vitrine : vos clients le scannent pour ouvrir cette page.</p>
        <div class="qr-box" id="qr-box"></div>
        <button type="button" class="btn btn-dark" id="qr-download">Télécharger le QR code</button>
      </section>
    </div>`;

  /* Copier le lien */
  const copyBtn = document.getElementById("copy-link");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      copyBtn.textContent = "Lien copié";
    } catch (err) {
      window.prompt("Copiez ce lien :", pageUrl);
    }
  });

  /* QR code (bibliothèque qrcode-generator, dans vendor/qrcode.js) */
  if (typeof qrcode === "function") {
    const qr = qrcode(0, "M");
    qr.addData(pageUrl);
    qr.make();
    const count = qr.getModuleCount();
    const cell = 10;
    const margin = 4 * cell;
    const size = count * cell + margin * 2;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", `QR code de ${b.nom}`);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#1B2A4A";
    for (let row = 0; row < count; row++) {
      for (let col = 0; col < count; col++) {
        if (qr.isDark(row, col)) ctx.fillRect(margin + col * cell, margin + row * cell, cell, cell);
      }
    }
    document.getElementById("qr-box").appendChild(canvas);
    document.getElementById("qr-download").addEventListener("click", () => {
      const link = document.createElement("a");
      link.download = `qr-${id}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }
})();
