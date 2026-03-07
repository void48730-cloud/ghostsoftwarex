function updateCartCount(){
  const count = JSON.parse(localStorage.getItem("cart"))?.length || 0;
  const el = document.getElementById("cartCount");
  if(el) el.textContent = count;
}

// Sayfa yüklendiğinde sayaç
updateCartCount();

// Her ürün sepete eklendiğinde güncelle
document.querySelectorAll(".product").forEach(product=>{
  const buyBtn = product.querySelector(".buyBtn");
  buyBtn.addEventListener("click",()=>{
    setTimeout(updateCartCount, 50); // ürün eklendikten sonra count güncelle
  });
});
