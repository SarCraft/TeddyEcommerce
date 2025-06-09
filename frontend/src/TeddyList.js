import React, { useEffect, useState } from 'react';

function TeddyList({ onSelect }) {
  const [teddies, setTeddies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/teddies')
      .then(res => res.json())
      .then(setTeddies);
  }, []);

  return (
    <div>
      <h2>Nos peluches</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {teddies.map(teddy => (
          <div key={teddy._id} style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
            <img src={`http://localhost:3000${teddy.imageUrl}`} alt={teddy.name} style={{ width: '100%' }} />
            <h3>{teddy.name}</h3>
            <p>{teddy.price / 100} €</p>
            <button onClick={() => onSelect(teddy)}>Voir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeddyList;