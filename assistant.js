/* ===========================================================
   Benin Market — assistant d'aide
   Une bulle en bas de l'écran avec les questions fréquentes.
   Pas d'intelligence artificielle : les réponses sont écrites
   ici, et le reste part sur WhatsApp.
   =========================================================== */

(function () {
  const WHATSAPP = "2290159000398";
  /* Les pages de la boutique sont dans un sous-dossier : on remonte d'un niveau. */
  const ROOT = window.location.pathname.includes("/smart-house/") ? "../" : "";

  const FAQ = [
    {
      q: "Comment trouver une entreprise ?",
      a: "Tapez un produit, un service ou un nom dans la recherche, ou choisissez une catégorie. Vous pouvez aussi filtrer par ville.",
      lien: "annuaire.html",
      texteLien: "Ouvrir l'annuaire"
    },
    {
      q: "Comment inscrire mon entreprise ?",
      a: "Remplissez le formulaire d'inscription. Votre demande part sur notre WhatsApp et nous vous recontactons avant publication.",
      lien: "rejoindre.html",
      texteLien: "Inscrire mon entreprise"
    },
    {
      q: "Est-ce que c'est gratuit ?",
      a: "La fiche dans l'annuaire est gratuite. Les abonnements vont de 5 000 à 50 000 FCFA par mois et ajoutent la boutique en ligne, la publicité et la mise en avant.",
      lien: "offres.html",
      texteLien: "Voir les offres"
    },
    {
      q: "Comment obtenir une boutique en ligne ?",
      a: "À partir de l'offre Argent, nous créons votre boutique : vos produits avec photos et prix, un panier, et les commandes sur votre WhatsApp.",
      lien: "smart-house/index.html",
      texteLien: "Voir un exemple de boutique"
    },
    {
      q: "Comment commander un produit ?",
      a: "Ouvrez la boutique de l'entreprise, ajoutez vos articles au panier, puis envoyez la commande sur WhatsApp. Le paiement se fait à la livraison ou en boutique."
    },
    {
      q: "Comment vérifiez-vous les entreprises ?",
      a: "Nous confirmons le numéro par un appel et nous demandons une photo du commerce. Pour le badge « Entreprise vérifiée », nous contrôlons le registre de commerce et l'IFU.",
      lien: "rejoindre.html",
      texteLien: "En savoir plus"
    },
    {
      q: "Comment donner un avis ?",
      a: "Sur la fiche d'une entreprise, cliquez sur « Donner un avis ». Chaque avis est vérifié avant d'être publié.",
      lien: "avis.html",
      texteLien: "Donner un avis"
    },
    {
      q: "Une information est fausse, que faire ?",
      a: "Écrivez-nous sur WhatsApp. Nous corrigeons ou nous retirons la fiche."
    }
  ];

  const root = document.createElement("div");
  root.className = "helper";
  root.innerHTML = `
    <div class="helper-panel" id="helper-panel" hidden>
      <div class="helper-head">
        <strong>Besoin d'aide ?</strong>
        <button type="button" class="helper-close" id="helper-close" aria-label="Fermer l'aide">Fermer</button>
      </div>
      <div class="helper-body" id="helper-body"></div>
      <a class="helper-wa" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">Parler à quelqu'un sur WhatsApp</a>
    </div>
    <button type="button" class="helper-toggle" id="helper-toggle" aria-expanded="false" aria-controls="helper-panel">Aide</button>`;
  document.body.appendChild(root);

  const panel = root.querySelector("#helper-panel");
  const body = root.querySelector("#helper-body");
  const toggle = root.querySelector("#helper-toggle");

  function showQuestions() {
    body.innerHTML =
      '<p class="helper-intro">Choisissez une question :</p>' +
      FAQ.map((item, i) => `<button type="button" class="helper-q" data-i="${i}">${item.q}</button>`).join("");
    body.querySelectorAll(".helper-q").forEach((btn) => {
      btn.addEventListener("click", () => showAnswer(Number(btn.dataset.i)));
    });
  }

  function showAnswer(i) {
    const item = FAQ[i];
    const link = item.lien ? `<a class="helper-link" href="${ROOT}${item.lien}">${item.texteLien}</a>` : "";
    body.innerHTML = `
      <p class="helper-question">${item.q}</p>
      <p class="helper-answer">${item.a}</p>
      ${link}
      <button type="button" class="helper-back" id="helper-back">Autres questions</button>`;
    body.querySelector("#helper-back").addEventListener("click", showQuestions);
  }

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "Fermer" : "Aide";
    if (open) showQuestions();
  }

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  root.querySelector("#helper-close").addEventListener("click", () => setOpen(false));
})();
