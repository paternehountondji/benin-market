/* ===========================================================
   Benin Market — annuaire
   Charge businesses.json et alimente la page d'accueil
   et l'annuaire selon les éléments présents dans le DOM.
   =========================================================== */

/* Catégories : libellé + pictogramme.
   Pour remplacer un pictogramme par une vraie photo, ajoute
   photo: "images/categories/nom.jpg" sur la ligne de la catégorie. */
const CATEGORIES = {
  electronique: { label: "Électronique & Téléphonie", icon: '<rect x="20" y="6" width="24" height="52" rx="5"/><path d="M28 50h8"/>' },
  telecoms: { label: "Télécoms & Internet", icon: '<path d="M32 26v32M22 58h20M24 58l8-32 8 32"/><circle cx="32" cy="20" r="4"/><path d="M20 10a16 16 0 0 0 0 20M44 10a16 16 0 0 1 0 20"/>' },
  mode: { label: "Mode & Couture", icon: '<path d="M22 8l-14 10 6 10 6-4v32h24V24l6 4 6-10-14-10c-2 5-6 7-10 7s-8-2-10-7z"/>' },
  beaute: { label: "Beauté & Coiffure", icon: '<circle cx="16" cy="46" r="7"/><circle cx="16" cy="18" r="7"/><path d="M22 22l34 26M22 42l34-26"/>' },
  alimentation: { label: "Alimentation & Épicerie", icon: '<path d="M8 26h48l-6 28H14z"/><path d="M20 26l8-16M44 26l-8-16M24 34v12M32 34v12M40 34v12"/>' },
  restauration: { label: "Restauration & Maquis", icon: '<circle cx="34" cy="34" r="13"/><path d="M8 10v14a5 5 0 0 0 10 0V10M13 10v46M58 56V10c-5 4-7 12-7 22h7"/>' },
  agriculture: { label: "Agriculture & Élevage", icon: '<path d="M32 58V28"/><path d="M32 36c-14 0-20-8-20-20 12 0 20 6 20 20zM32 30c0-12 6-18 18-18 0 12-6 18-18 18z"/><path d="M18 58h28"/>' },
  btp: { label: "Bâtiment & Travaux publics", icon: '<rect x="8" y="14" width="48" height="40" rx="2"/><path d="M8 27h48M8 41h48M24 14v13M40 14v13M16 27v14M32 27v14M48 27v14M24 41v13M40 41v13"/>' },
  menuiserie: { label: "Menuiserie & Ébénisterie", icon: '<path d="M8 22h48v8H8zM14 30v26M50 30v26M14 44h36"/><path d="M22 22V10M42 22V10"/>' },
  vitrerie: { label: "Vitrerie & Aluminium", icon: '<rect x="10" y="8" width="44" height="48" rx="2"/><path d="M32 8v48M10 32h44M18 24l8-8M40 48l8-8"/>' },
  mecanique: { label: "Mécanique auto & moto", icon: '<circle cx="32" cy="32" r="10"/><path d="M32 6v10M32 48v10M6 32h10M48 32h10M14 14l7 7M43 43l7 7M50 14l-7 7M21 43l-7 7"/>' },
  transport: { label: "Transport & Livraison", icon: '<path d="M4 16h34v28H4zM38 26h12l10 10v8H38z"/><circle cx="16" cy="48" r="6"/><circle cx="48" cy="48" r="6"/>' },
  energie: { label: "Énergie & Solaire", icon: '<path d="M36 4L12 36h18l-4 24 26-34H34z"/>' },
  services: { label: "Services numériques", icon: '<rect x="12" y="12" width="40" height="28" rx="3"/><path d="M4 50h56l-6-10H10z"/>' },
  imprimerie: { label: "Imprimerie & Publicité", icon: '<path d="M18 22V8h28v14"/><rect x="8" y="22" width="48" height="22" rx="4"/><path d="M18 38h28v18H18z"/>' },
  sante: { label: "Santé & Pharmacie", icon: '<rect x="8" y="8" width="48" height="48" rx="10"/><path d="M32 20v24M20 32h24"/>' },
  education: { label: "Éducation & Formation", icon: '<path d="M4 24l28-14 28 14-28 14z"/><path d="M16 31v14c8 8 24 8 32 0V31M60 24v18"/>' },
  hotellerie: { label: "Hôtellerie & Tourisme", icon: '<path d="M6 14v40M6 42h52v12M6 30h30a10 10 0 0 1 10 10v2"/><circle cx="18" cy="24" r="5"/>' },
  banque: { label: "Banque & Finance", icon: '<path d="M6 24l26-16 26 16zM12 28v22M24 28v22M40 28v22M52 28v22M6 54h52"/>' },
  immobilier: { label: "Immobilier", icon: '<path d="M6 30L32 8l26 22"/><path d="M14 26v30h36V26"/><path d="M26 56V38h12v18"/>' },
  evenementiel: { label: "Événementiel & Décoration", icon: '<path d="M32 6l8 16 18 3-13 12 3 18-16-9-16 9 3-18L6 25l18-3z"/>' },
  artisanat: { label: "Artisanat & Art", icon: '<path d="M22 8h20M26 8c0 8-14 12-14 28a20 20 0 0 0 40 0c0-16-14-20-14-28"/><path d="M14 30h36"/>' },
  commerce: { label: "Commerce général", icon: '<path d="M8 24l6-14h36l6 14"/><path d="M8 24a8 8 0 0 0 16 0 8 8 0 0 0 16 0 8 8 0 0 0 16 0"/><path d="M12 32v24h40V32M26 56V42h12v14"/>' }
};

const TONES = ["tone-a", "tone-b", "tone-c", "tone-d"];

/* Offres payantes : libellé du badge et rang dans le classement (le plus haut en premier). */
const OFFRES = {
  premium: { label: "Premium", rang: 4 },
  gold: { label: "Gold", rang: 3 },
  argent: { label: "Argent", rang: 2 },
  bronze: { label: "Bronze", rang: 1 }
};

function offerRank(b) {
  return OFFRES[b.offre] ? OFFRES[b.offre].rang : 0;
}

function badgesHtml(b) {
  const offer = OFFRES[b.offre]
    ? `<span class="badge badge-${escapeHtml(b.offre)}">${OFFRES[b.offre].label}</span>`
    : "";
  const verified = b.verifiee ? '<span class="badge badge-verifiee">Entreprise vérifiée</span>' : "";
  return offer + verified;
}

function categoryLabel(id) {
  return CATEGORIES[id] ? CATEGORIES[id].label : id;
}

function categoryVisual(id) {
  const cat = CATEGORIES[id];
  if (cat && cat.photo) return `<img src="${escapeHtml(cat.photo)}" alt="" loading="lazy">`;
  const icon = cat ? cat.icon : CATEGORIES.commerce.icon;
  return `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg>`;
}

/* ---------- Outils ---------- */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* Met en minuscules et retire les accents : « Téléphonie » devient « telephonie ». */
function normalize(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/* Transforme un nom en identifiant d'adresse : « Les Jus Tillou » devient « les-jus-tillou ». */
function slugify(str) {
  return normalize(str).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function ficheUrl(b) {
  return buildUrl("fiche.html", { id: slugify(b.nom) });
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    q: params.get("q") || "",
    cat: params.get("cat") || "",
    ville: params.get("ville") || ""
  };
}

function buildUrl(base, params) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) search.set(key, value);
  });
  const str = search.toString();
  return str ? `${base}?${str}` : base;
}

/* Les liens des tableaux Google sont dans config.js. Sans lien, le site lit businesses.json. */
const BM = window.BM_CONFIG || {};
const SHEET_CSV_URL = BM.tableauEntreprises || "";
const REVIEWS_CSV_URL = BM.tableauAvis || "";

/* Avis sur Benin Market lui-même (affichés en bas de l'accueil). */
let SITE_REVIEWS = [];

/* Découpe un texte CSV en lignes et en cellules (gère les guillemets et les virgules dans une cellule). */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += ch;
    }
  }
  if (cell !== "" || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

function isYes(value) {
  return ["oui", "yes", "true", "vrai", "x", "1"].includes(normalize(value).trim());
}

/* Accepte l'identifiant (« electronique ») ou le libellé (« Électronique & Téléphonie »). */
function categoryId(value) {
  const wanted = normalize(value).trim();
  if (CATEGORIES[wanted]) return wanted;
  const found = Object.keys(CATEGORIES).find((id) => normalize(CATEGORIES[id].label) === wanted);
  return found || "commerce";
}

/* Transforme les lignes du tableau en fiches d'entreprises. La première ligne contient les noms de colonnes. */
function rowsToBusinesses(rows) {
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => normalize(h).replace(/[^a-z]/g, ""));
  const col = (row, name) => {
    const index = headers.indexOf(name);
    return index === -1 ? "" : (row[index] || "").trim();
  };
  return rows
    .slice(1)
    .filter((row) => col(row, "nom"))
    .map((row) => ({
      nom: col(row, "nom"),
      categorie: categoryId(col(row, "categorie")),
      ville: col(row, "ville"),
      description: col(row, "description"),
      contact: col(row, "contact"),
      lien: col(row, "lien"),
      photo: col(row, "photo"),
      boutique: col(row, "boutique"),
      offre: normalize(col(row, "offre")).trim().replace("gratuit", ""),
      verifiee: isYes(col(row, "verifiee")),
      membreFondateur: isYes(col(row, "membrefondateur")),
      motsCles: col(row, "motscles")
        .split(",")
        .map((word) => word.trim())
        .filter(Boolean),
      avis: []
    }));
}

async function loadBusinessList() {
  if (SHEET_CSV_URL) {
    try {
      const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("Tableau inaccessible");
      const list = rowsToBusinesses(parseCsv(await res.text()));
      if (list.length) return list;
      throw new Error("Tableau vide");
    } catch (err) {
      console.warn("Tableau Google Sheets indisponible, lecture de businesses.json :", err);
    }
  }
  try {
    const res = await fetch("businesses.json");
    if (!res.ok) throw new Error("Réponse réseau non valide");
    return await res.json();
  } catch (err) {
    console.error("Impossible de charger businesses.json :", err);
    return [];
  }
}

/* Lit le tableau des réponses au formulaire d'avis. Seules les lignes où la colonne
   « publier » contient « oui » sont affichées : c'est toi qui valides chaque avis. */
async function loadReviews() {
  if (!REVIEWS_CSV_URL) return [];
  try {
    const res = await fetch(REVIEWS_CSV_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Tableau des avis inaccessible");
    const rows = parseCsv(await res.text());
    if (rows.length < 2) return [];
    const headers = rows[0].map((h) => normalize(h));
    const find = (...words) => headers.findIndex((h) => words.some((word) => h.includes(word)));
    const iBusiness = find("entreprise");
    const iText = find("votre avis", "commentaire", "avis");
    const iAuthor = headers.findIndex((h, i) => i !== iBusiness && h.includes("nom"));
    const iNote = find("note");
    const iPublish = find("publier");
    return rows
      .slice(1)
      .filter((row) => iPublish !== -1 && isYes(row[iPublish] || ""))
      .map((row) => ({
        entreprise: (row[iBusiness] || "").trim(),
        auteur: (row[iAuthor] || "").trim() || "Anonyme",
        note: parseInt(row[iNote], 10) || 0,
        texte: (row[iText] || "").trim()
      }))
      .filter((review) => review.texte);
  } catch (err) {
    console.warn("Avis indisponibles :", err);
    return [];
  }
}

/* Charge les entreprises, puis range chaque avis publié sous la bonne entreprise. */
async function loadBusinesses() {
  const [businesses, reviews] = await Promise.all([loadBusinessList(), loadReviews()]);
  SITE_REVIEWS = reviews.filter((review) => normalize(review.entreprise).includes("benin market"));
  businesses.forEach((b) => {
    const own = reviews.filter((review) => normalize(review.entreprise).trim() === normalize(b.nom).trim());
    b.avis = (Array.isArray(b.avis) ? b.avis : []).concat(own);
  });
  return businesses;
}

function starsText(note) {
  const n = Math.max(0, Math.min(5, Number(note) || 0));
  return "★".repeat(n) + "☆".repeat(5 - n);
}

function renderSiteReviews() {
  const box = document.getElementById("site-reviews");
  if (!box) return;
  if (SITE_REVIEWS.length === 0) {
    box.innerHTML = '<p class="site-reviews-empty">Aucun avis publié pour l\'instant. Soyez le premier à donner le vôtre.</p>';
    return;
  }
  box.innerHTML = `<ul class="site-review-list">${SITE_REVIEWS.slice(-6)
    .reverse()
    .map(
      (r) => `
      <li>
        <span class="stars" aria-label="${escapeHtml(r.note)} sur 5">${starsText(r.note)}</span>
        <p>${escapeHtml(r.texte)}</p>
        <strong>${escapeHtml(r.auteur)}</strong>
      </li>`
    )
    .join("")}</ul>`;
}

function getCities(businesses) {
  return [...new Set(businesses.map((b) => b.ville))].sort((a, b) => a.localeCompare(b, "fr"));
}

/* Texte dans lequel on cherche : nom, description, ville, catégorie et mots-clés. */
function searchText(b) {
  return normalize(`${b.nom} ${b.description} ${b.ville} ${categoryLabel(b.categorie)} ${(b.motsCles || []).join(" ")}`);
}

function matchesQuery(b, query) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const text = searchText(b);
  return words.every((word) => text.includes(word));
}

/* Les 77 communes du Bénin, classées par département. */
const COMMUNES = {
  "Alibori": ["Banikoara", "Gogounou", "Kandi", "Karimama", "Malanville", "Ségbana"],
  "Atacora": ["Boukoumbé", "Cobly", "Kérou", "Kouandé", "Matéri", "Natitingou", "Péhunco", "Tanguiéta", "Toucountouna"],
  "Atlantique": ["Abomey-Calavi", "Allada", "Kpomassè", "Ouidah", "Sô-Ava", "Toffo", "Tori-Bossito", "Zè"],
  "Borgou": ["Bembèrèkè", "Kalalé", "N'Dali", "Nikki", "Parakou", "Pèrèrè", "Sinendé", "Tchaourou"],
  "Collines": ["Bantè", "Dassa-Zoumè", "Glazoué", "Ouèssè", "Savalou", "Savè"],
  "Couffo": ["Aplahoué", "Djakotomey", "Dogbo", "Klouékanmè", "Lalo", "Toviklin"],
  "Donga": ["Bassila", "Copargo", "Djougou", "Ouaké"],
  "Littoral": ["Cotonou"],
  "Mono": ["Athiémé", "Bopa", "Comè", "Grand-Popo", "Houéyogbé", "Lokossa"],
  "Ouémé": ["Adjarra", "Adjohoun", "Aguégués", "Akpro-Missérété", "Avrankou", "Bonou", "Dangbo", "Porto-Novo", "Sèmè-Kpodji"],
  "Plateau": ["Adja-Ouèrè", "Ifangni", "Kétou", "Pobè", "Sakété"],
  "Zou": ["Abomey", "Agbangnizoun", "Bohicon", "Covè", "Djidja", "Ouinhi", "Za-Kpota", "Zagnanado", "Zogbodomey"]
};

/* Remplit une liste de villes avec les 77 communes, regroupées par département. */
function fillCitySelect(select, businesses, selected) {
  if (!select) return;
  const known = Object.values(COMMUNES).flat();
  const option = (city) =>
    `<option value="${escapeHtml(city)}"${city === selected ? " selected" : ""}>${escapeHtml(city)}</option>`;
  const groups = Object.keys(COMMUNES).map(
    (dept) => `<optgroup label="${escapeHtml(dept)}">${COMMUNES[dept].map(option).join("")}</optgroup>`
  );
  /* Une ville écrite autrement dans une fiche reste proposée, pour ne cacher aucune entreprise. */
  const others = getCities(businesses).filter((city) => !known.includes(city));
  if (others.length) groups.push(`<optgroup label="Autres">${others.map(option).join("")}</optgroup>`);
  select.innerHTML = '<option value="">Tout le Bénin</option>' + groups.join("");
}

/* ---------- Suggestions pendant la saisie ---------- */

function setupSuggestions(input, box, businesses) {
  if (!input || !box) return;

  function close() {
    box.hidden = true;
    box.innerHTML = "";
  }

  function render() {
    const query = input.value.trim();
    if (query.length < 2) {
      close();
      return;
    }
    const q = normalize(query);
    const companies = businesses
      .filter((b) => matchesQuery(b, query))
      .sort(
        (a, b) =>
          Number(normalize(b.nom).startsWith(q)) - Number(normalize(a.nom).startsWith(q)) || offerRank(b) - offerRank(a)
      )
      .slice(0, 5);
    const cats = Object.keys(CATEGORIES)
      .filter((id) => normalize(CATEGORIES[id].label).includes(q))
      .slice(0, 3);

    if (companies.length === 0 && cats.length === 0) {
      box.innerHTML = `<p class="suggest-empty">Aucun résultat pour « ${escapeHtml(query)} ». <a href="rejoindre.html">Ajouter une entreprise</a></p>`;
      box.hidden = false;
      return;
    }

    const companyHtml = companies
      .map(
        (b) => `
        <a class="suggest-item" href="${ficheUrl(b)}">
          <strong>${escapeHtml(b.nom)} ${badgesHtml(b)}</strong>
          <span>${escapeHtml(b.ville)} · ${escapeHtml(categoryLabel(b.categorie))}</span>
        </a>`
      )
      .join("");
    const catHtml = cats
      .map(
        (id) => `
        <a class="suggest-item suggest-cat" href="${buildUrl("annuaire.html", { cat: id })}">
          <strong>${escapeHtml(CATEGORIES[id].label)}</strong>
          <span>Voir toute la catégorie</span>
        </a>`
      )
      .join("");
    box.innerHTML = companyHtml + catHtml;
    box.hidden = false;
  }

  input.addEventListener("input", render);
  input.addEventListener("focus", render);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  document.addEventListener("click", (e) => {
    if (!box.contains(e.target) && e.target !== input) close();
  });
}

/* ---------- Page d'accueil ---------- */

function renderHomeStats(businesses) {
  const countEl = document.getElementById("stat-count");
  const catEl = document.getElementById("stat-categories");
  const cityEl = document.getElementById("stat-cities");
  if (!countEl || !catEl || !cityEl) return;
  countEl.textContent = businesses.length;
  catEl.textContent = Object.keys(CATEGORIES).length;
  cityEl.textContent = getCities(businesses).length;
}

function renderHomeCategories(businesses) {
  const grid = document.getElementById("categories-grid");
  if (!grid) return;
  grid.innerHTML = Object.keys(CATEGORIES)
    .map((id, index) => {
      const count = businesses.filter((b) => b.categorie === id).length;
      const countText = count === 0 ? "Bientôt" : count === 1 ? "1 entreprise" : `${count} entreprises`;
      return `
      <li>
        <a class="cat-card" href="${buildUrl("annuaire.html", { cat: id })}">
          <span class="cat-visual ${TONES[index % TONES.length]}">${categoryVisual(id)}</span>
          <span class="cat-name">${escapeHtml(CATEGORIES[id].label)}</span>
          <span class="cat-count">${countText}</span>
        </a>
      </li>`;
    })
    .join("");
}

function setupHeroSearch(businesses) {
  const form = document.getElementById("hero-search-form");
  if (!form) return;
  const input = document.getElementById("hero-search-input");
  fillCitySelect(document.getElementById("hero-city-select"), businesses, "");
  setupSuggestions(input, document.getElementById("hero-suggestions"), businesses);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ville = document.getElementById("hero-city-select").value;
    window.location.href = buildUrl("annuaire.html", { q: input.value.trim(), ville });
  });
}

/* ---------- Annuaire ---------- */

function renderDirectory(businesses) {
  const list = document.getElementById("directory-list");
  const empty = document.getElementById("empty-state");
  if (!list) return;

  const searchInput = document.getElementById("search-input");
  const citySelect = document.getElementById("city-filter");
  const catSelect = document.getElementById("category-filter");
  const countEl = document.getElementById("result-count");
  const params = getQueryParams();

  if (searchInput) searchInput.value = params.q;
  fillCitySelect(citySelect, businesses, params.ville);
  if (catSelect) {
    catSelect.innerHTML = ['<option value="">Toutes les catégories</option>']
      .concat(
        Object.keys(CATEGORIES).map(
          (id) => `<option value="${id}"${id === params.cat ? " selected" : ""}>${escapeHtml(CATEGORIES[id].label)}</option>`
        )
      )
      .join("");
  }

  function draw() {
    const query = searchInput ? searchInput.value.trim() : "";
    const city = citySelect ? citySelect.value : "";
    const cat = catSelect ? catSelect.value : "";
    const filtered = businesses
      .filter((b) => (!cat || b.categorie === cat) && (!city || b.ville === city) && (!query || matchesQuery(b, query)))
      .sort((a, b) => offerRank(b) - offerRank(a));

    if (countEl) {
      countEl.textContent = filtered.length === 1 ? "1 entreprise trouvée" : `${filtered.length} entreprises trouvées`;
    }

    if (filtered.length === 0) {
      list.innerHTML = "";
      if (empty) empty.hidden = false;
      return;
    }
    if (empty) empty.hidden = true;

    list.innerHTML = filtered
      .map((b) => {
        const initial = escapeHtml((b.nom || "?").trim().charAt(0).toUpperCase());
        const digits = (b.contact || "").replace(/\D/g, "");
        const callLine = digits ? `<a href="tel:+${digits}">${escapeHtml(b.contact)}</a>` : "";
        const whatsappLine = digits
          ? `<a href="https://wa.me/${digits}" target="_blank" rel="noopener">WhatsApp</a>`
          : "";
        const linkLine = b.lien ? `<a href="${escapeHtml(b.lien)}" target="_blank" rel="noopener">${b.lien.includes("facebook.com") ? "Page Facebook" : "Voir le site"}</a>` : "";
        const thumb = b.photo
          ? `<img class="entry-photo" src="${escapeHtml(b.photo)}" alt="" loading="lazy" width="56" height="56">`
          : `<span class="entry-initial" aria-hidden="true">${initial}</span>`;
        const shopLine = b.boutique
          ? `<a class="shop-link" href="${escapeHtml(b.boutique)}">Visiter la boutique</a>`
          : "";
        const nameHtml = `<a href="${ficheUrl(b)}">${escapeHtml(b.nom)}</a>`;
        const ficheLine = `<a class="shop-link" href="${ficheUrl(b)}">Voir la fiche</a>`;
        const reviews = Array.isArray(b.avis) ? b.avis : [];
        const reviewUrl = buildUrl("avis.html", { entreprise: b.nom });
        const reviewsHtml = reviews.length
          ? `<ul class="review-list">${reviews
              .map(
                (r) =>
                  `<li><strong>${escapeHtml(r.auteur)}</strong> <span class="stars">${starsText(r.note)}</span><br>${escapeHtml(r.texte)}</li>`
              )
              .join("")}</ul><a class="review-link" href="${reviewUrl}">Donner un avis</a>`
          : `<p class="review-empty">Pas encore d'avis. <a href="${reviewUrl}">Donner le premier avis</a></p>`;
        return `
        <li class="entry">
          ${thumb}
          <div>
            <h3>${nameHtml} ${badgesHtml(b)}</h3>
            <p class="meta">${escapeHtml(b.ville)}${b.membreFondateur ? " · Membre fondateur" : ""}</p>
            <span class="cat-tag">${escapeHtml(categoryLabel(b.categorie))}</span>
            <p>${escapeHtml(b.description)}</p>
            ${reviewsHtml}
          </div>
          <div class="entry-contact">${ficheLine}${shopLine}${callLine}${whatsappLine}${linkLine}</div>
        </li>`;
      })
      .join("");
  }

  draw();

  if (searchInput) searchInput.addEventListener("input", draw);
  if (citySelect) citySelect.addEventListener("change", draw);
  if (catSelect) catSelect.addEventListener("change", draw);
}

/* ---------- Initialisation ---------- */

(async function init() {
  const businesses = await loadBusinesses();
  renderHomeStats(businesses);
  renderHomeCategories(businesses);
  setupHeroSearch(businesses);
  renderDirectory(businesses);
  renderSiteReviews();
})();
