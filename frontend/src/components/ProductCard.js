import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/productCard.css'; // Import your CSS file

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="card shadow-lg">
      <div className="card-body">
        {product.featured && (
          <div className="featured-badge">
            Featured
          </div>
        )}
        <img
          className="card-img-top"
          src={product.imageURL}
          alt={product.name}
        />
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="card-subtitle">Rs. {product.discountedPrice}</h6>
          <h6 className="card-subtitle delisted">Rs {product.originalPrice}</h6>
        </div>
        <p className="card-title">{product.name}</p>
        <p className="card-text">{product.description}</p>
        <h6>Size</h6>
        <div className="size-buttons">
          <div className="btn-group">
            {['S', 'M', 'L'].map(size => (
              <button
                key={size}
                type="button"
                className={`size-button ${selectedSize === size ? 'btn-selected' : 'btn-outline-secondary'}`}
                onClick={() => selectSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="quantity-controls">
            <button className="quantity-button minus" onClick={decrementQuantity}></button>
            <span className="quantity-label">{quantity}</span>
            <button className="quantity-button plus" onClick={incrementQuantity}></button>
          </div>
        </div>
        <div className="action-buttons">
          <button className="action-button add-to-cart">Add to Cart</button>
          <button className="action-button buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
