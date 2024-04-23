import React, { useState } from 'react';
import './Address.css'; 
import { Link } from 'react-router-dom';

function Address() {
  const [otp, setOtp] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

 
  const handleOtpChange = (e) => {
    const enteredOtp = e.target.value.trim();
    setOtp(enteredOtp);
  };

   
  const handleDistrictChange = (e) => {
    const enteredDistrict = e.target.value.trim();
    setDistrict(enteredDistrict);
  };

  
  const handleCityChange = (e) => {
    const enteredCity = e.target.value.trim();
    setCity(enteredCity);
  };

 
  const areAllFieldsFilled = () => {
    return otp.length === 6 && district !== '' && city !== '';
  };

  return (
    <div className="address-container">
      <h2 className='heading' >Hello! Enter Your Address</h2>
      <div className="input-container">
        <label htmlFor="otp">Enter Your Pincode</label>
        <input
          id="otp"
          className="custom-input"
          type="number"
          value={otp}
          onChange={handleOtpChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="district">District</label>
        <input
          type="text"
          id="district"
          className="custom-input"
          value={district}
          onChange={handleDistrictChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          className="custom-input"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      {areAllFieldsFilled() && (  
      <div style={{ padding: '10px' }}>  
      <Link to="/address" className="btn btn-primary">
       Submit Form
      </Link>
    </div>
      )}
      <Link to="/otp" className="btn btn-primary">
        Back
      </Link>
    </div>
  );
}

export default Address;
