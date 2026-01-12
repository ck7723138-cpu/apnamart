let cart = [];

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  let list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "New Order:%0A" + cart.join("%0A");
  let phone = "917735729578"; // apna WhatsApp number daalo
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

function changeLanguage() {
  let lang = document.getElementById("languageSelect").value;

  if (lang === "hi") {
    document.getElementById("p1").innerText = "आम का जूस";
    document.getElementById("p2").innerText = "चॉकलेट";
    document.getElementById("p3").innerText = "टी-शर्ट";
    document.getElementById("cartTitle").innerText = "कार्ट";
  } else {
    document.getElementById("p1").innerText = "Mango Juice";
    document.getElementById("p2").innerText = "Chocolate";
    document.getElementById("p3").innerText = "T-Shirt";
    document.getElementById("cartTitle").innerText = "Cart";
  }
}
