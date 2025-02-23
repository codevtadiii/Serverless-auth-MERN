import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    alert('You have been logged out. Please login again.');
    navigate('/login');
  };

  const products = [
    { id: 1, name: 'Product A', price: '₹25/-', description: 'eggs' },
    { id: 2, name: 'Product B', price: '₹50./-', description: 'onion' },
    { id: 3, name: 'Product C', price: '₹75/-', description: 'Tomatoes' },
    { id: 4, name: 'Product D', price: '₹100/-', description: 'potatoes' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: '#007bff',
                color: 'white',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
                width: '100px',
                float: 'left'
        }}
      >
        Logout
      </button>

      
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1></h1>
      </header>

      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
            <img
              src={`https://www.tasteofhome.com/wp-content/uploads/2022/07/GettyImages-1224918845-e1658929817975.jpg?w=2036`}
              alt={product.name}
              style={{ width: '100%', borderRadius: '5px' }}/>
            <p style={{ fontSize: '14px', color: '#555' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', color: '#333' }}>{product.price}</p>
            <button
              onClick={() => alert(`${product.name} added to cart!`)}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
