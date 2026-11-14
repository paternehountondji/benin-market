/* ===========================================================
   SMART HOUSE — boutique
   Charge products.json, gère le panier (total automatique),
   le compte client simple et la commande par WhatsApp.
   =========================================================== */

const CATEGORY_LABELS = {
  telephonie: "Téléphonie",
  audio: "Audio",
  maison: "Maison"
};

/* Pictogrammes affichés quand un produit n'a pas encore de photo. */
const ICONS = {
  audio: '<path d="M14 34v-6a18 18 0 0 1 36 0v6"/><rect x="8" y="34" width="12" height="18" rx="5"/><rect x="44" y="34" width="12" height="18" rx="5"/>',
  enceinte: '<rect x="16" y="6" width="32" height="52" rx="6"/><circle cx="32" cy="40" r="9"/><circle cx="32" cy="19" r="4"/>',
  chargeur: '<rect x="18" y="24" width="28" height="30" rx="5"/><path d="M26 24V10M38 24V10"/><path d="M33 31l-5 9h8l-5 9"/>',
  cable: '<rect x="8" y="24" width="14" height="16" rx="3"/><rect x="42" y="24" width="14" height="16" rx="3"/><path d="M22 32h20"/>',
  batterie: '<rect x="18" y="8" width="28" height="48" rx="6"/><path d="M26 44h12M26 36h12M26 28h12"/>',
  coque: '<rect x="18" y="6" width="28" height="52" rx="7"/><rect x="24" y="12" width="10" height="10" rx="3"/>',
  mixeur: '<path d="M20 8h24l-4 30H24z"/><rect x="18" y="38" width="28" height="18" rx="4"/><circle cx="32" cy="47" r="3"/>',
  fer: '<path d="M8 44c0-12 10-20 24-20h18l6 20z"/><path d="M8 44h48v6H8z"/><path d="M30 24c0-6 4-10 12-10"/>',
  ventilateur: '<circle cx="32" cy="26" r="18"/><circle cx="32" cy="26" r="4"/><path d="M32 22c-2-8 4-12 8-8M36 28c8-2 12 4 8 8M29 29c-4 7-11 5-11-1"/><path d="M32 44v12M22 58h20"/>',
  lampe: '<path d="M22 28a10 10 0 0 1 20 0c0 6-4 8-4 14H26c0-6-4-8-4-14z"/><path d="M27 48h10M29 54h6"/><path d="M32 6v6M12 16l4 4M52 16l-4 4"/>'
};

const STORAGE_CART = "smarthouse-panier";
const STORAGE_ACCOUNT = "smarthouse-compte";

let products = [];
let whatsappNumber = "";
let activeCategory = "";
let cart = {};      // { idProduit: quantité }
let account = null; // { nom, tel, ville }
let orderAfterLogin = false;

/* ---------- Stockage local (protégé : il peut être bloqué) ---------- */

function loadStored(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    return fallback;
  }
}

function saveStored(key, value) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    /* le site continue de fonctionner sans mémoire */
  }
}

/* ---------- Outils ---------- */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatPrice(amount) {
  return `${String(Math.round(amount)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} FCFA`;
}

function findProduct(id) {
  return products.find((p) => p.id === id);
}

function cartLines() {
  return Object.keys(cart)
    .map((id) => ({ product: findProduct(id), qty: cart[id] }))
    .filter((line) => line.product && line.qty > 0);
}

function cartTotal() {
  return cartLines().reduce((sum, line) => sum + line.product.prix * line.qty, 0);
}

/* ---------- Catalogue ---------- */

function renderFilters() {
  const box = document.getElementById("filters");
  const cats = [...new Set(products.map((p) => p.categorie))];
  const chips = [{ id: "", label: "Tout" }].concat(cats.map((c) => ({ id: c, label: CATEGORY_LABELS[c] || c })));
  box.innerHTML = chips
    .map(
      (c) =>
        `<button type="button" class="filter" data-cat="${escapeHtml(c.id)}" aria-pressed="${c.id === activeCategory}">${escapeHtml(c.label)}</button>`
    )
    .join("");
  box.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderFilters();
      renderGrid();
    });
  });
}

function renderGrid() {
  const grid = document.getElementById("grid");
  const visible = products.filter((p) => !activeCategory || p.categorie === activeCategory);
  grid.innerHTML = visible
    .map((p) => {
      const visual = p.photo
        ? `<img src="${escapeHtml(p.photo)}" alt="${escapeHtml(p.nom)}" loading="lazy">`
        : `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[p.icone] || ICONS.coque}</svg>`;
      return `
      <li class="card">
        <div class="card-visual tone-${escapeHtml(p.categorie)}">
          ${visual}
          <span class="price-tag">${formatPrice(p.prix)}</span>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(p.nom)}</h3>
          <p>${escapeHtml(p.description)}</p>
          <button type="button" class="add-btn" data-id="${escapeHtml(p.id)}">Ajouter au panier</button>
        </div>
      </li>`;
    })
    .join("");
  grid.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id);
      btn.textContent = "Ajouté";
      btn.classList.add("added");
      setTimeout(() => {
        btn.textContent = "Ajouter au panier";
        btn.classList.remove("added");
      }, 900);
    });
  });
}

/* ---------- Panier ---------- */

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveStored(STORAGE_CART, cart);
  renderCart();
}

function changeQty(id, delta) {
  const next = (cart[id] || 0) + delta;
  if (next <= 0) delete cart[id];
  else cart[id] = next;
  saveStored(STORAGE_CART, cart);
  renderCart();
}

function renderCart() {
  const lines = cartLines();
  const list = document.getElementById("ticket-lines");
  const count = lines.reduce((sum, line) => sum + line.qty, 0);

  document.getElementById("cart-count").textContent = count;
  document.getElementById("ticket-empty").hidden = lines.length > 0;
  document.getElementById("ticket-total").textContent = formatPrice(cartTotal());
  document.getElementById("order-btn").disabled = lines.length === 0;

  list.innerHTML = lines
    .map(
      (line) => `
      <li class="ticket-line">
        <div class="line-top">
          <span>${escapeHtml(line.product.nom)}</span>
          <span>${formatPrice(line.product.prix * line.qty)}</span>
        </div>
        <div class="line-qty">
          <button type="button" class="qty-btn" data-id="${escapeHtml(line.product.id)}" data-delta="-1" aria-label="Retirer un ${escapeHtml(line.product.nom)}">−</button>
          <span>${line.qty} × ${formatPrice(line.product.prix)}</span>
          <button type="button" class="qty-btn" data-id="${escapeHtml(line.product.id)}" data-delta="1" aria-label="Ajouter un ${escapeHtml(line.product.nom)}">+</button>
          <button type="button" class="line-remove" data-id="${escapeHtml(line.product.id)}">Retirer</button>
        </div>
      </li>`
    )
    .join("");

  list.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => changeQty(btn.dataset.id, Number(btn.dataset.delta)));
  });
  list.querySelectorAll(".line-remove").forEach((btn) => {
    btn.addEventListener("click", () => changeQty(btn.dataset.id, -(cart[btn.dataset.id] || 0)));
  });
}

/* ---------- Compte client ---------- */

function renderAccount() {
  const btn = document.getElementById("account-btn");
  const client = document.getElementById("ticket-client");
  if (account) {
    btn.textContent = `Bonjour, ${account.nom.split(" ")[0]}`;
    client.textContent = `Client : ${account.nom}, ${account.ville}`;
  } else {
    btn.textContent = "Me connecter";
    client.textContent = "";
  }
}

function openAccountDialog() {
  const dialog = document.getElementById("account-dialog");
  document.getElementById("acc-nom").value = account ? account.nom : "";
  document.getElementById("acc-tel").value = account ? account.tel : "";
  document.getElementById("acc-ville").value = account ? account.ville : "";
  document.getElementById("account-logout").hidden = !account;
  dialog.showModal();
}

function setupAccount() {
  const dialog = document.getElementById("account-dialog");
  document.getElementById("account-btn").addEventListener("click", () => {
    orderAfterLogin = false;
    openAccountDialog();
  });
  document.getElementById("account-cancel").addEventListener("click", () => dialog.close());
  document.getElementById("account-logout").addEventListener("click", () => {
    account = null;
    saveStored(STORAGE_ACCOUNT, null);
    renderAccount();
    dialog.close();
  });
  document.getElementById("account-form").addEventListener("submit", () => {
    account = {
      nom: document.getElementById("acc-nom").value.trim(),
      tel: document.getElementById("acc-tel").value.trim(),
      ville: document.getElementById("acc-ville").value.trim()
    };
    saveStored(STORAGE_ACCOUNT, account);
    renderAccount();
    if (orderAfterLogin) {
      orderAfterLogin = false;
      sendOrder();
    }
  });
}

/* ---------- Commande ---------- */

function buildOrderMessage() {
  const lines = cartLines().map(
    (line) => `- ${line.qty} x ${line.product.nom} : ${formatPrice(line.product.prix * line.qty)}`
  );
  return [
    "Bonjour SMART HOUSE, je souhaite commander :",
    "",
    ...lines,
    "",
    `Total : ${formatPrice(cartTotal())}`,
    "",
    `Nom : ${account.nom}`,
    `Téléphone : ${account.tel}`,
    `Livraison : ${account.ville}`
  ].join("\n");
}

function sendOrder() {
  if (cartLines().length === 0) return;
  if (!account) {
    orderAfterLogin = true;
    openAccountDialog();
    return;
  }
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildOrderMessage())}`;
  window.open(url, "_blank", "noopener");
}

/* ---------- Panneau panier sur mobile ---------- */

function setupCartPanel() {
  const ticket = document.getElementById("ticket");
  document.getElementById("cart-open").addEventListener("click", () => ticket.classList.add("open"));
  document.getElementById("cart-close").addEventListener("click", () => ticket.classList.remove("open"));
  document.getElementById("order-btn").addEventListener("click", sendOrder);
}

/* ---------- Initialisation ---------- */

(async function init() {
  cart = loadStored(STORAGE_CART, {});
  account = loadStored(STORAGE_ACCOUNT, null);
  setupAccount();
  setupCartPanel();
  renderAccount();

  try {
    const res = await fetch("products.json");
    if (!res.ok) throw new Error("Réponse réseau non valide");
    const data = await res.json();
    products = data.produits || [];
    whatsappNumber = data.whatsapp || "";
    document.getElementById("demo-banner").hidden = !data.demo;
  } catch (err) {
    console.error("Impossible de charger products.json :", err);
    document.getElementById("grid").innerHTML = "<li>Le catalogue n'a pas pu être chargé. Recharge la page.</li>";
  }

  renderFilters();
  renderGrid();
  renderCart();
})();
