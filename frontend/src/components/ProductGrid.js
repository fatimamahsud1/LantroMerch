import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/productGrid.css'; // Ensure this path is correct

function ProductsGrid({ products }) {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1264);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(window.innerWidth < 430);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1264);
      setIsVerySmallScreen(window.innerWidth < 430);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  return (
    <div className="containercontainer-style">
      <h1 className="text-center" style={{ color: '#008c99', fontWeight: 'bold', fontSize: '2.5rem', margin: '2.5rem 0 1.25rem 0' }}>
        All Products
      </h1>

      <div className="row g-4">
        {products.slice(0, visibleItems).map(product => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {visibleItems < products.length && (
        <div className="d-flex justify-content-center">
          <button className='load-more-button-style' onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductsGrid;
