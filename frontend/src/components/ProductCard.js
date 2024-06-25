import React, { useState } from 'react';

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
    <div className="card mb-4 shadow" style={{ width: '320px', borderRadius: '15px', overflow: 'hidden', padding: '20px', border: 'none', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
      <img
        className="card-img-top"
        src={product.imageURL}
        alt={product.name}
        style={{ padding: '10px', objectFit: 'cover', borderRadius: '25px', width: '100%', height: '200px' }}
      />
      <div className="card-body">
        <div className="d-flex align-items-center align-items-left mb-2">
          <h6 className="card-subtitle mb-1" style={{ color: '#008c99', fontSize: '18px', fontWeight: 'bold', marginRight: '9px' }}>Rs {product.discountedPrice}</h6>
          <h6 className="card-subtitle mb-1" style={{ color: '#888', fontSize: '16px', textDecoration: 'line-through', fontWeight: 'bold' }}>Rs {product.originalPrice}</h6>
        </div>
        <h5 className="card-title mb-2" style={{ color: '#008c99', fontSize: '20px', fontWeight: 'bold' }}>{product.name}</h5>
        <p className="card-text" style={{ fontWeight: 'bold' }}>{product.description}</p>
        <div className="mt-3">
          <h6 style={{ fontWeight: 'bold' }}>Size</h6>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group" role="group" aria-label="Size">
              {['S', 'M', 'L'].map(size => (
                <button
                  key={size}
                  type="button"
                  className={`btn ${selectedSize === size ? 'btn-selected' : 'btn-outline-secondary'}`}
                  style={{
                    width: '30px',
                    height: '30px',
                    lineHeight: '30px',
                    borderRadius: '50%',
                    textAlign: 'center',
                    padding: 0,
                    marginRight: '6px',
                    fontSize: '12px'
                  }}
                  onClick={() => selectSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btn-circle me-2" onClick={decrementQuantity}>-</button>
              <span style={{ fontWeight: 'bold' }}>{quantity}</span>
              <button className="btn btn-circle ms-2" onClick={incrementQuantity}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between m-2">
        <button className="btn btn-custom btn-selected">Add to Cart</button>
        <button className="btn btn-custom me-2">Buy Now</button>
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
          border-radius: 35px;
          margin: 4px;
          width: 40%;
        }
        .btn-custom:hover {
          background-color: white;
          color: #008c99;
          border: 1px solid #008c99;
        }
        .btn-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #008c99;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          padding: 0;
        }
        .btn-circle:hover {
          background-color: #006d77;
        }
        .card {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
