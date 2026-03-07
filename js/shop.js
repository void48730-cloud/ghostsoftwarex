async function loadProducts() {

  const res = await fetch("data/products.json");
  const products = await res.json();

  const main = document.querySelector(".main");

  products.forEach(p => {

    const div = document.createElement("div");

    div.className = "product";

    div.innerHTML = `
      <h2>${p.name}</h2>
      <p>${p.price}₺</p>
      <button onclick="addCart('${p.name}',${p.price})">
        Sepete Ekle
      </button>
    `;

    main.appendChild(div);

  });

}

function addCart(name, price) {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  location.href = "cart.html";

}

loadProducts();
