const apiUrl = 'http://localhost:3000/api/teddies';

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(teddy) {
  const cart = getCart();
  cart.push(teddy);
  setCart(cart);
  alert('Ajouté au panier !');
}