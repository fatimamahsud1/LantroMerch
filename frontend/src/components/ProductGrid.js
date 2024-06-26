import React, { useState } from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const gridContainerStyle = {
  justifyContent: 'center',
  padding: '2.5rem 1.25rem',
};

const loadMoreButtonStyle = {
  padding: '0.625rem 1.25rem',
  fontSize: '1.25rem',
  color: 'white',
  backgroundColor: '#008c99',
  cursor: 'pointer',
  borderRadius: '3.125rem',
  border: 'none',
  marginBottom: '2.5rem',
  width: '11.25rem',
  height: '3.375rem',
  fontWeight: 600,
};

function ProductsGrid({ products }) {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  return (
    <div className="container" style={{ maxWidth: '101rem' }}>
      <h1 className="text-center" style={{ color: '#008c99', fontWeight: 'bold', fontSize: '2.5rem', margin: '2.5rem 0 1.25rem 0' }}>
        All Products
      </h1>

      <div className="row" style={gridContainerStyle}>
        {products.slice(0, visibleItems).map(product => (
          <div className="col-md-4 d-flex justify-content-center mb-4" key={product.id} style={{ padding: '0 0.625rem' }}>
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
