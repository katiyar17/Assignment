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
    console.log("Form submitted:", { fullName, mobile, pan, email, selectedLoan });
  };

  
  const allFieldsFilled = () => {
    return fullName !== '' && mobile !== '' && pan !== '' && selectedLoan !== '';
  };

  return (
    <div className='full' >
    <div className="container">
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="text" className="form-control" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} pattern="[6-9]{1}[0-9]{9}" required />
          <small className="form-text text-muted">Mobile number must be 10 digits and start with 6, 7, 8, or 9.</small>
        </div>
        <div className="form-group">
          <label htmlFor="pan">PAN</label>
          <input type="text" className="form-control" id="pan" value={pan} onChange={(e) => setPAN(e.target.value)} required />
          <small className="form-text text-muted">PAN should be alphanumeric.</small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <small className="form-text text-muted">Optional. Please provide a valid email address.</small>
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
        {allFieldsFilled() && <Link to="/otp" className="btn btn-primary">Next</Link>}
      </form>
    </div>
    </div>
  );
}
