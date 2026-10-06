window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const cartBtn = document.querySelector(".cart-btn");
const cartBody = document.querySelector(".cart-body");

cartBtn.addEventListener("click", () => {
  cartBody.classList.toggle("active");
});

const products = [
  {
    name: "crispy-fried-chicken",
    category: "meals",
    price: 14.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "authentic-thai-basil-chicken-pad-krapow-gai-with-steamed-rice",
    category: "meals",
    price: 16.5,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "chicken-fried-rice-plate",
    category: "meals",
    price: 14.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "decadent-chocolate-cake-symphony-brown",
    category: "pastries",
    price: 18.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "creamy-chicken-fusilli-pasta-black-plate",
    category: "meals",
    price: 14.5,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "crispy-golden-potato-pancakes-garnished-with-fresh-parsley",
    category: "meals",
    price: 9.5,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "delicious-chocolate-croissant-pastry",
    category: "pastries",
    price: 6.5,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "delicious-chocolate-cupcake-with-rich-frosting-shavings",
    category: "pastries",
    price: 5.5,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "delicious-wedding-cake",
    category: "pastries",
    price: 45.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam."
  },
  {
    name: "donuts-with-sprinkles",
    category: "pastries",
    price: 7.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam."
  },
  {
    name: "flavorful-jollof-rice-and-grilled-chicken",
    category: "meals",
    price: 15.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "healthy-vegetable-salad-plate",
    category: "meals",
    price: 10.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "french-fries",
    category: "meals",
    price: 5.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "grilled-chicken-skewers-with-bell-peppers-onions-olives",
    category: "meals",
    price: 18.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "healthy-lifestyle-chicken-rice",
    category: "meals",
    price: 21.3,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "indian-cauliflower-potato-curry",
    category: "meals",
    price: 12.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "jollof-rice",
    category: "meals",
    price: 13.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "mexican-food-platter-with-tacos-grilled-chicken",
    category: "meals",
    price: 7.5,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "special-jollof-rice-platter",
    category: "meals",
    price: 15.0,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "plate-food-with-vegetables-cheese",
    category: "meals",
    price: 10.7,
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam.",
  },
  {
    name: "red-white-velvet-cupcake-frosting-swirl",
    category: "pastries",
    price: 6.0, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam."
  },
  {
    name: "savory-beef-broccoli-curry-with-steamed-rice",
    category: "meals",
    price: 14.4, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam."
  },
  {
    name: "spicy-grilled-chicken-skewers-with-roasted-bell-peppers",
    category: "meals",
    price: 17.5, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam."
  },
  { name: "spicy-shrimp-dish-black-bowl", category: "meals", price: 13.6, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam." },
  {
    name: "spicy-stir-fried-tofu-with-colorful-mixed-vegetables",
    category: "meals",
    price: 11.0, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam."
  },
  { name: "tasty-wedding-fondant-cake", category: "pastries", price: 50.0, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam." },
  {
    name: "traditional-indian-south-asian-food-platter",
    category: "meals",
    price: 15.0, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam."
  },
  { name: "tuna-salad", category: "meals", price: 9.0, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam." },
  { name: "chicken-biryani-rice-bowl", category: "meals", price: 16.0, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam." },
  {
    name: "vanilla-cupcake-with-creamy-white-frosting",
    category: "pastries",
    price: 4.5, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam dolor at nobis, amet fugiat enim labore qui optio distinctio fugit vero alias deleniti ipsam esse reprehenderit, aliquid pariatur totam."
  },
];

const root = document.getElementById("root");

products.forEach((item, i) => {
  const card = document.createElement("div");

  card.classList.add("product-item", `${item.category}`);

  // Replace all hyphens with spaces
  let formattedName = item.name.replace(/-/g, " ");

  // Truncate if name length > 12
  if (formattedName.length > 12) {
    formattedName = formattedName.slice(0, 12) + "...";
  }

  card.innerHTML = `
      <div class="img">
          <img src="media/product/${item.name}.png" class="product-img" alt="${item.name}">
      </div>
      <div class="product-info">
          <div class="product-name">${formattedName}</div>
          <p>${item.discription}</p>
          <div class="product-price">$${item.price.toFixed(2)}</div>
      </div>
      <button class="add-to-cart" onclick="addToCart()"><i class="fas fa-shopping-bag"></i> add to cart</button>
    `;

  root.appendChild(card);
});

const productBtns = document.querySelectorAll(".product-btns button");

productBtns.forEach((btn) => {
  const btnValue = btn.textContent;
  const cards = document.querySelectorAll(".product-item");

  btn.addEventListener("click", () => {
    productBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.add("active");

    cards.forEach((item) => {
      if (item.classList.contains(btnValue) || btnValue == "all") {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

function bodyOrder(a) {
  const order = document.querySelector(".product-body");
  const orderBtns = document.querySelectorAll('.product-order-btns button')

  orderBtns.forEach(btn => {
    btn.classList.remove('active');

    btn.addEventListener('click', () => {
      btn.classList.add('active')
    })
  })

  if (a == "list-order") {
    order.classList.add(`${a}`)
    order.style.display = "flex";
    order.style.flexDirection = "column";
  } else {
    order.classList.remove("list-order");
    order.style.display = "grid";
  }
}