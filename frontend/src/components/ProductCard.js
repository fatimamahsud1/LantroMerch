import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="card shadow-lg" style={{ width: '28.125rem', height: '50.25rem', padding: '1.25rem', borderRadius:'1.5rem' }}>
      <div style={{ width: '100%', height: '39.75rem' }}>
        <img
          className="card-img-top"
          src={product.imageURL}
          alt={product.name}
          style={{ objectFit: 'cover', width: '100%', height: '15.125rem', marginBottom: '0.5rem', borderRadius:'1.5rem' }}
        />
        <div className="card-body">
          <div className="d-flex align-items-center mb-2">
            <h6 className="card-subtitle mb-2 " style={{ fontSize: '2rem', fontWeight: 600, marginRight: '0.5rem', color:'#008C99' }}>Rs. {product.discountedPrice}</h6>
            <h6 className="card-subtitle mb-2" style={{ fontSize: '2rem', fontWeight: 600, textDecoration: 'line-through', color:'#D9D9D9' }}>Rs {product.originalPrice}</h6>
          </div>
          <h5 className="card-title" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1.25rem', color:'#008C99' }}>{product.name}</h5>
          <p className="card-text" style={{ fontWeight: 400, fontSize: '1.5rem', color: '#404040', marginBottom: '1.25rem' }}>{product.description}</p>
          <div className="mt-3">
            <h6 style={{ fontWeight: 400, fontSize: '1.5rem', color: '#404040' }}>Size</h6>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group" role="group" aria-label="Size">
                {['S', 'M', 'L'].map(size => (
                  <button
                    key={size}
                    type="button"
                    className={`btn ${selectedSize === size ? 'btn-selected' : 'btn-outline-secondary'}`}
                    style={{
                      width: '2.25rem',
                      height: '2.25rem',
                      lineHeight: '1.875rem',
                      borderRadius: '50%',
                      textAlign: 'center',
                      padding: 0,
                      marginRight: '1rem',
                      fontSize: '1rem',
                      fontWeight: 600
                    }}
                    onClick={() => selectSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-circle me-2" onClick={decrementQuantity} style={{ width: '2.25rem', height: '2.25rem' }}>-</button>
                <span style={{ fontWeight: 600, fontSize: '1.75rem', color: '#404040' }}>{quantity}</span>
                <button className="btn btn-circle ms-2" onClick={incrementQuantity} style={{ width: '2.25rem', height: '2.25rem' }}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center" style={{ marginTop: '3.75rem' }}>
          <button className="btn btn-selected" style={{ width: '10rem', height: '3.375rem', borderRadius: '3.125rem', fontWeight: 600, fontSize: '1.25rem' }}>Add to Cart</button>
          <button className="btn-custom" style={{ width: '10rem', height: '3.375rem', borderRadius: '3.125rem', fontWeight: 600, fontSize: '1.25rem' }}>Buy Now</button>
        </div>
        <style jsx>{`
          .btn-selected {
            background-color: white;
            color: #008c99;
            border: 1px solid #008c99;
          }
          .btn-outline-secondary {
            border-color: lightgrey;
            color: lightgrey;
          }
          .btn:hover.btn-selected {
            background-color: white;
            color: #008c99;
            border: 1px solid #008c99;
          }
          .btn-selected:hover {
            background-color: white;
            color: #008c99;
            border: 1px solid #008c99;
          }
          .btn-custom {
            background-color: #008c99;
            color: white;
            border: none;
            border-radius: 2.1875rem;
            margin: 0.25rem;
            width: 40%;
          }
          .btn-custom:hover {
            background-color: white;
            color: #008c99;
            border: 1px solid #008c99;
          }
          .btn-circle {
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: #008c99;
            color: white;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            padding: 0;
          }
          .btn-circle:hover {
            background-color: #006d77;
          }
          .card {
            box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProductCard;
