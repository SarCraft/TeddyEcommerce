const params = new URLSearchParams(window.location.search);
const id = params.get('id');
fetch(`${apiUrl}/${id}`)
  .then(res => res.json())
  .then(teddy => {
    const detailDiv = document.getElementById('detail');
    detailDiv.innerHTML = `
      <h2>${teddy.name}</h2>
      <img src="${teddy.imageUrl}" alt="${teddy.name}" style="width:300px">
      <p>${teddy.description}</p>
      <p>Couleurs : ${teddy.colors.join(', ')}</p>
      <p>Prix : ${(teddy.price/100).toFixed(2)} €</p>
      <button onclick='addToCart(${JSON.stringify(teddy)})'>Ajouter au panier</button>
    `;
  });