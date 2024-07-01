import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/lantromerch logo.png'; // Verify this path
import bgImage from '../assets/images/bgg.png'; // Verify this path
import '../styles/Header.css';

const headerStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  color: '#fff',
  textAlign: 'center',
};

const logoStyle = {
  width: '9.75rem', // 156px
  height: '6rem', // 96px
  marginTop: '4.95rem', // 100px
  marginBottom: '5rem', // 80px
};

const h1Style = {
  fontWeight: '900', // Extra bold
  marginBottom: '2.5rem', // 40px
  marginTop: '2.5rem', // 40px

};

// Responsive font size classes
const h1ResponsiveClass = 'h1-responsive';
const pResponsiveClass = 'p-responsive';

const pContainer = {
  marginBottom: '2.85rem' ,// 20px
  marginTop: '1.25rem' // 20px
};

const searchButtonStyle = {
  backgroundColor: '#edae49',
  color: '#fff',
  width: '10rem', // 160px
  fontSize: '1.125rem', // 18px
  fontWeight: '600', // Regular weight
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
    <div className="container-fluid" style={headerStyle}>
      <div className="row justify-content-center">
        <div className="col-12 justify-content-center">
          <img src={logo} alt="LantroMerch Logo" style={logoStyle} />
        </div>
        <div className="col-sm-8 col-lg-10 col-xxl-10">
          <h1 className={h1ResponsiveClass} style={h1Style}>Welcome to LantroMerch!</h1>
        </div>
        <div className="row justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-8 col-xxl-6" style={pContainer}>
          <p className={pResponsiveClass}>
            Discover a range of high-quality, innovative products designed with our signature style and cutting-edge technology. Whether you're a tech enthusiast or a loyal fan, you'll find the perfect item to showcase your LantroTech pride. Explore our collection and join us in celebrating the future of technology, one stylish product at a time!
          </p>
        </div>
        </div>
        <div className=" col-md-6 col-lg-6 col-xxl-6 d-flex search-container-responsive flex-sm-row justify-content-center">
          <div className='input-group search-container-responsive'>
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
      </div>
    </div>
  );
};

export default Header;
