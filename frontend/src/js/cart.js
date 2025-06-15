function updateCartDisplay() {
  const cart = getCart();
  const cartDiv = document.getElementById('cart');
  if (cart.length === 0) {
    cartDiv.innerHTML = 'Panier vide.';
    return;
  }
  let html = '<b>Panier</b><ul>';
  cart.forEach((teddy, i) => {
    html += `<li>${teddy.name} - ${(teddy.price/100).toFixed(2)} € <button onclick="removeFromCart(${i})">Retirer</button></li>`;
  });
  html += '</ul>';
  html += `<b>Total : ${(cart.reduce((sum, t) => sum + t.price, 0)/100).toFixed(2)} €</b><br>`;
  html += `<button onclick="orderCart()">Commander</button>`;
  cartDiv.innerHTML = html;
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  setCart(cart);
  updateCartDisplay();
}

function orderCart() {
  const cart = getCart();
  if (cart.length === 0) return;
  const contact = {
    firstName: "Jean",
    lastName: "Dupont",
    address: "1 rue de Paris",
    city: "Paris",
    email: "jean@dupont.fr"
  };
  const products = cart.map(t => t._id);
  fetch(apiUrl + '/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contact, products })
  })
  .then(res => res.json())
  .then(() => {
    alert('Commande envoyée ! Merci.');
    setCart([]);
    updateCartDisplay();
  });
}

window.removeFromCart = removeFromCart;
window.orderCart = orderCart;

updateCartDisplay();