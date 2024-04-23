import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
     <nav className="navbar   ">
      <div className="container-fluid">
        <a className="navbar-brand proj">Welcome to My-Project</a>
        <button className="navbar-toggler" type="button" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
      </div>
    </div>
  </nav>
</div>
  );
}
