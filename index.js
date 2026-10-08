// Sticky Header toggle on scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

// Cart drawer toggle
const cartBtn = document.querySelector(".cart-btn");
const cartBody = document.querySelector(".cart-body");

if (cartBtn && cartBody) {
  cartBtn.addEventListener("click", () => {
    cartBody.classList.toggle("active");
  });
}

// Product catalog database
const firstProducts = [
  {
    name: "crispy-fried-chicken",
    category: "meals",
    price: 14.0,
    discription:
      "Crispy fried chicken seasoned to perfection with house blend spices.",
    hot: true,
  },
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
    category: "meals",
    price: 15.0,
    discription:
      "Smoky West African Jollof rice served with juicy grilled chicken.",
  },
  {
    name: "healthy-vegetable-salad-plate",
    category: "meals",
    price: 10.0,
    discription: "Fresh organic garden green salad served with house dressing.",
  },
  {
    name: "french-fries",
    category: "meals",
    price: 5.0,
    discription: "Crispy golden potato fries served with dip.",
  },
  {
    name: "grilled-chicken-skewers-with-bell-peppers-onions-olives",
    category: "meals",
    price: 18.0,
    discription: "Tender chicken skewers grilled with fresh vegetables.",
  },
  {
    name: "mexican-food-platter-with-tacos-grilled-chicken",
    category: "meals",
    price: 7.5,
    discription: "Loaded Mexican platter featuring tacos and seasoned chicken.",
    hot: true,
  },
  {
    name: "red-white-velvet-cupcake-frosting-swirl",
    category: "pastries",
    price: 6.0,
    discription: "Classic red velvet cupcake topped with cream cheese swirl.",
  },
  {
    name: "savory-beef-broccoli-curry-with-steamed-rice",
    category: "meals",
    price: 14.4,
    discription: "Tender beef slices and fresh broccoli in rich curry sauce.",
    hot: true,
  },
  {
    name: "spicy-grilled-chicken-skewers-with-roasted-bell-peppers",
    category: "meals",
    price: 17.5,
    discription: "Spicy char-grilled chicken skewers with sweet peppers.",
  },
  {
    name: "spicy-shrimp-dish-black-bowl",
    category: "meals",
    price: 13.6,
    discription: "Fiery sauteed shrimp cooked in savory herb sauce.",
    hot: true,
  },
  {
    name: "tasty-wedding-fondant-cake",
    category: "pastries",
    price: 50.0,
    discription: "Luxurious multi-layer fondant cake for special celebrations.",
  },
  {
    name: "tuna-salad",
    category: "meals",
    price: 9.0,
    discription: "Fresh tuna salad tossed with greens and crisp vegetables.",
    hot: true,
  },
  {
    name: "chicken-biryani-rice-bowl",
    category: "meals",
    price: 16.0,
    discription: "Fragrant basmati rice cooked with spiced chicken and herbs.",
  },
  {
    name: "vanilla-cupcake-with-creamy-white-frosting",
    category: "pastries",
    price: 4.5,
    discription:
      "Fluffy vanilla cupcake topped with rich buttercream frosting.",
    hot: true,
  },
];

// Product catalog database
const products = [
  {
    name: "crispy-fried-chicken",
    category: "meals",
    price: 14.0,
    discription:
      "Crispy fried chicken seasoned to perfection with house blend spices.",
  },
  {
    name: "authentic-thai-basil-chicken-pad-krapow-gai-with-steamed-rice",
    category: "meals",
    price: 16.5,
    discription:
      "Authentic Thai basil chicken served hot with fragrant jasmine rice.",
  },
  {
    name: "chicken-fried-rice-plate",
    category: "meals",
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
    category: "meals",
    price: 14.5,
    discription:
      "Fusilli pasta tossed in a velvety cream sauce with grilled chicken.",
  },
  {
    name: "crispy-golden-potato-pancakes-garnished-with-fresh-parsley",
    category: "meals",
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
    category: "meals",
    price: 15.0,
    discription:
      "Smoky West African Jollof rice served with juicy grilled chicken.",
  },
  {
    name: "healthy-vegetable-salad-plate",
    category: "meals",
    price: 10.0,
    discription: "Fresh organic garden green salad served with house dressing.",
  },
  {
    name: "french-fries",
    category: "meals",
    price: 5.0,
    discription: "Crispy golden potato fries served with dip.",
  },
  {
    name: "grilled-chicken-skewers-with-bell-peppers-onions-olives",
    category: "meals",
    price: 18.0,
    discription: "Tender chicken skewers grilled with fresh vegetables.",
  },
  {
    name: "healthy-lifestyle-chicken-rice",
    category: "meals",
    price: 21.3,
    discription:
      "Clean protein meal with seasoned chicken breast and brown rice.",
  },
  {
    name: "indian-cauliflower-potato-curry",
    category: "meals",
    price: 12.0,
    discription: "Aromatic Indian Aloo Gobi curry cooked with aromatic spices.",
  },
  {
    name: "jollof-rice",
    category: "meals",
    price: 13.0,
    discription: "Classic signature party Jollof rice dish.",
  },
  {
    name: "mexican-food-platter-with-tacos-grilled-chicken",
    category: "meals",
    price: 7.5,
    discription: "Loaded Mexican platter featuring tacos and seasoned chicken.",
  },
  {
    name: "special-jollof-rice-platter",
    category: "meals",
    price: 15.0,
    discription: "Chef's special Jollof rice loaded with assorted toppings.",
  },
  {
    name: "plate-food-with-vegetables-cheese",
    category: "meals",
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
    category: "meals",
    price: 14.4,
    discription: "Tender beef slices and fresh broccoli in rich curry sauce.",
  },
  {
    name: "spicy-grilled-chicken-skewers-with-roasted-bell-peppers",
    category: "meals",
    price: 17.5,
    discription: "Spicy char-grilled chicken skewers with sweet peppers.",
  },
  {
    name: "spicy-shrimp-dish-black-bowl",
    category: "meals",
    price: 13.6,
    discription: "Fiery sauteed shrimp cooked in savory herb sauce.",
  },
  {
    name: "spicy-stir-fried-tofu-with-colorful-mixed-vegetables",
    category: "meals",
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
    category: "meals",
    price: 15.0,
    discription: "Authentic South Asian thali platter with variety of flavors.",
  },
  {
    name: "tuna-salad",
    category: "meals",
    price: 9.0,
    discription: "Fresh tuna salad tossed with greens and crisp vegetables.",
  },
  {
    name: "chicken-biryani-rice-bowl",
    category: "meals",
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

// STEP 1: Retrieve existing cart from localStorage or initialize empty array
let cart = JSON.parse(localStorage.getItem("chestiray_cart")) || [];

// STEP 2: Render products into shop container if on the catering/shop page
const main_root = document.getElementById("root");
const first_root = document.getElementById("first-root");

if (first_root) {
  firstProducts.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("product-item", `${item.category}`);

    if(item.hot == true) {
      card.classList.remove('hidden')
      card.classList.add('hot-menu')
    } else {
      card.classList.add('hidden')
    }

    // Format display name
    let formattedName = item.name.replace(/-/g, " ");
    let displayName =
      formattedName.length > 18
        ? formattedName.slice(0, 18) + "..."
        : formattedName;

    // STEP 3: Pass product index to `addToCart(index)` method
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

    first_root.appendChild(card);
  });
}

if (main_root) {
  products.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("product-item", `${item.category}`);

    // Format display name
    let formattedName = item.name.replace(/-/g, " ");
    let displayName =
      formattedName.length > 18
        ? formattedName.slice(0, 18) + "..."
        : formattedName;

    // STEP 3: Pass product index to `addToCart(index)` method
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

// STEP 4: Add item to cart function
function addToCart(index) {
  // Find selected item from products array using index
  const selectedProduct = products[index];

  // Check if item is already in cart array
  const existingItemIndex = cart.findIndex(
    (item) => item.name === selectedProduct.name,
  );

  if (existingItemIndex > -1) {
    // If present, increment quantity
    cart[existingItemIndex].quantity += 1;
  } else {
    // If not present, add new item object with quantity 1
    cart.push({
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1,
    });
  }

  // Save updated cart array to localStorage and refresh DOM view
  saveAndUpdateCart();

  // Open cart sidebar so user sees added product
  if (cartBody) {
    cartBody.classList.add("active");
  }
}

// STEP 5: Save cart state to LocalStorage and trigger UI rendering
function saveAndUpdateCart() {
  localStorage.setItem("chestiray_cart", JSON.stringify(cart));
  renderCart();
}

// STEP 6: Render active cart items and calculate pricing total
function renderCart() {
  const cartContainer = document.querySelectorAll(".cart-items");
  const totalElements = document.querySelectorAll(
    ".cart-total-price, #cart-total-price",
  );
  const counterElements = document.querySelectorAll("#counter");

  let totalCost = 0;
  let totalItemsCount = 0;

  // Render HTML markup for cart drawer items across pages
  cartContainer.forEach((container) => {
    container.innerHTML = "";

    if (cart.length === 0) {
      container.innerHTML = `<div style="padding: 20px; text-align: center; color: #888;">Your cart is empty.</div>`;
    } else {
      cart.forEach((item, index) => {
        totalCost += item.price * item.quantity;
        totalItemsCount += item.quantity;

        let formattedName = item.name.replace(/-/g, " ");
        let displayName = formattedName.length > 8
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

  // Calculate totals if cart has items
  if (cart.length > 0) {
    totalCost = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    totalItemsCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  // Update counter badges
  counterElements.forEach((el) => {
    el.textContent = totalItemsCount;
  });

  // Update total price displays
  totalElements.forEach((el) => {
    el.textContent = `$${totalCost.toFixed(2)}`;
  });
}

// STEP 7: Change quantity (+ / -) handler
function updateQuantity(index, change) {
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1); // Remove item if quantity drops to 0 or below
    }
  }
  saveAndUpdateCart();
}

// STEP 8: Remove item completely from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveAndUpdateCart();
}

// Initial cart render on page load
document.addEventListener("DOMContentLoaded", renderCart);

/* ==========================================================================
   CATEGORY & DISPLAY LAYOUT FILTERING
   ========================================================================== */

const menuBtns = document.querySelectorAll(".menu-list li");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnValue = btn.textContent.trim().toLowerCase();
    const cards = document.querySelectorAll(".product-item");

    menuBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach((item) => {
      if (btnValue === "hot list") {
        if (item.classList.contains("hot-menu")) {
          item.classList.remove("hidden");
        }
      } else if (item.classList.contains(btnValue)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

const productBtns = document.querySelectorAll(".product-btns button");

productBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnValue = btn.textContent.trim().toLowerCase();
    const cards = document.querySelectorAll(".product-item");

    productBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach((item) => {
      if (btnValue === "all" || item.classList.contains(btnValue)) {
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

// Video Modal Functionality
const openVideoBtn = document.getElementById("openVideoBtn");
const closeVideoBtn = document.getElementById("closeVideoBtn");
const closeVideoOverlay = document.getElementById("closeVideoOverlay");
const videoModal = document.getElementById("videoModal");
const promoVideo = document.getElementById("promoVideo");

// Replace with your desired video URL (e.g., YouTube embed with autoplay)
// const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

if (openVideoBtn && videoModal) {
  openVideoBtn.addEventListener("click", () => {
    // promoVideo.src = videoURL;
    videoModal.classList.add("active");
  });

  const closeModal = () => {
    videoModal.classList.remove("active");
    promoVideo.src = "";
  };

  closeVideoBtn.addEventListener("click", closeModal);
  closeVideoOverlay.addEventListener("click", closeModal);
}

// Product Search Filter for Catering Page
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