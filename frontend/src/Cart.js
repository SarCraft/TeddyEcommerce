import React, { useState } from 'react';

function Cart({ cart, setCart }) {
  const [show, setShow] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  const total = cart.reduce((sum, t) => sum + t.price, 0);

  const handleOrder = () => {
    const contact = {
      firstName: 'Jean',
      lastName: 'Dupont',
      address: '1 rue de Paris',
      city: 'Paris',
      email: 'jean@dupont.fr'
    };
    const products = cart.map(t => t._id);

    fetch('http://localhost:3000/api/teddies/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contact, products })
    })
      .then(res => res.json())
      .then(() => {
        setOrderSent(true);
        setCart([]);
      });
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={() => setShow(!show)}>
        Panier ({cart.length}) - {total / 100} €
      </button>
      {show && (
        <div style={{ background: '#eee', padding: 10 }}>
          {cart.length === 0 && <p>Panier vide.</p>}
          {cart.map((t, i) => (
            <div key={i}>
              {t.name} - {t.price / 100} €
            </div>
          ))}
          {cart.length > 0 && (
            <button onClick={handleOrder}>Commander</button>
          )}
          {orderSent && <p>Commande envoyée !</p>}
        </div>
      )}
    </div>
  );
}

export default Cart;