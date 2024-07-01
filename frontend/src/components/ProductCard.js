import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardStyle = {
  width: '100%', 
  padding: '1.25rem', 
  borderRadius: '1.5rem', 
  border: '0px'
}

const cardInStyle = { 
  position: 'relative', 
  width: '100%' 
}

const imgStyle = { 
  objectFit: 'cover', 
  width: '100%', 
  height: '15.125rem', 
  marginBottom: '0.5rem', 
  borderRadius: '1.5rem' 
}

const disPrice = { 
  fontSize: '2rem', 
  fontWeight: 600, 
  color: '#008C99'
}

const originalPrice = { 
  fontSize: '2rem', 
  fontWeight: 600, 
  textDecoration: 'line-through', 
  color: '#D9D9D9' 

}

const nameStyle = { 
  fontSize: '2rem', 
  fontWeight: 600, 
  marginBottom: '1.25rem', 
  color: '#008C99'
 }

const pDivStyle = { 
  height: '6rem', 
  marginBottom: '1rem' 
}

const descriptionStyle = { 
  fontWeight: 400, 
  fontSize: '1.5rem', 
  color: '#404040' }

const sizeTextStyle = {
  fontWeight: 400, 
  fontSize: '1.5rem', 
  color: '#404040' 
}

const sizeButtonStyle = {
    width: '2.25rem',
    height: '2.25rem',
    lineHeight: '1.875rem',
    borderRadius: '50%',
    textAlign: 'center',
    padding: 0,
    marginRight: '1rem',
    fontSize: '1rem',
    fontWeight: 600
}

const quantityTextStyle = {
  fontWeight: 600, 
  fontSize: '1.75rem', 
  color: '#404040' 
}
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
    <div className="card shadow-lg" style={cardStyle}>
      <div style={cardInStyle}>
        {product.featured && (
          <div className="featured-tag position-absolute text-white" >
            Featured
          </div>
        )}
        <img
          className="card-img-top"
          src={product.imageURL}
          alt={product.name}
          style={imgStyle}
        />
        <div className="card-body">
          <div className="d-flex align-items-center mb-2">
            <h6 className="card-subtitle mb-2 me-2" style={disPrice}>Rs. {product.discountedPrice}</h6>
            <h6 className="card-subtitle mb-2" style={originalPrice}>Rs {product.originalPrice}</h6>
          </div>
          <div style={{ height: '5rem', marginBottom: '1rem' }}>
            <h5 className="card-title" style={nameStyle}>{product.name}</h5>
          </div>
          <div style={pDivStyle}>
            <p className="card-text" style={descriptionStyle}>{product.description}</p>
          </div>
          <div className="mt-3">
            <h6 style={sizeTextStyle}>Size</h6>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group align-items-center justify-content-center" role="group" aria-label="Size">
                {['S', 'M', 'L'].map(size => (
                  <button
                    key={size}
                    type="button"
                    className={`btn ${selectedSize === size ? 'btn-selected' : 'btn-outline-secondary'}`}
                    style={sizeButtonStyle}
                    onClick={() => selectSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-circle me-2" onClick={decrementQuantity} style={{ width: '2.25rem', height: '2.25rem' }}>-</button>
                <span style={quantityTextStyle}>{quantity}</span>
                <button className="btn btn-circle ms-2" onClick={incrementQuantity} style={{ width: '2.25rem', height: '2.25rem' }}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
          <button className="btn btn-selected bg-white" style={{ width: '11.25rem', height: '3.375rem', borderRadius: '3.125rem', fontWeight: 600, fontSize: '1.25rem' }}>Add to Cart</button>
          <button style={{ width: '11.25rem', height: '3.375rem', borderRadius: '3.125rem', fontWeight: 600, fontSize: '1.25rem', backgroundColor: '#008c99', color: 'white', border: '0px' }}>Buy Now</button>
        </div>
        <style jsx>{`
          .featured-tag {
            top: 1.6rem;
            right: 0rem;
            background-color: #008c99;
            padding: 0.5rem 1rem;
            font-weight: 400;
            font-size: 1.25rem;
            width: auto;
            height: auto;
            border-radius: 0rem;
          }
          .btn-selected {
            color: #008c99;
            border: 1px solid #008c99;
          }
          .btn-outline-secondary {
            border-color: lightgrey;
            color: lightgrey;
          }
          .btn:hover.btn-selected {
            color: #008c99;
            border: 1px solid #008c99;
          }
          .btn-selected:hover {
            color: #008c99;
            border: 1px solid #008c99;
          }
          .btn-circle {
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 50%;
            background-color: #008c99;
            color: white;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
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
