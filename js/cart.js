let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const div =
document.getElementById("cart");

cart.forEach(item => {

  div.innerHTML +=
    item.name + " - " + item.price + "₺<br>";

});
