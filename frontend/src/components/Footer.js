import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import next from '../assets/images/next.png';
import '../styles/Footer.css'; // Ensure this import is correct

const footerStyle = {
  padding: '2.5rem 1.25rem', // 40px 20px
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  background: 'linear-gradient(98.49deg, #007499 4.02%, #69B29E 100%)',
  minHeight: '37.5rem', // 60vh
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center content horizontally
};

const buttonStyle = {
  padding: '0.625rem 1.25rem', // 10px 20px
  fontSize: '1.5rem', // 24px
  backgroundColor: 'white',
  color: '#008C99',
  border: 'none',
  borderRadius: '3.125rem', // 50px
  cursor: 'pointer',
  textAlign: 'center',
  height: '4.25rem', // 68px
  fontWeight: '600', // Adjusted to a valid font-weight value
  position: 'relative',
  marginTop: '1.25rem', // 20px
};

const nextStyle = {
  width: '1.5rem', // Adjust the width for smaller screens
  height: '1.5rem', // Adjust the height for smaller screens
  marginLeft: '0.5rem', // Adjust the spacing between text and icon
};

const Footer = () => {
  const [placeholders, setPlaceholders] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    contact: 'Contact No',
    goals: 'Tell us more about your fitness goals',
  });

  useEffect(() => {
    // Check if the HubSpot form script is already loaded to prevent duplicates
    const existingScript = document.getElementById('hubspot-form-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'hubspot-form-script';
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "22183957",
            formId: "a33cc51b-d671-4d8a-9d8c-117f0ffb5064",
            target: "#hubspotForm"
          });
        }
      };
    }
  }, []);

  const handleFocus = (field) => {
    setPlaceholders((prev) => ({ ...prev, [field]: '' }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setPlaceholders((prev) => ({
        ...prev,
        [field]: field === 'firstName' ? 'First Name'
          : field === 'lastName' ? 'Last Name'
          : field === 'email' ? 'Email Address'
          : field === 'contact' ? 'Contact No'
          : 'Tell Us More About Your Fitness Goals',
      }));
    }
  };

  return (
    <div className="container-fluid d-flex text-container" style={footerStyle}>
      <div className="row w-100">
        <div className="col-lg-4 align-items-center justify-content-lg-start text-container">
          <h2 className="contact-title">
            Success awaits <br /> you, contact us <br /> today!
          </h2>
        </div>
        <div className="col-lg-6 justify-content-center align-items-center mt-2">
          <form>
            <div className="form-row d-flex flex-column flex-lg-row col-lg-6">
              <input 
                type="text" 
                className="form-control mb-3 me-3 blue-placeholder" 
                placeholder={placeholders.firstName} 
                onFocus={() => handleFocus('firstName')}
                onBlur={(e) => handleBlur('firstName', e.target.value)}
                style={{ height: '4.75rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem', backgroundColor:'#EFFEFF' }}
              />
              <input 
                type="text" 
                className="form-control mb-3 blue-placeholder" 
                placeholder={placeholders.lastName} 
                onFocus={() => handleFocus('lastName')}
                onBlur={(e) => handleBlur('lastName', e.target.value)}
                style={{ height: '4.75rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem', backgroundColor:'#EFFEFF' }}
              />
            </div>
            <div className="form-row d-flex flex-column flex-lg-row col-lg-6">
              <input 
                type="email" 
                className="form-control mb-3 me-3 blue-placeholder" 
                placeholder={placeholders.email} 
                onFocus={() => handleFocus('email')}
                onBlur={(e) => handleBlur('email', e.target.value)}
                style={{ height: '4.75rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem', backgroundColor:'#EFFEFF' }}
              />
              <input 
                type="text" 
                className="form-control mb-3 blue-placeholder" 
                placeholder={placeholders.contact} 
                onFocus={() => handleFocus('contact')}
                onBlur={(e) => handleBlur('contact', e.target.value)}
                style={{ height: '4.75rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem', backgroundColor:'#EFFEFF' }}
              />
            </div>
            <div className="form-group d-flex col-lg-10">
              <textarea 
                className="form-control blue-placeholder" 
                placeholder={placeholders.goals} 
                onFocus={() => handleFocus('goals')}
                onBlur={(e) => handleBlur('goals', e.target.value)}
                style={{ height: '12.8125rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem', backgroundColor:'#EFFEFF' }}
              ></textarea>
            </div>
            <button type="submit" className="btn col-lg-5 center-on-small" style={buttonStyle}>
              Submit Message <span className="small"><img src={next} alt="Next icon" style={nextStyle} /></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
