/* ========================================================================= */
/* === FUTURE APIs GO HERE ===                                               */
/* ========================================================================= */
// Later, if you connect a backend or API, you can add fetch calls here.
// Example:
// async function sendOrderToApi(orderData) {
//   return fetch("https://your-api-url.com/orders", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(orderData)
//   });
// }

/* ========================================================================= */
/* === CUSTOMIZATION OPTIONS (SIZES, ICE, SWEETNESS, TOPPINGS) ARE HERE ===  */
/* ========================================================================= */
const SIZES = [
  { id: "medium", label: "Medium", extraPrice: 0 },
  { id: "large", label: "Large", extraPrice: 0.75 }
];

const ICE_LEVELS = ["Regular Ice", "Less Ice", "No Ice"];

const SWEET_LEVELS = ["100% Sweet", "70% Sweet", "50% Sweet"];

const TOPPINGS = [
  { id: "pearls", label: "Boba Pearls", price: 0.75, color: "#2b1d2e" },
  { id: "jelly", label: "Fruit Jelly", price: 0.75, color: "#ff6b9d" },
  { id: "foam", label: "Sweet Foam", price: 1.00, color: "#fff5d6" },
  { id: "pudding", label: "Egg Pudding", price: 1.00, color: "#ffd166" }
];

/* ========================================================================= */
/* === THE 6 TEAS & INDIVIDUAL DRINK ARTWORKS ARE HERE ===                  */
/* ========================================================================= */
// Edit tea names, prices, simple descriptions, colors, or cup art right here.

// --- TEA 1: BROWN SUGAR MILK TEA ARTWORK IS HERE ---
function brownSugarCupArt(toppings) {
  return buildCupSvg({
    drinkColor: "#d99b66",
    swirlColor: "#6e3b1e",
    bgTint: "#fff1e4",
    toppings
  });
}

// --- TEA 2: TARO MILK TEA ARTWORK IS HERE ---
function taroCupArt(toppings) {
  return buildCupSvg({
    drinkColor: "#b899eb",
    swirlColor: "#946bd8",
    bgTint: "#f3ecff",
    toppings
  });
}

// --- TEA 3: MATCHA MILK TEA ARTWORK IS HERE ---
function matchaCupArt(toppings) {
  return buildCupSvg({
    drinkColor: "#8fd18c",
    swirlColor: "#4ea85a",
    bgTint: "#eaf9ea",
    toppings
  });
}

// --- TEA 4: MANGO GREEN TEA ARTWORK IS HERE ---
function mangoCupArt(toppings) {
  return buildCupSvg({
    drinkColor: "#ffd166",
    swirlColor: "#ff9f45",
    bgTint: "#fff7df",
    toppings
  });
}

// --- TEA 5: STRAWBERRY TEA ARTWORK IS HERE ---
function strawberryCupArt(toppings) {
  return buildCupSvg({
    drinkColor: "#ff8fb1",
    swirlColor: "#ff5c8a",
    bgTint: "#ffeaf1",
    toppings
  });
}

// --- TEA 6: ROASTED MILK TEA ARTWORK IS HERE ---
function roastedCupArt(toppings) {
  return buildCupSvg({
    drinkColor: "#c79a7b",
    swirlColor: "#7c5238",
    bgTint: "#f9efe8",
    toppings
  });
}

const MENU_ITEMS = [
  {
    id: "brown-sugar",
    name: "Brown Sugar Milk Tea",
    price: 5.25,
    description: "Sweet brown sugar syrup mixed with milk and black tea.",
    art: brownSugarCupArt
  },
  {
    id: "taro",
    name: "Taro Milk Tea",
    price: 5.25,
    description: "Smooth purple taro drink with creamy milk.",
    art: taroCupArt
  },
  {
    id: "matcha",
    name: "Matcha Milk Tea",
    price: 5.50,
    description: "Green matcha tea blended with cold milk.",
    art: matchaCupArt
  },
  {
    id: "mango",
    name: "Mango Green Tea",
    price: 5.00,
    description: "Light green tea with sweet mango flavor.",
    art: mangoCupArt
  },
  {
    id: "strawberry",
    name: "Strawberry Tea",
    price: 5.00,
    description: "Fruity strawberry drink with crisp tea.",
    art: strawberryCupArt
  },
  {
    id: "roasted",
    name: "Roasted Milk Tea",
    price: 5.25,
    description: "Toasted tea flavor with rich, creamy milk.",
    art: roastedCupArt
  }
];

/* ========================================================================= */
/* === REUSABLE CUP SVG BUILDER IS HERE ===                                  */
/* ========================================================================= */
function buildCupSvg({ drinkColor, swirlColor, bgTint, toppings = [] }) {
  const hasPearls = toppings.includes("pearls");
  const hasJelly = toppings.includes("jelly");
  const hasFoam = toppings.includes("foam");
  const hasPudding = toppings.includes("pudding");

  return `
    <svg width="128" height="142" viewBox="0 0 128 142" style="background:${bgTint};border-radius:14px;" aria-hidden="true">
      <!-- Straw -->
      <rect x="74" y="8" width="10" height="44" rx="4" fill="#ff6b9d" />
      <!-- Lid -->
      <rect x="24" y="34" width="80" height="12" rx="6" fill="#ffffff" stroke="#251926" stroke-width="2.5" />
      <!-- Cup Body -->
      <path d="M30 46 L38 128 Q40 134 48 134 L80 134 Q88 134 90 128 L98 46 Z" fill="#ffffff" stroke="#251926" stroke-width="2.5" />
      <!-- Tea Liquid -->
      <path d="M33 62 L39 126 Q41 131 48 131 L80 131 Q87 131 89 126 L95 62 Z" fill="${drinkColor}" />
      <!-- Swirl Line -->
      <path d="M37 78 Q64 68 91 78" fill="none" stroke="${swirlColor}" stroke-width="3" opacity="0.65" />
      <!-- Optional Sweet Foam -->
      ${hasFoam ? `<rect x="33" y="48" width="62" height="14" rx="6" fill="#fff8e1" />` : ""}
      <!-- Optional Egg Pudding -->
      ${hasPudding ? `<ellipse cx="64" cy="112" rx="18" ry="8" fill="#ffd166" />` : ""}
      <!-- Optional Boba Pearls -->
      ${hasPearls ? `
        <circle cx="48" cy="122" r="5.5" fill="#2b1d2e" />
        <circle cx="60" cy="124" r="5.5" fill="#2b1d2e" />
        <circle cx="72" cy="123" r="5.5" fill="#2b1d2e" />
        <circle cx="82" cy="120" r="5.5" fill="#2b1d2e" />
      ` : ""}
      <!-- Optional Fruit Jelly -->
      ${hasJelly ? `
        <rect x="44" y="108" width="9" height="9" rx="2" fill="#ff6b9d" />
        <rect x="68" y="106" width="9" height="9" rx="2" fill="#ff6b9d" />
      ` : ""}
    </svg>
  `;
}

/* ========================================================================= */
/* === APP STATE (CURRENT SELECTION & CART) IS HERE ===                      */
/* ========================================================================= */
let activeDrink = MENU_ITEMS[0];
let selectedSize = SIZES[0].id;
let selectedIce = ICE_LEVELS[0];
let selectedSweet = SWEET_LEVELS[0];
let selectedToppings = [];
let cart = [];

/* ========================================================================= */
/* === RENDER MENU & HERO PREVIEW IS HERE ===                                */
/* ========================================================================= */
const menuGrid = document.getElementById("menuGrid");
const heroCupPreview = document.getElementById("heroCupPreview");

function renderMenu() {
  menuGrid.innerHTML = "";

  MENU_ITEMS.forEach((drink) => {
    const card = document.createElement("article");
    card.className = "drink-card";
    card.innerHTML = `
      <div>
        <div class="drink-art">${drink.art([])}</div>
        <div class="drink-top" style="margin-top:12px;">
          <h3 class="drink-name">${drink.name}</h3>
          <span class="drink-price">$${drink.price.toFixed(2)}</span>
        </div>
        <p class="drink-desc">${drink.description}</p>
      </div>
      <button class="btn btn-primary full-width customize-btn" type="button">
        Customize
      </button>
    `;

    card.querySelector(".customize-btn").addEventListener("click", () => {
      openDrinkModal(drink);
    });

    menuGrid.appendChild(card);
  });

  heroCupPreview.innerHTML = MENU_ITEMS[1].art(["pearls"]);
}

/* ========================================================================= */
/* === CUSTOMIZER MODAL LOGIC IS HERE ===                                    */
/* ========================================================================= */
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalCupPreview = document.getElementById("modalCupPreview");
const modalPriceTag = document.getElementById("modalPriceTag");
const sizeOptions = document.getElementById("sizeOptions");
const iceOptions = document.getElementById("iceOptions");
const sweetOptions = document.getElementById("sweetOptions");
const toppingOptions = document.getElementById("toppingOptions");
const addToCartBtn = document.getElementById("addToCartBtn");

function openDrinkModal(drink) {
  activeDrink = drink;
  selectedSize = SIZES[0].id;
  selectedIce = ICE_LEVELS[0];
  selectedSweet = SWEET_LEVELS[0];
  selectedToppings = [];

  modalTitle.textContent = drink.name;
  modalDesc.textContent = drink.description;

  renderPillGroup(sizeOptions, SIZES.map((s) => s.label), SIZES[0].label, (label) => {
    const found = SIZES.find((s) => s.label === label);
    selectedSize = found ? found.id : SIZES[0].id;
    updateModalPreview();
  });

  renderPillGroup(iceOptions, ICE_LEVELS, selectedIce, (val) => {
    selectedIce = val;
    updateModalPreview();
  });

  renderPillGroup(sweetOptions, SWEET_LEVELS, selectedSweet, (val) => {
    selectedSweet = val;
    updateModalPreview();
  });

  renderToppings();
  updateModalPreview();

  modalBackdrop.classList.remove("hidden");
  modalBackdrop.setAttribute("aria-hidden", "false");
}

function closeDrinkModal() {
  modalBackdrop.classList.add("hidden");
  modalBackdrop.setAttribute("aria-hidden", "true");
}

function renderPillGroup(container, options, currentVal, onSelect) {
  container.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-pill" + (opt === currentVal ? " selected" : "");
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      container.querySelectorAll(".choice-pill").forEach((el) => el.classList.remove("selected"));
      btn.classList.add("selected");
      onSelect(opt);
    });
    container.appendChild(btn);
  });
}

function renderToppings() {
  toppingOptions.innerHTML = "";
  TOPPINGS.forEach((top) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "topping-btn";
    btn.innerHTML = `<span>${top.label}</span><span>+$${top.price.toFixed(2)}</span>`;

    btn.addEventListener("click", () => {
      if (selectedToppings.includes(top.id)) {
        selectedToppings = selectedToppings.filter((id) => id !== top.id);
        btn.classList.remove("selected");
      } else {
        selectedToppings.push(top.id);
        btn.classList.add("selected");
      }
      updateModalPreview();
    });

    toppingOptions.appendChild(btn);
  });
}

function calculateCurrentPrice() {
  const sizeObj = SIZES.find((s) => s.id === selectedSize) || SIZES[0];
  const toppingsTotal = selectedToppings.reduce((sum, id) => {
    const t = TOPPINGS.find((item) => item.id === id);
    return sum + (t ? t.price : 0);
  }, 0);
  return activeDrink.price + sizeObj.extraPrice + toppingsTotal;
}

function updateModalPreview() {
  modalCupPreview.innerHTML = activeDrink.art(selectedToppings);
  modalPriceTag.textContent = `$${calculateCurrentPrice().toFixed(2)}`;
}

closeModalBtn.addEventListener("click", closeDrinkModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeDrinkModal();
});

/* ========================================================================= */
/* === CART LOGIC IS HERE ===                                                */
/* ========================================================================= */
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartCount = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutMessage = document.getElementById("checkoutMessage");

function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.remove("hidden");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.add("hidden");
}

addToCartBtn.addEventListener("click", () => {
  const sizeObj = SIZES.find((s) => s.id === selectedSize) || SIZES[0];
  const toppingNames = selectedToppings
    .map((id) => TOPPINGS.find((t) => t.id === id)?.label)
    .filter(Boolean);

  cart.push({
    name: activeDrink.name,
    size: sizeObj.label,
    ice: selectedIce,
    sweet: selectedSweet,
    toppings: toppingNames,
    price: calculateCurrentPrice()
  });

  checkoutMessage.textContent = "";
  renderCart();
  closeDrinkModal();
  openCart();
});

function renderCart() {
  cartCount.textContent = String(cart.length);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
    cartTotalEl.textContent = "$0.00";
    return;
  }

  cartItemsEl.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const details = [item.size, item.ice, item.sweet];
    if (item.toppings.length > 0) {
      details.push("Toppings: " + item.toppings.join(", "));
    }

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-top">
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
      </div>
      <div class="cart-item-meta">${details.join(" • ")}</div>
      <div class="cart-item-actions">
        <button class="btn btn-small remove-item-btn" type="button">Remove</button>
      </div>
    `;

    row.querySelector(".remove-item-btn").addEventListener("click", () => {
      cart.splice(index, 1);
      renderCart();
    });

    cartItemsEl.appendChild(row);
  });

  cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    checkoutMessage.textContent = "Add a tea first!";
    return;
  }
  cart = [];
  renderCart();
  checkoutMessage.textContent = "Order placed! Thanks for visiting Boba Craft.";
});

openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

/* ========================================================================= */
/* === BOBA SPLASH PAD MINI-GAME IS HERE ===                                 */
/* ========================================================================= */
// Change tank tea colors or pearl colors right here.
const SPLASH_FLAVORS = [
  { id: "taro", label: "Taro", water: "rgba(184, 153, 235, 0.55)", pearl: "#2b1d2e" },
  { id: "matcha", label: "Matcha", water: "rgba(143, 209, 140, 0.55)", pearl: "#264e36" },
  { id: "strawberry", label: "Strawberry", water: "rgba(255, 143, 177, 0.55)", pearl: "#7a1c3d" },
  { id: "mango", label: "Mango", water: "rgba(255, 209, 102, 0.55)", pearl: "#8a4b08" }
];

const splashCanvas = document.getElementById("splashCanvas");
const splashCtx = splashCanvas.getContext("2d");
const flavorButtonsContainer = document.getElementById("tankFlavorButtons");
const bobaDroppedCountEl = document.getElementById("bobaDroppedCount");
const clearTankBtn = document.getElementById("clearTankBtn");

let currentFlavor = SPLASH_FLAVORS[0];
let pearls = [];
let ripples = [];
let droppedTotal = 0;
let wavePhase = 0;

function setupSplashButtons() {
  flavorButtonsContainer.innerHTML = "";
  SPLASH_FLAVORS.forEach((flavor) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "flavor-btn" + (flavor.id === currentFlavor.id ? " active" : "");
    btn.textContent = flavor.label;
    btn.addEventListener("click", () => {
      currentFlavor = flavor;
      flavorButtonsContainer.querySelectorAll(".flavor-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
    flavorButtonsContainer.appendChild(btn);
  });
}

function getWaterSurfaceY() {
  return splashCanvas.height * 0.42;
}

function dropPearlAt(clientX, clientY) {
  const rect = splashCanvas.getBoundingClientRect();
  const scaleX = splashCanvas.width / rect.width;
  const scaleY = splashCanvas.height / rect.height;
  const x = (clientX - rect.left) * scaleX;
  const y = Math.min((clientY - rect.top) * scaleY, getWaterSurfaceY() - 10);

  pearls.push({
    x,
    y,
    vy: 1.5,
    radius: 11,
    color: currentFlavor.pearl,
    splashed: false
  });

  droppedTotal += 1;
  bobaDroppedCountEl.textContent = `Pearls dropped: ${droppedTotal}`;
}

splashCanvas.addEventListener("pointerdown", (e) => {
  dropPearlAt(e.clientX, e.clientY);
});

clearTankBtn.addEventListener("click", () => {
  pearls = [];
  ripples = [];
  droppedTotal = 0;
  bobaDroppedCountEl.textContent = "Pearls dropped: 0";
});

function animateSplashPad() {
  const w = splashCanvas.width;
  const h = splashCanvas.height;
  const surfaceY = getWaterSurfaceY();

  splashCtx.clearRect(0, 0, w, h);

  // Soft sky / top background
  splashCtx.fillStyle = "#fffdf9";
  splashCtx.fillRect(0, 0, w, h);

  // Wavy tea surface
  wavePhase += 0.04;
  splashCtx.beginPath();
  splashCtx.moveTo(0, h);
  for (let x = 0; x <= w; x += 20) {
    const waveY = surfaceY + Math.sin(x * 0.02 + wavePhase) * 6;
    splashCtx.lineTo(x, waveY);
  }
  splashCtx.lineTo(w, h);
  splashCtx.closePath();
  splashCtx.fillStyle = currentFlavor.water;
  splashCtx.fill();

  // Splash ripples
  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    r.radius += 1.6;
    r.alpha -= 0.025;
    if (r.alpha <= 0) {
      ripples.splice(i, 1);
      continue;
    }
    splashCtx.beginPath();
    splashCtx.ellipse(r.x, r.y, r.radius, r.radius * 0.32, 0, 0, Math.PI * 2);
    splashCtx.strokeStyle = `rgba(255, 255, 255, ${r.alpha})`;
    splashCtx.lineWidth = 2.5;
    splashCtx.stroke();
  }

  // Boba pearls falling & resting at bottom
  const floorY = h - 14;
  pearls.forEach((p) => {
    if (!p.splashed && p.y >= surfaceY) {
      p.splashed = true;
      ripples.push({ x: p.x, y: surfaceY, radius: 6, alpha: 0.9 });
    }

    p.vy += p.y < surfaceY ? 0.35 : 0.14;
    p.y += p.vy;

    if (p.y > floorY) {
      p.y = floorY;
      p.vy *= -0.25;
    }

    splashCtx.beginPath();
    splashCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    splashCtx.fillStyle = p.color;
    splashCtx.fill();

    // Glossy highlight dot on boba pearl
    splashCtx.beginPath();
    splashCtx.arc(p.x - 3.5, p.y - 3.5, 3, 0, Math.PI * 2);
    splashCtx.fillStyle = "rgba(255, 255, 255, 0.55)";
    splashCtx.fill();
  });

  requestAnimationFrame(animateSplashPad);
}

/* ========================================================================= */
/* === STARTUP IS HERE ===                                                   */
/* ========================================================================= */
renderMenu();
renderCart();
setupSplashButtons();
animateSplashPad();