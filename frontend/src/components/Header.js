import React, { useState } from 'react';
import logo from '../assets/images/lantromerch logo.png'; // Verify this path
import bgImage from '../assets/images/bgg.png'; // Verify this path
import 'bootstrap/dist/css/bootstrap.min.css';

const headerStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  color: '#fff',
  textAlign: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Centers the content horizontally
  justifyContent: 'center', // Centers the content vertically
  height: '560px', // Adjust the height to make sure it occupies the middle of the screen
};

const logoStyle = {
  maxWidth: '100px',
  margin: '5px',
  marginTop: '3px', // Decreased marginTop
};

const h1Style = {
  fontWeight: '900', // Extra bold
  fontSize: '3.5rem', // Larger font size
};

const searchButtonStyle = {
  backgroundColor: '#edae49',
  color: '#fff',
};

const Header = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue); // Pass the search term to the parent component
    setInputValue(''); // Clear the input after search
  };

  return (
    <div style={headerStyle} className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
      <img src={logo} alt="LantroMerch Logo" style={logoStyle} className="img-fluid" />
      <h1 style={h1Style} className="mb-3 fw-bold display-1">Welcome to LantroMerch!</h1>
      <div className="container w-50">
        <p className="mb-4 text-center fw-medium display-11">
          Discover a range of high-quality, innovative products designed with our signature style and cutting-edge technology. Whether you're a tech enthusiast or a loyal fan, you'll find the perfect item to showcase your LantroTech pride. Explore our collection and join us in celebrating the future of technology, one stylish product at a time!
        </p>
      </div>
      <div className="input-group mb-3 w-50" style={{ maxWidth: '400px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for products"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn w-30"
          type="button"
          style={searchButtonStyle}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
