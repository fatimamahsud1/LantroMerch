import React, { useState } from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const gridContainerStyle = {
  justifyContent: 'center',
  padding: '20px'
};

const loadMoreButtonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: 'white',
  backgroundColor: '#008c99',
  cursor: 'pointer',
  borderRadius: '50px',
  border: 'none',
  marginBottom: '40px'
};

function ProductsGrid({ products }) {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ color: '#008c99', fontWeight: 'bold', fontSize: '36px', margin: '40px 0 20px 0' }}>
        All Products
      </h1>

      <div className="row" style={gridContainerStyle}>
        {products.slice(0, visibleItems).map(product => (
          <div className="col-md-4 d-flex justify-content-center mb-4" key={product.id} style={{ padding: '0 10px' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {visibleItems < products.length && (
        <div className="d-flex justify-content-center">
          <button style={loadMoreButtonStyle} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductsGrid;
