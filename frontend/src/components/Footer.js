import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import next from '../assets/images/next.png';
import '../styles/Footer.css';

const footerStyle = {
  padding: '2.5rem 1.25rem', // 40px 20px
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  background: 'linear-gradient(to right, #008c99, #008c99)',
  minHeight: '37.5rem', // 60vh
  display: 'flex',
  alignItems: 'center',
  width: '120.0625rem', // 1921px
  height: '57.875rem', // 926px
};

const contactTitleStyle = {
  fontSize: '5rem', // 80px
  fontWeight: '800', // Adjusted to a valid font-weight value
  margin: '0 0 1.25rem 0', // 0 0 20px 0
  textAlign: 'left',
  color: 'white',
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
  width: '20.625rem', // 330px
  height: '4.25rem', // 68px
  fontWeight: '800', // Adjusted to a valid font-weight value
  position: 'relative',
  marginTop: '1.25rem', // 20px
};

const nextStyle = {
  width: '1.875rem', // 30px
  height: '1.875rem', // 30px
  marginBottom: '0.25rem', // 20px
};

const arrowStyle = {
  position: 'absolute',
  right: '1.5625rem', // 25px
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
    <div style={footerStyle}>
      <div className="row w-100">
        <div className="col-md-4 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
          <h2 style={contactTitleStyle}>
            Success awaits <br /> you, contact us <br /> today!
          </h2>
        </div>
        <div className="col-md-6 mb-0 justify-content-start align-items-start mt-2">
          <form>
            <div className="form-row d-flex">
              <input 
                type="text" 
                className="form-control mb-3 me-3 blue-placeholder" 
                placeholder="First Name" 
                style={{ width: '25rem', height: '4.75rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem' }} // 400px, 76px, 24px, 1.125rem
              />
              <input 
                type="text" 
                className="form-control mb-3 blue-placeholder" 
                placeholder="Last Name" 
                style={{ width: '25rem', height: '4.75rem', marginLeft: '1.25rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem' }} // 400px, 76px, 20px, 24px, 1.125rem
              />
            </div>
            <div className="form-row d-flex">
              <input 
                type="email" 
                className="form-control mb-3 me-3 blue-placeholder" 
                placeholder="Email Address" 
                style={{ width: '25rem', height: '4.75rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem' }} // 400px, 76px, 24px, 1.125rem
              />
              <input 
                type="text" 
                className="form-control mb-3 blue-placeholder" 
                placeholder="Contact No" 
                style={{ width: '25rem', height: '4.75rem', marginLeft: '1.25rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem' }} // 400px, 76px, 20px, 24px, 1.125rem
              />
            </div>
            <div className="form-group">
              <textarea 
                className="form-control mb-3 blue-placeholder" 
                placeholder="Tell us more about your fitness goals" 
                style={{ width: '52.75rem', height: '12.8125rem', fontWeight: '400', fontSize: '1.5rem', padding: '1.125rem' }} // 844px, 205px, 24px, 1.125rem
              ></textarea>
            </div>
            <button type="submit" className="btn" style={buttonStyle}>
              Submit Message <span><img src={next} alt="Next icon" style={nextStyle} /></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
