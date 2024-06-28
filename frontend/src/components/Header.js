import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/lantromerch logo.png'; // Verify this path
import bgImage from '../assets/images/bgg.png'; // Verify this path
import '../styles/Header.css'

const headerStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  color: '#fff',
  textAlign: 'center',
  width:'100%',
};

const logoStyle = {
  width: '9.75rem',
  height: '6rem',
  marginTop: '4.95rem',
  marginBottom: '9.75rem',
};

const h1Style = {
  fontWeight: '900',
  fontSize: '6.25rem',
  marginBottom: '1.938rem',
};

const searchContainer = {
  maxWidth: '38.75rem',
  height: '3.125rem',
  width: '100%',
};

const pStyle = {
  fontWeight: '400',
  fontSize: '1.375rem',
  marginBottom: '1.938rem',
};

const pContainer = {
  marginBottom: '1.938rem',
};

const searchButtonStyle = {
  backgroundColor: '#edae49',
  color: '#fff',
  width: '10rem',
  fontSize: '1.125rem',
  fontWeight: '600',
  height: '3.125rem',
  border: '0rem',
  borderTopRightRadius: '0.5rem',
  borderBottomRightRadius: '0.5rem',
};

const Header = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue);
    setInputValue('');
  };

  return (
    <div style={headerStyle} className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <img src={logo} alt="LantroMerch Logo" style={logoStyle} />
        </div>
        <div className="col-10">
          <h1 className="h1-title" style={h1Style}>Welcome to LantroMerch!</h1>
        </div>
        <div className="col-12 col-md-8 col-lg-6 text-center" style={pContainer}>
          <p className="p-title" style={pStyle}>
            Discover a range of high-quality, innovative products designed with our signature style and cutting-edge technology. Whether you're a tech enthusiast or a loyal fan, you'll find the perfect item to showcase your LantroTech pride. Explore our collection and join us in celebrating the future of technology, one stylish product at a time!
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5 search-style">
          <div className="input-group search-style" style={searchContainer}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for products"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              type="button"
              style={searchButtonStyle}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
