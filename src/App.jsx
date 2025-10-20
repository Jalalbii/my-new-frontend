import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/items`)
      .then((res) => res.json())
      .then((res) => {
        setItems(res?.data?.items)
      })
      .catch(() => setError('Failed to fetch items'));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{border: "5px solid pink"}}>🚀 Deployed from FEATURE branch</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {items?.map((item, idx) => (
          <li key={item._id || idx}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;