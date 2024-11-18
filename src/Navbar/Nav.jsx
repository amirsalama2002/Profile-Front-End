import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
const Nav = () => {
  return (
  <div className="navcope">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">
   <h1>
   Spandex&lt;code&gt;</h1>
  </a>
  <button id="bn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link id="sd" className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link id="sd" className="nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link id="sd" className="nav-link" to="/server">Servers<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link id="sd" className="nav-link" to="/countactus">Contact-Us<span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
      <div className="im">
      <img src="/imgss/WhatsApp Image 2024-05-30 at 7.11.09 AM.jpeg" alt="" />
     <h4>Amir Salama</h4>
      </div>
    </div>
  </div>

</nav>

      {/* nav icon */}
      <nav className="navicon">
          <ul>
            <li> <Link className="nm" to="/"> <i className="fa-solid fa-house"></i></Link> </li>
            <li><Link className="nm" to="/about"> <i className="fa-solid fa-address-card"></i></Link></li>
            <li> <Link className="nm" to="/server"> <i className="fa-solid fa-server"></i></Link> </li>
            <li> <Link className="nm" to="/countactus"> <i className="fa-solid fa-address-book"></i> </Link></li>
          </ul>
      </nav>
      </div>
  );
};

export default Nav;
