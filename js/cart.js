// cart.js - Sepet yönetimi

// Sepet sayısı göstergesi (navdeki ikon)
function updateCartCount(){
    const count = JSON.parse(localStorage.getItem("cart"))?.length || 0;
    const el = document.getElementById("cartCount");
    if(el) el.textContent = count;
}

// Sepeti yükle ve listele
function loadCart(){
    const container = document.getElementById("cartContainer");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    container.innerHTML = "";

    if(cart.length === 0){
        container.innerHTML = "<p style='text-align:center;opacity:.7'>Sepetiniz boş.</p>";
        return;
    }

    cart.forEach((item,index)=>{
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <p><strong>Ürün:</strong> ${item.name}</p>
            <p><strong>Paket:</strong> ${item.pack}</p>
            <button class="remove-btn" data-index="${index}">Sil</button>
        `;
        container.appendChild(div);
    });

    // Tek tek silme butonları
    document.querySelectorAll(".remove-btn").forEach(btn=>{
        btn.addEventListener("click",()=>{
            const idx = btn.dataset.index;
            removeItem(idx);
        });
    });
}

// Tek ürün silme
function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1); // seçilen ürünü kaldır
    localStorage.setItem("cart",JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

// Tüm sepeti temizle
function clearCart(){
    localStorage.removeItem("cart");
    loadCart();
    updateCartCount();
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded",()=>{
    loadCart();
    updateCartCount();

    // Clear buton varsa bağla
    const clearBtn = document.querySelector(".clear-btn");
    if(clearBtn){
        clearBtn.addEventListener("click",clearCart);
    }
});
