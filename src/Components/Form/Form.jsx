import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

export default function LoanForm() {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [pan, setPAN] = useState('');
  const [email, setEmail] = useState('');
  const [selectedLoan, setSelectedLoan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allFieldsFilled() && validatePAN(pan)) {
      console.log("Form submitted:", { fullName, mobile, pan, email, selectedLoan });
      
    } else {
      alert('Please fill in all fields correctly.');
    }
  };


 
  const allFieldsFilled = () => {
    return fullName !== '' && mobile !== '' && pan !== '' && selectedLoan !== '' && validateMobile(mobile) && validateEmail(email);
  };


   
  const validateMobile = (value) => {
    const mobilePattern = /^[6-9]\d{9}$/;
    return mobilePattern.test(value);
  };

   
  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const validatePAN = (value) => {
    const panPattern = /^[A-Z]{5}\d{4}[A-Z]$/;
    return panPattern.test(value);
  };


   
  const handleMobileChange = (e) => {
    const mobileValue = e.target.value;
    setMobile(mobileValue);
  };

   
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handlePANChange = (e) => {
    const panValue = e.target.value;
    setPAN(panValue);
  };


  return (
    <div className='full'>
      <div className="container">
        <h2>Loan Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" className="form-control" id="mobile" value={mobile} onChange={handleMobileChange} pattern="[6-9]{1}[0-9]{9}" required />
            <small className="form-text text-muted">Mobile number must be 10 digits and start with 6, 7, 8, or 9.</small>
            {!validateMobile(mobile) && mobile !== '' && <span className="error-msg">Invalid mobile number</span>}
          </div>
          <div className="form-group">
            <label htmlFor="pan">PAN</label>
            <input type="text" className="form-control" id="pan" value={pan} onChange={handlePANChange} required />
            <small className="form-text text-muted">Enter Valid Pan Number</small>
            {!validatePAN(pan) && pan !== '' && <span className="error-msg">Invalid PAN format</span>}
          </div>
          

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
            <small className="form-text text-muted">Please provide a valid email address.</small>
            {!validateEmail(email) && email !== '' && <span className="error-msg">Invalid email address</span>}
          </div>
          <div className="form-group">
            <label htmlFor="loanType">What kind of loan are you looking for?</label>
            <select className="form-control" id="loanType" value={selectedLoan} onChange={(e) => setSelectedLoan(e.target.value)}>
              <option value="">Select a loan type</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Education Loan">Education Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Vehicle Loan">Vehicle Loan</option>
              <option value="Gold Loan">Gold Loan</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {allFieldsFilled() && validatePAN(pan) && (
  <Link to="/otp" className="btn btn-primary">
    Next
  </Link>
)}

        </form>
      </div>
    </div>
  );
}
