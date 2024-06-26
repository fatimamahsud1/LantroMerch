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
  height: '60.25rem', // Adjust the height to make sure it occupies the middle of the screen
};

const logoStyle = {
  width: '9.75rem', // 156px
  height: '6rem', // 96px
  marginTop: '6.25rem', // 100px
  marginBottom: '5rem', // 80px
};

const h1Style = {
  fontWeight: '900', // Extra bold
  fontSize: '6.25rem', // 100px
  marginBottom: '2.5rem' // 40px
};

const pStyle = {
  fontWeight: '400', // Regular weight
  fontSize: '1.375rem', // 22px
  marginBottom: '2rem' // 80px
};

const pContainer = {
  width: '55rem', // 880px
  marginBottom: '1.25rem' // 20px
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
    <div style={headerStyle} className="d-flex flex-column align-items-center justify-content-center">
      <img src={logo} alt="LantroMerch Logo" style={logoStyle}  />
      <h1 style={h1Style} >Welcome to LantroMerch!</h1>
      <div style={pContainer} className="mb-4 text-center">
        <p style={pStyle}>
          Discover a range of high-quality, innovative products designed with our signature style and cutting-edge technology. Whether you're a tech enthusiast or a loyal fan, you'll find the perfect item to showcase your LantroTech pride. Explore our collection and join us in celebrating the future of technology, one stylish product at a time!
        </p>
      </div>
      <div className="input-group" style={{ width: '38.75rem', height: '3.125rem' }}> {/* 620px, 50px */}
        <input
          type="text"
          className="form-control"
          placeholder="Search for products"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn"
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
