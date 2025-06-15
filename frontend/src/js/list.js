fetch(apiUrl)
  .then(res => res.json())
  .then(teddies => {
    const teddiesDiv = document.getElementById('teddies');
    teddies.forEach(teddy => {
      const div = document.createElement('div');
      div.className = 'teddy';
      div.innerHTML = `
        <img src="${teddy.imageUrl}" alt="${teddy.name}">
        <h3>${teddy.name}</h3>
        <p>${(teddy.price/100).toFixed(2)} €</p>
        <a href="detail.html?id=${teddy._id}">Voir</a>
        <button onclick='addToCart(${JSON.stringify(teddy)})'>Ajouter au panier</button>
      `;
      teddiesDiv.appendChild(div);
    });
  });