import React from 'react';

function TeddyDetail({ teddy, onBack, onAddToCart }) {
  return (
    <div>
      <button onClick={onBack}>Retour</button>
      <h2>{teddy.name}</h2>
      <img src={`http://localhost:3000${teddy.imageUrl}`} alt={teddy.name} style={{ width: 300 }} />
      <p>{teddy.description}</p>
      <p>Couleurs : {teddy.colors.join(', ')}</p>
      <p>Prix : {teddy.price / 100} €</p>
      <button onClick={() => onAddToCart(teddy)}>Ajouter au panier</button>
    </div>
  );
}

export default TeddyDetail;