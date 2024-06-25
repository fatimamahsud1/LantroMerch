import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const footerStyle = {
  padding: '40px 20px',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  background: 'linear-gradient(to right, #008c99, #008c99)',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center'
};

const contactTitleStyle = {
  fontSize: '48px',
  fontWeight: 'bold',
  margin: '0 0 20px 0',
  textAlign: 'center',
  color: 'white',
};

const inputStyle = {
  height: '100%',
  padding: '15px',
  fontSize: '16px',
  width: '100%',
  maxWidth: '300px',
};

const inputStylee = {
  height: '100%',
  padding: '15px',
  fontSize: '16px',
  width: '100%',
  maxWidth: '650px',
};

const placeholderStyle = {
  color: '#007bff',
  fontSize: '14px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: 'white',
  color: '#007bff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  textAlign: 'center',
  width: '30%',
  height: '40px',
  fontWeight: 'bold',
  position: 'relative', // Add relative positioning
};

const arrowStyle = {
  position: 'absolute',
  right: '25px', // Adjust position as needed
  top: '55%',
  transform: 'translateY(-50%)',
  color: '#007bff', // Blue color for the arrow
};

function Footer() {
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

  return (
    <div className="container-fluid" style={footerStyle}>
      <div className="row w-100">
        <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
          <h2 style={contactTitleStyle}>
            Success awaits you,<br />
            contact us today!
          </h2>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6 d-flex">
                <input 
                  type="text" 
                  className="form-control mb-3 me-3" 
                  placeholder="First Name" 
                  style={{...inputStyle, ...placeholderStyle}} 
                  
                />
                
                <input 
                  type="text" 
                  className="form-control mb-3" 
                  placeholder="Last Name" 
                  style={{...inputStyle, ...placeholderStyle}} 
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6 d-flex">
                <input 
                  type="email" 
                  className="form-control mb-3 me-3" 
                  placeholder="Email Address" 
                  style={{...inputStyle, ...placeholderStyle}} 
                />
                <input 
                  type="text" 
                  className="form-control mb-3" 
                  placeholder="Contact No" 
                  style={{...inputStyle, ...placeholderStyle}} 
                />
              </div>
            </div>
            <div className="form-group">
              <textarea 
                className="form-control mb-3" 
                placeholder="Tell us more about your fitness goals" 
                rows="4" 
                style={{...inputStylee, ...placeholderStyle}} 
              ></textarea>
            </div>
            <button type="submit" className="btn" style={buttonStyle}>
              Submit Message <span style={arrowStyle}>&gt;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
