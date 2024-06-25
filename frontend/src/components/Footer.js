import React, { useEffect } from 'react';

const footerStyle = {
  backgroundColor: '#007bff', // Blue background color
  padding: '40px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
};

const leftColumnStyle = {
  flex: '1',
  flexDirection: 'column',
  marginRight: '20px',
};

const rightColumnStyle = {
  flex: '1',
  color: 'white',
};

const contactTitleStyle = {
  fontSize: '24px',
  margin: '0 0 20px 0',
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '48%',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: 'none',
};

const textareaStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: 'none',
  marginBottom: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: 'white',
  color: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textAlign: 'center',
  width: '180px'
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
      <div style={leftColumnStyle}>
        <h2 style={contactTitleStyle}>
          Success awaits you,<br />
          contact us today!
        </h2>
        
      </div>
      <div style={rightColumnStyle}>
      <form style={formStyle}>
          <div style={inputRowStyle}>
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
          </div>
          <div style={inputRowStyle}>
            <input type="email" placeholder="Email Address" style={inputStyle} />
            <input type="text" placeholder="Contact No" style={inputStyle} />
          </div>
          <textarea placeholder="Tell us more about your fitness goals" style={textareaStyle} />
          <button type="submit" style={buttonStyle}>Submit Message</button>
        </form>
        
      </div>
    </div>
  );
}

export default Footer;
