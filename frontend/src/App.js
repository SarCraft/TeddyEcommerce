import React, { useState } from 'react';
import TeddyList from './TeddyList';
import TeddyDetail from './TeddyDetail';
import Cart from './Cart';

function App() {
  const [selectedTeddy, setSelectedTeddy] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <div style={{ maxWidth: 800, margin: 'auto', fontFamily: 'Arial' }}>
      <h1>Peluches Orinoco</h1>
      <Cart cart={cart} setCart={setCart} />
      {selectedTeddy ? (
        <TeddyDetail
          teddy={selectedTeddy}
          onBack={() => setSelectedTeddy(null)}
          onAddToCart={teddy => setCart([...cart, teddy])}
        />
      ) : (
        <TeddyList onSelect={setSelectedTeddy} />
      )}
    </div>
  );
}

export default App;