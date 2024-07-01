import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const loadMoreButtonStyle = {
  padding: '0.625rem 1.25rem',
  fontSize: '1.25rem',
  backgroundColor: '#008c99',
  cursor: 'pointer',
  borderRadius: '3.125rem',
  marginBottom: '2.5rem',
  width: '11.25rem',
  height: '3.375rem',
  fontWeight: 600,
};

const containerStyle = {
  margin: '0 auto', // Center align the container
  maxWidth: '101rem', // Equivalent to 1616px
  padding: '0 120px',

};

const h1Style = {
   color: '#008c99', 
   fontWeight: 'bold', 
   fontSize: '2.5rem', 
   margin: '2.5rem 0 1.25rem 0' 
}

function ProductsGrid({ products }) {
  const [visibleItems, setVisibleItems] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Recalculate visible items when window width changes
    if (windowWidth < 576) {
      setVisibleItems(Math.floor(visibleItems / 1) * 1);
    } else if (windowWidth < 768) {
      setVisibleItems(Math.floor(visibleItems / 2) * 2);
    } else {
      setVisibleItems(Math.floor(visibleItems / 3) * 3);
    }
  }, [windowWidth]);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  const getVisibleProducts = () => {
    return products.slice(0, visibleItems);
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 className="text-center" style={h1Style}>
        All Products
      </h1>

      <div className="row justify-content-around">
        {getVisibleProducts().map(product => (
          <div
            key={product.id}
            className={`col-sm-12 col-md-6 col-lg-4 col-xxl-4 d-flex justify-content-around mb-4`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {visibleItems < products.length && (
        <div className="d-flex justify-content-center">
          <button className = 'text-white border-0' style={loadMoreButtonStyle} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductsGrid;
