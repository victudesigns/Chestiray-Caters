// Sticky Header toggle on scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

const navBtn = document.getElementById("nav-btn");
const navBody = document.querySelector(".side-nav nav");

if (navBtn && navBody) {
  navBtn.addEventListener("click", () => {
    navBody.classList.toggle("show");
  });
}

// Cart drawer toggle
const cartBtn = document.querySelector(".cart-btn");
const cartBody = document.querySelector(".cart-body");

if (cartBtn && cartBody) {
  cartBtn.addEventListener("click", () => {
    cartBody.classList.toggle("active");
  });
}

// Close cart button (index page)
const closeCartBtn = document.querySelector(".close-cart-btn");
if (closeCartBtn && cartBody) {
  closeCartBtn.addEventListener("click", () => {
    cartBody.classList.remove("active");
  });
}

/* ==========================================================================
   AUTH / SESSION HELPERS
   ========================================================================== */
const USERS_KEY = "chestiray_users";
const SESSION_KEY = "chestiray_user";
const ORDERS_KEY = "chestiray_orders";
const CHECKOUTS_KEY = "chestiray_checkouts";

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
  } catch (e) {
    return null;
  }
}

/* ==========================================================================
   PRODUCT CATALOGS (categorized)
   ========================================================================== */
const firstProducts = [
  {
    name: "crispy-fried-chicken",
    category: "mains",
    price: 14.0,
    discription:
      "Crispy fried chicken seasoned to perfection with house blend spices.",
    hot: true,
  },
  {
    name: "mexican-food-platter-with-tacos-grilled-chicken",
    category: "mains",
    price: 7.5,
    discription: "Loaded Mexican platter featuring tacos and seasoned chicken.",
    hot: true,
  },
  {
    name: "savory-beef-broccoli-curry-with-steamed-rice",
    category: "mains",
    price: 14.4,
    discription: "Tender beef slices and fresh broccoli in rich curry sauce.",
    hot: true,
  },
  {
    name: "spicy-shrimp-dish-black-bowl",
    category: "mains",
    price: 13.6,
    discription: "Fiery sauteed shrimp cooked in savory herb sauce.",
    hot: true,
  },
  {
    name: "tuna-salad",
    category: "salads-sides",
    price: 9.0,
    discription: "Fresh tuna salad tossed with greens and crisp vegetables.",
    hot: true,
  },
  {
    name: "vanilla-cupcake-with-creamy-white-frosting",
    category: "pastries",
    price: 4.5,
    discription:
      "Fluffy vanilla cupcake topped with rich buttercream frosting.",
    hot: true,
  },

  // --- REGULAR ITEMS ---
  {
    name: "decadent-chocolate-cake-symphony-brown",
    category: "pastries",
    price: 18.0,
    discription:
      "Rich and moist chocolate sponge cake layered with silky cream.",
  },
  {
    name: "delicious-chocolate-croissant-pastry",
    category: "pastries",
    price: 6.5,
    discription: "Flaky butter croissant filled with rich dark chocolate.",
  },
  {
    name: "donuts-with-sprinkles",
    category: "pastries",
    price: 7.0,
    discription: "Freshly baked sweet donuts glazed with colorful sprinkles.",
  },
  {
    name: "flavorful-jollof-rice-and-grilled-chicken",
    category: "rice-bowls",
    price: 15.0,
    discription:
      "Smoky West African Jollof rice served with juicy grilled chicken.",
  },
  {
    name: "healthy-vegetable-salad-plate",
    category: "salads-sides",
    price: 10.0,
    discription: "Fresh organic garden green salad served with house dressing.",
  },
  {
    name: "french-fries",
    category: "salads-sides",
    price: 5.0,
    discription: "Crispy golden potato fries served with dip.",
  },
  {
    name: "grilled-chicken-skewers-with-bell-peppers-onions-olives",
    category: "grills",
    price: 18.0,
    discription: "Tender chicken skewers grilled with fresh vegetables.",
  },
  {
    name: "red-white-velvet-cupcake-frosting-swirl",
    category: "pastries",
    price: 6.0,
    discription: "Classic red velvet cupcake topped with cream cheese swirl.",
  },
  {
    name: "spicy-grilled-chicken-skewers-with-roasted-bell-peppers",
    category: "grills",
    price: 17.5,
    discription: "Spicy char-grilled chicken skewers with sweet peppers.",
  },
  {
    name: "tasty-wedding-fondant-cake",
    category: "pastries",
    price: 50.0,
    discription: "Luxurious multi-layer fondant cake for special celebrations.",
  },
  {
    name: "chicken-biryani-rice-bowl",
    category: "rice-bowls",
    price: 16.0,
    discription: "Fragrant basmati rice cooked with spiced chicken and herbs.",
  },
];

// Product catalog database
const products = [
  {
    name: "crispy-fried-chicken",
    category: "mains",
    price: 14.0,
    discription:
      "Crispy fried chicken seasoned to perfection with house blend spices.",
  },
  {
    name: "authentic-thai-basil-chicken-pad-krapow-gai-with-steamed-rice",
    category: "mains",
    price: 16.5,
    discription:
      "Authentic Thai basil chicken served hot with fragrant jasmine rice.",
  },
  {
    name: "chicken-fried-rice-plate",
    category: "rice-bowls",
    price: 14.0,
    discription:
      "Savor our freshly made chicken fried rice plate with spring onions.",
  },
  {
    name: "decadent-chocolate-cake-symphony-brown",
    category: "pastries",
    price: 18.0,
    discription:
      "Rich and moist chocolate sponge cake layered with silky cream.",
  },
  {
    name: "creamy-chicken-fusilli-pasta-black-plate",
    category: "mains",
    price: 14.5,
    discription:
      "Fusilli pasta tossed in a velvety cream sauce with grilled chicken.",
  },
  {
    name: "crispy-golden-potato-pancakes-garnished-with-fresh-parsley",
    category: "salads-sides",
    price: 9.5,
    discription:
      "Golden potato pancakes topped with fresh parsley and sour cream.",
  },
  {
    name: "delicious-chocolate-croissant-pastry",
    category: "pastries",
    price: 6.5,
    discription: "Flaky butter croissant filled with rich dark chocolate.",
  },
  {
    name: "delicious-chocolate-cupcake-with-rich-frosting-shavings",
    category: "pastries",
    price: 5.5,
    discription:
      "Soft chocolate cupcake topped with swirl frosting and dark chocolate shavings.",
  },
  {
    name: "delicious-wedding-cake",
    category: "pastries",
    price: 45.0,
    discription:
      "Elegantly designed tier wedding cake with soft vanilla cream.",
  },
  {
    name: "donuts-with-sprinkles",
    category: "pastries",
    price: 7.0,
    discription: "Freshly baked sweet donuts glazed with colorful sprinkles.",
  },
  {
    name: "flavorful-jollof-rice-and-grilled-chicken",
    category: "rice-bowls",
    price: 15.0,
    discription:
      "Smoky West African Jollof rice served with juicy grilled chicken.",
  },
  {
    name: "healthy-vegetable-salad-plate",
    category: "salads-sides",
    price: 10.0,
    discription: "Fresh organic garden green salad served with house dressing.",
  },
  {
    name: "french-fries",
    category: "salads-sides",
    price: 5.0,
    discription: "Crispy golden potato fries served with dip.",
  },
  {
    name: "grilled-chicken-skewers-with-bell-peppers-onions-olives",
    category: "grills",
    price: 18.0,
    discription: "Tender chicken skewers grilled with fresh vegetables.",
  },
  {
    name: "healthy-lifestyle-chicken-rice",
    category: "rice-bowls",
    price: 21.3,
    discription:
      "Clean protein meal with seasoned chicken breast and brown rice.",
  },
  {
    name: "indian-cauliflower-potato-curry",
    category: "mains",
    price: 12.0,
    discription: "Aromatic Indian Aloo Gobi curry cooked with aromatic spices.",
  },
  {
    name: "jollof-rice",
    category: "rice-bowls",
    price: 13.0,
    discription: "Classic signature party Jollof rice dish.",
  },
  {
    name: "mexican-food-platter-with-tacos-grilled-chicken",
    category: "mains",
    price: 7.5,
    discription: "Loaded Mexican platter featuring tacos and seasoned chicken.",
  },
  {
    name: "special-jollof-rice-platter",
    category: "rice-bowls",
    price: 15.0,
    discription: "Chef's special Jollof rice loaded with assorted toppings.",
  },
  {
    name: "plate-food-with-vegetables-cheese",
    category: "salads-sides",
    price: 10.7,
    discription:
      "Healthy combination plate with roasted vegetables and cheese.",
  },
  {
    name: "red-white-velvet-cupcake-frosting-swirl",
    category: "pastries",
    price: 6.0,
    discription: "Classic red velvet cupcake topped with cream cheese swirl.",
  },
  {
    name: "savory-beef-broccoli-curry-with-steamed-rice",
    category: "mains",
    price: 14.4,
    discription: "Tender beef slices and fresh broccoli in rich curry sauce.",
  },
  {
    name: "spicy-grilled-chicken-skewers-with-roasted-bell-peppers",
    category: "grills",
    price: 17.5,
    discription: "Spicy char-grilled chicken skewers with sweet peppers.",
  },
  {
    name: "spicy-shrimp-dish-black-bowl",
    category: "mains",
    price: 13.6,
    discription: "Fiery sauteed shrimp cooked in savory herb sauce.",
  },
  {
    name: "spicy-stir-fried-tofu-with-colorful-mixed-vegetables",
    category: "mains",
    price: 11.0,
    discription: "Vegan-friendly stir-fried tofu tossed with seasonal veggies.",
  },
  {
    name: "tasty-wedding-fondant-cake",
    category: "pastries",
    price: 50.0,
    discription: "Luxurious multi-layer fondant cake for special celebrations.",
  },
  {
    name: "traditional-indian-south-asian-food-platter",
    category: "mains",
    price: 15.0,
    discription: "Authentic South Asian thali platter with variety of flavors.",
  },
  {
    name: "tuna-salad",
    category: "salads-sides",
    price: 9.0,
    discription: "Fresh tuna salad tossed with greens and crisp vegetables.",
  },
  {
    name: "chicken-biryani-rice-bowl",
    category: "rice-bowls",
    price: 16.0,
    discription: "Fragrant basmati rice cooked with spiced chicken and herbs.",
  },
  {
    name: "vanilla-cupcake-with-creamy-white-frosting",
    category: "pastries",
    price: 4.5,
    discription:
      "Fluffy vanilla cupcake topped with rich buttercream frosting.",
  },
];

/* ==========================================================================
   CART SYSTEM LOGIC AND STATE MANAGEMENT
   ========================================================================== */

let cart = JSON.parse(localStorage.getItem("chestiray_cart")) || [];

// Render products into shop containers
const main_root = document.getElementById("root");
const first_root = document.getElementById("first-root");

if (first_root) {
  firstProducts.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("product-item", `${item.category}`);

    if (item.hot == true) {
      card.classList.remove("hidden");
      card.classList.add("hot-menu");
    } else {
      card.classList.add("hidden");
    }

    let formattedName = item.name.replace(/-/g, " ");
    let displayName =
      formattedName.length > 18
        ? formattedName.slice(0, 18) + "..."
        : formattedName;

    card.innerHTML = `
        <div class="img">
            <img src="media/product/${item.name}.png" class="product-img" alt="${item.name}" onerror="this.src='media/Chicken_biryani.png'">
        </div>
        <div class="product-info">
            <div class="product-name" title="${formattedName}">${displayName}</div>
            <p>${item.discription}</p>
            <div class="product-price">$${item.price.toFixed(2)}</div>
        </div>
        <button class="add-to-cart click" onclick="addtocart(${index})">
          <i class="fas fa-shopping-bag"></i> add to cart
        </button>
      `;

    first_root.appendChild(card);
  });
}

if (main_root) {
  products.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("product-item", `${item.category}`);

    let formattedName = item.name.replace(/-/g, " ");
    let displayName =
      formattedName.length > 18
        ? formattedName.slice(0, 18) + "..."
        : formattedName;

    card.innerHTML = `
        <div class="img">
            <img src="media/product/${item.name}.png" class="product-img" alt="${item.name}" onerror="this.src='media/Chicken_biryani.png'">
        </div>
        <div class="product-info">
            <div class="product-name" title="${formattedName}">${displayName}</div>
            <p>${item.discription}</p>
            <div class="product-price">$${item.price.toFixed(2)}</div>
        </div>
        <button class="add-to-cart click" onclick="addToCart(${index})">
          <i class="fas fa-shopping-bag"></i> add to cart
        </button>
      `;

    main_root.appendChild(card);
  });
}

function addtocart(index) {
  const selectedProduct = firstProducts[index];
  const existingItemIndex = cart.findIndex(
    (item) => item.name === selectedProduct.name,
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1,
    });
  }
  saveAndUpdateCart();
}

function addToCart(index) {
  const selectedProduct = products[index];
  const existingItemIndex = cart.findIndex(
    (item) => item.name === selectedProduct.name,
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1,
    });
  }
  saveAndUpdateCart();
}

function saveAndUpdateCart() {
  localStorage.setItem("chestiray_cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartContainer = document.querySelectorAll(".cart-items");
  const totalElements = document.querySelectorAll(
    ".cart-total-price, #cart-total-price",
  );
  const counterElements = document.querySelectorAll("#counter");

  let totalCost = 0;
  let totalItemsCount = 0;

  cartContainer.forEach((container) => {
    container.innerHTML = "";

    if (cart.length === 0) {
      container.innerHTML = `<div style="padding: 20px; text-align: center; color: #888;">Your cart is empty.</div>`;
    } else {
      cart.forEach((item, index) => {
        totalCost += item.price * item.quantity;
        totalItemsCount += item.quantity;

        let formattedName = item.name.replace(/-/g, " ");
        let displayName =
          formattedName.length > 8
            ? formattedName.slice(0, 8) + "..."
            : formattedName;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <div class="cart-item-discription">
                <img src="media/product/${item.name}.png" alt="${item.name}" onerror="this.src='media/Chicken_biryani.png'">
                <div class="item-discriptions">
                    <div class="cart-name">${displayName}</div>
                    <div class="cart-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            </div>
            <div class="cart-quanty">
                <div class="decrease" onclick="updateQuantity(${index}, -1)">-</div>
                <div class="number">${item.quantity}</div>
                <div class="increase" onclick="updateQuantity(${index}, 1)">+</div>
            </div>
            <button class="remove-cart-item" onclick="removeFromCart(${index})" style="cursor:pointer;">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        container.appendChild(cartItemDiv);
      });
    }
  });

  if (cart.length > 0) {
    totalCost = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    totalItemsCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  counterElements.forEach((el) => {
    el.textContent = totalItemsCount;
  });

  totalElements.forEach((el) => {
    el.textContent = `$${totalCost.toFixed(2)}`;
  });
}

function updateQuantity(index, change) {
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
  }
  saveAndUpdateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveAndUpdateCart();
}

/* ==========================================================================
   CHECKOUT BUTTON — AUTH GUARD
   not signed in  -> register.html
   cart == []     -> return
   otherwise      -> checkout.html
   ========================================================================== */
const checkOut = document.querySelector(".cart-checkout-btn");

if (checkOut) {
  checkOut.addEventListener("click", () => {
    if (!cart || cart.length === 0) return; // empty cart -> do nothing

    const user = getCurrentUser();
    if (!user) {
      window.location.href = "register.html";
      return;
    }
    window.location.href = "checkout.html";
  });
}

// Initial cart render on page load
document.addEventListener("DOMContentLoaded", renderCart);

/* ==========================================================================
   CATEGORY & DISPLAY LAYOUT FILTERING
   ========================================================================== */
function normalizeCategory(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const menuBtns = document.querySelectorAll(".menu-list li");

menuBtns.forEach((btn) => {
  if (btn.classList.contains("viewmore")) return; // let the link navigate

  btn.addEventListener("click", () => {
    const btnValue = btn.textContent.trim().toLowerCase();
    const cat = normalizeCategory(btnValue);
    const cards = document.querySelectorAll(".product-item");

    menuBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach((item) => {
      if (btnValue === "hot list") {
        item.classList.toggle("hidden", !item.classList.contains("hot-menu"));
      } else {
        item.classList.toggle("hidden", !item.classList.contains(cat));
      }
    });
  });
});

const productBtns = document.querySelectorAll(".product-btns button");

productBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnValue = btn.textContent.trim().toLowerCase();
    const cat = normalizeCategory(btnValue);
    const cards = document.querySelectorAll(".product-item");

    productBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach((item) => {
      if (btnValue === "all" || item.classList.contains(cat)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

function bodyOrder(layoutType) {
  const order = document.querySelector(".product-body");
  const orderBtns = document.querySelectorAll(".product-order-btns button");

  if (!order) return;

  orderBtns.forEach((btn) => btn.classList.remove("active"));

  if (layoutType === "list-order") {
    order.classList.add("list-order");
    order.style.display = "flex";
    order.style.flexDirection = "column";
    if (orderBtns[1]) orderBtns[1].classList.add("active");
  } else {
    order.classList.remove("list-order");
    order.style.display = "grid";
    if (orderBtns[0]) orderBtns[0].classList.add("active");
  }
}

/* ==========================================================================
   EVENT BOOKING FORM PRICE UPDATER
   ========================================================================== */
function updateBookingPrice() {
  const selectElement = document.getElementById("eventSelect");
  const priceDisplay = document.getElementById("eventPriceDisplay");

  if (!selectElement || !priceDisplay) return;

  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const price = selectedOption.getAttribute("data-price");

  if (price && price !== "0") {
    priceDisplay.textContent = `$${parseFloat(price).toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  } else {
    priceDisplay.textContent = "$0.00";
  }
}

/* ==========================================================================
   VIDEO MODAL
   ========================================================================== */
const openVideoBtn = document.getElementById("openVideoBtn");
const closeVideoBtn = document.getElementById("closeVideoBtn");
const closeVideoOverlay = document.getElementById("closeVideoOverlay");
const videoModal = document.getElementById("videoModal");
const promoVideo = document.getElementById("promoVideo");

if (openVideoBtn && videoModal) {
  openVideoBtn.addEventListener("click", () => {
    videoModal.classList.add("active");
  });

  const closeModal = () => {
    videoModal.classList.remove("active");
    promoVideo.src = "";
  };

  closeVideoBtn.addEventListener("click", closeModal);
  closeVideoOverlay.addEventListener("click", closeModal);
}

/* ==========================================================================
   PRODUCT SEARCH FILTER
   ========================================================================== */
function filterProducts() {
  const input = document.getElementById("productSearchInput");
  if (!input) return;
  const filter = input.value.toLowerCase();
  const main_root = document.getElementById("root");
  const items = main_root.getElementsByClassName("product-item");

  Array.from(items).forEach((item) => {
    const title = item.querySelector(".product-name");
    if (title) {
      const textValue = title.textContent || title.innerText;
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  });
}

/* ==========================================================================
   PROFILE DROPDOWN CARD (shown when a signed-in user clicks the profile btn)
   ========================================================================== */
function getUserOrdersCount(name) {
  const orders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  return orders.filter((o) => o.username === name).length;
}

function buildProfileCard(user) {
  const old = document.querySelector(".profile-card-dropdown");
  if (old) old.remove();

  const initial = (user.name || "U").trim().charAt(0).toUpperCase();
  const ordersCount = getUserOrdersCount(user.name);

  const card = document.createElement("div");
  card.className = "profile-card-dropdown";
  card.innerHTML = `
    <div class="pc-cover">
      <img src="media/about-bg.jpg" alt="" onerror="this.remove()">
      <span>image here</span>
    </div>
    <div class="pc-avatar">
      <span class="pc-initial">${initial}</span>
      <img src="media/profile-user.png" alt="" onerror="this.remove()">
    </div>
    <div class="pc-name">${user.name}</div>
    <div class="pc-email">${user.email}</div>
    <ul class="pc-menu">
      <li><a href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
      <li><a href="checkout.html"><i class="fa-solid fa-receipt"></i> Orders <span class="pc-badge">${ordersCount}</span></a></li>
      <li><a href="register.html"><i class="fa-solid fa-user"></i> Profile</a></li>
      <li><a href="catering.html"><i class="fa-solid fa-utensils"></i> Browse</a></li>
      <li><a href="index.html#menu"><i class="fa-solid fa-bookmark"></i> Saved</a></li>
      <li><a href="contact.html"><i class="fa-solid fa-gear"></i> Settings</a></li>
      <li class="pc-logout"><button type="button" id="pcLogoutBtn"><i class="fa-solid fa-right-from-bracket"></i> Logout</button></li>
    </ul>
  `;
  document.body.appendChild(card);

  document.getElementById("pcLogoutBtn").addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "index.html";
  });
}

// Toggle card on profile button click
document.querySelectorAll(".profile-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const user = getCurrentUser();

    if (!user) {
      // not signed in -> let the anchor go to register.html,
      // plain button (no anchor) goes there manually
      if (!btn.closest("a[href]")) {
        window.location.href = "register.html";
      }
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const existing = document.querySelector(".profile-card-dropdown");
    if (existing) {
      existing.remove();
      return;
    }
    buildProfileCard(user);
  });
});

// Close the card when clicking anywhere outside it
document.addEventListener("click", (e) => {
  const card = document.querySelector(".profile-card-dropdown");
  if (card && !card.contains(e.target) && !e.target.closest(".profile-btn")) {
    card.remove();
  }
});

/* ==========================================================================
   CHECKOUT PAGE — SUMMARY, TRACKING & ORDER PLACEMENT
   ========================================================================== */
const checkoutItemsEl = document.getElementById("checkoutItems");

if (checkoutItemsEl) {
  const orderForm = document.getElementById("orderForm");
  const user = getCurrentUser();

  if (!user) {
    // must be signed in to checkout
    window.location.href = "register.html";
  } else if (cart.length === 0) {
    updateTracker(1);
    checkoutItemsEl.innerHTML = `<div style="padding:30px 10px;text-align:center;color:#888;">Your cart is empty. <a href="catering.html" style="color:var(--secondary);">Browse the menu</a> to add items first.</div>`;
    const formCard = orderForm ? orderForm.closest(".checkout-card") : null;
    if (formCard) formCard.style.display = "none";
  } else {
    renderCheckoutSummary();
    updateTracker(2);

    // prefill from the signed-in user
    const nameInput = document.getElementById("orderName");
    const phoneInput = document.getElementById("orderPhone");
    if (nameInput) nameInput.value = user.name || "";
    if (phoneInput && user.phone) phoneInput.value = user.phone;

    if (orderForm) orderForm.addEventListener("submit", placeOrder);
  }
}

function renderCheckoutSummary() {
  if (!checkoutItemsEl) return;
  checkoutItemsEl.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "checkout-item";
    const displayName = item.name.replace(/-/g, " ");
    row.innerHTML = `
      <img src="media/product/${item.name}.png" alt="${item.name}" onerror="this.src='media/Chicken_biryani.png'">
      <div class="ci-name">${displayName}</div>
      <div class="ci-qty">x${item.quantity}</div>
      <div class="ci-price">$${(item.price * item.quantity).toFixed(2)}</div>
    `;
    checkoutItemsEl.appendChild(row);
  });

  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const totalEl = document.getElementById("checkoutTotal");
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function updateTracker(current) {
  document.querySelectorAll(".tracker-step").forEach((step) => {
    const n = parseInt(step.dataset.step, 10);
    const icon = step.querySelector(".step-icon i");
    step.classList.remove("active", "done");

    if (n < current) {
      step.classList.add("done");
      if (icon) icon.className = "fa-solid fa-check";
    } else if (n === current) {
      step.classList.add("active");
    }
  });
}

function placeOrder(e) {
  e.preventDefault();

  const user = getCurrentUser();
  const locationInput = document.getElementById("orderLocation");
  const location = locationInput ? locationInput.value.trim() : "";

  if (!location) {
    alert("Please enter your delivery location.");
    return;
  }
  if (!user || !cart.length) return;

  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  // Build the order object for the business
  const order = {
    id: Date.now(),
    username: user.name,
    email: user.email,
    items: cart.map((i) => ({ itemname: i.name, quantity: i.quantity })),
    location: location,
    total: parseFloat(total.toFixed(2)),
    date: new Date().toISOString(),
    status: "pending",
  };

  // Save to the business orders store
  const orders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  orders.push(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));

  // Record the checkout for today's checkout tracking
  const checkouts = JSON.parse(localStorage.getItem(CHECKOUTS_KEY)) || [];
  checkouts.push({
    username: user.name,
    itemsCount: cart.reduce((acc, curr) => acc + curr.quantity, 0),
    total: parseFloat(total.toFixed(2)),
    date: new Date().toISOString(),
  });
  localStorage.setItem(CHECKOUTS_KEY, JSON.stringify(checkouts));

  // Clear the cart
  cart = [];
  saveAndUpdateCart();

  // Update tracking interface -> "preparing"
  updateTracker(4);

  // Swap checkout body for the success panel
  const grid = document.getElementById("checkoutGrid");
  if (grid) grid.classList.add("hidden");
  const success = document.getElementById("orderSuccess");
  if (success) success.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}
