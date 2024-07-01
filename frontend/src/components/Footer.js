import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import next from '../assets/images/next.png';
import '../styles/Footer.css';

const footerStyle = {
  padding: '8.5rem 1.25rem', // 136px 20px
  fontFamily: 'lato',
  background: 'linear-gradient(98.49deg, #007499 4.02%, #69B29E 100%)',
  minHeight: '37.5rem', // 600px
};

const contactTitleStyle = {
  fontSize: '5rem', // 80px
  fontWeight: '800',
  margin: '0 0 1.25rem 0', // 0 0 20px 0
};

const buttonStyle = {
  padding: '0.625rem 1.25rem', // 10px 20px
  fontSize: '1.5rem', // 24px
  color: '#008C99',
  borderRadius: '3.125rem', // 50px
  cursor: 'pointer',
  height: '4.25rem', // 68px
  fontWeight: '600', // Adjusted to a valid font-weight value
  marginTop: '1.25rem', // 20px
};

const nextStyle = {
  width: '1.875rem', // 30px
  height: '1.875rem', // 30px
  marginBottom: '0.4rem', // 20px
};

const inputStyle = {
  height: '4.75rem',
  fontWeight: '400',
  fontSize: '1.5rem',
  padding: '1.125rem', 
  backgroundColor:'#EFFEFF'
}

const textAreaStyle = {
  height: '12.8125rem', 
  fontWeight: '400', 
  fontSize: '1.5rem', 
  padding: '1.125rem', 
  backgroundColor:'#EFFEFF'
}

function Footer() {
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
    <div className="container-fluid d-flex p-20 text-white align-items-center justify-content-center h-100" style={footerStyle}>
      <div className="row w-100 mt-20">
        <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center text-center text-md-left">
          <h1 style={contactTitleStyle}>
            Success awaits <br /> you, contact us <br /> today!
          </h1>
        </div>
        <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mt-2 flex-column">
          <form className="w-100 d-flex flex-column align-items-center">
            <div className="form-row d-flex flex-wrap w-100 justify-content-center ">
              <div className="col-xxl-5 col-lg-3 col-md-6 col-sm-12 mb-3 me-5">
                <input 
                  type="text" 
                  className="form-control blue-placeholder" 
                  placeholder={placeholders.firstName} 
                  onFocus={() => handleFocus('firstName')}
                  onBlur={(e) => handleBlur('firstName', e.target.value)}
                  style={inputStyle} // 76px, 24px, 1.125rem
                />
              </div>
              <div className="col-xxl-5 col-lg-3 col-md-6 col-sm-12 mb-3 me-5 ">
                <input 
                  type="text" 
                  className="form-control blue-placeholder" 
                  placeholder={placeholders.lastName} 
                  onFocus={() => handleFocus('lastName')}
                  onBlur={(e) => handleBlur('lastName', e.target.value)}
                  style={inputStyle} // 76px, 24px, 1.125rem
                />
              </div>
            </div>
            <div className="form-row d-flex flex-wrap w-100 justify-content-center">
              <div className="col-xxl-5 col-lg-3 col-md-6 col-sm-12 mb-3 me-5">
                <input 
                  type="email" 
                  className="form-control blue-placeholder" 
                  placeholder={placeholders.email} 
                  onFocus={() => handleFocus('email')}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                  style={inputStyle} // 76px, 24px, 1.125rem
                />
              </div>
              <div className="col-xxl-5 col-lg-3 col-md-6 col-sm-12 mb-3 me-5">
                <input 
                  type="text" 
                  className="form-control blue-placeholder" 
                  placeholder={placeholders.contact} 
                  onFocus={() => handleFocus('contact')}
                  onBlur={(e) => handleBlur('contact', e.target.value)}
                  style={inputStyle} // 76px, 24px, 1.125rem
                />
              </div>
            </div>
            <div className="form-group col-xxl-11 col-lg-11 col-md-11 col-sm-12 me-5">
              <textarea 
                className="form-control mb-3 blue-placeholder" 
                placeholder={placeholders.goals} 
                onFocus={() => handleFocus('goals')}
                onBlur={(e) => handleBlur('goals', e.target.value)}
                style={textAreaStyle} // 205px, 24px, 1.125rem
              ></textarea>
            </div>
            <button type="submit" className="btn col-xxl-5 col-lg-5 col-md-5 col-sm-6 bg-white border-0 text-center position-relative" style={buttonStyle}>
              Submit Message <span><img src={next} alt="Next icon" style={nextStyle} /></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
