// Sepet sayısı göstergesi
function updateCartCount(){
  const count = JSON.parse(localStorage.getItem("cart"))?.length || 0;
  document.getElementById("cartCount").textContent = count;
}

// Sayfa yüklendiğinde güncelle
updateCartCount();

// Her ürün sepete eklendiğinde güncelle
document.querySelectorAll(".product").forEach(product=>{
  const buyBtn = product.querySelector(".buyBtn");
  buyBtn.addEventListener("click",()=>{
    setTimeout(updateCartCount, 50); // ürün eklendikten sonra count güncelle
  });
});
