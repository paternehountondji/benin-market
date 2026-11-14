/* ===========================================================
   Benin Market — logique partagée
   Charge businesses.json et alimente la page d'accueil
   et l'annuaire selon les éléments présents dans le DOM.
   =========================================================== */

const CATEGORIES = {
  electronique: "Électronique & Téléphonie",
  mode: "Mode & Couture",
  alimentation: "Alimentation & Épicerie",
  agriculture: "Agriculture",
  btp: "Bâtiment & Travaux publics",
  services: "Services numériques",
  transport: "Transport & Logistique",
  commerce: "Commerce général"
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

async function loadBusinesses() {
  try {
    const res = await fetch("businesses.json");
    if (!res.ok) throw new Error("Réponse réseau non valide");
    return await res.json();
  } catch (err) {
    console.error("Impossible de charger businesses.json :", err);
    return [];
  }
}

function getCities(businesses) {
  return [...new Set(businesses.map((b) => b.ville))].sort((a, b) => a.localeCompare(b, "fr"));
}

function fillCitySelect(select, businesses, selected) {
  if (!select) return;
  const options = ['<option value="">Tout le Bénin</option>'].concat(
    getCities(businesses).map(
      (city) => `<option value="${escapeHtml(city)}"${city === selected ? " selected" : ""}>${escapeHtml(city)}</option>`
    )
  );
  select.innerHTML = options.join("");
}

/* ---------- Page d'accueil ---------- */

function renderHomeStats(businesses) {
  const countEl = document.getElementById("stat-count");
  const catEl = document.getElementById("stat-categories");
  const cityEl = document.getElementById("stat-cities");
  if (!countEl || !catEl || !cityEl) return;
  countEl.textContent = businesses.length;
  catEl.textContent = new Set(businesses.map((b) => b.categorie)).size;
  cityEl.textContent = getCities(businesses).length;
}

function renderHomeCategories(businesses) {
  const grid = document.getElementById("categories-grid");
  if (!grid) return;
  const usedCats = [...new Set(businesses.map((b) => b.categorie))];
  grid.innerHTML = usedCats
    .map((catId) => {
      const label = CATEGORIES[catId] || catId;
      return `<li><a href="${buildUrl("annuaire.html", { cat: catId })}">${escapeHtml(label)}</a></li>`;
    })
    .join("");
}

function setupHeroSearch(businesses) {
  const form = document.getElementById("hero-search-form");
  if (!form) return;
  fillCitySelect(document.getElementById("hero-city-select"), businesses, "");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("hero-search-input").value.trim();
    const ville = document.getElementById("hero-city-select").value;
    window.location.href = buildUrl("annuaire.html", { q, ville });
  });
}

/* ---------- Annuaire ---------- */

function renderDirectory(businesses) {
  const list = document.getElementById("directory-list");
  const empty = document.getElementById("empty-state");
  if (!list) return;

  const searchInput = document.getElementById("search-input");
  const citySelect = document.getElementById("city-filter");
  const chipRow = document.getElementById("category-filters");
  const params = getQueryParams();

  let activeCat = params.cat;
  if (searchInput) searchInput.value = params.q;
  fillCitySelect(citySelect, businesses, params.ville);

  function buildChips() {
    if (!chipRow) return;
    const usedCats = [...new Set(businesses.map((b) => b.categorie))];
    const chips = [{ id: "", label: "Toutes" }].concat(
      usedCats.map((c) => ({ id: c, label: CATEGORIES[c] || c }))
    );
    chipRow.innerHTML = chips
      .map(
        (c) =>
          `<button type="button" class="chip" data-cat="${escapeHtml(c.id)}" aria-pressed="${c.id === activeCat}">${escapeHtml(c.label)}</button>`
      )
      .join("");
    chipRow.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCat = btn.dataset.cat;
        chipRow.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-pressed", b === btn));
        draw();
      });
    });
  }

  function draw() {
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const city = citySelect ? citySelect.value : "";
    const filtered = businesses.filter((b) => {
      const matchesCat = !activeCat || b.categorie === activeCat;
      const matchesCity = !city || b.ville === city;
      const catLabel = CATEGORIES[b.categorie] || "";
      const haystack = `${b.nom} ${b.description} ${b.ville} ${catLabel}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesCat && matchesCity && matchesQuery;
    });

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
        const linkLine = b.lien ? `<a href="${escapeHtml(b.lien)}" target="_blank" rel="noopener">Voir le lien</a>` : "";
        return `
        <li class="entry">
          <span class="entry-initial" aria-hidden="true">${initial}</span>
          <div>
            <h3>${escapeHtml(b.nom)}</h3>
            <p class="meta">${escapeHtml(b.ville)}${b.membreFondateur ? " · Membre fondateur" : ""}</p>
            <span class="cat-tag">${escapeHtml(CATEGORIES[b.categorie] || b.categorie)}</span>
            <p>${escapeHtml(b.description)}</p>
          </div>
          <div class="entry-contact">${callLine}${whatsappLine}${linkLine}</div>
        </li>`;
      })
      .join("");
  }

  buildChips();
  draw();

  if (searchInput) searchInput.addEventListener("input", draw);
  if (citySelect) citySelect.addEventListener("change", draw);
}

/* ---------- Initialisation ---------- */

(async function init() {
  const businesses = await loadBusinesses();
  renderHomeStats(businesses);
  renderHomeCategories(businesses);
  setupHeroSearch(businesses);
  renderDirectory(businesses);
})();