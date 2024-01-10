import React from "react";
import logo from "../../Assets/logo.svg";
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () =>{
    return (
        <header id="header">
        <nav className="navbar navbar-expand-xl">
           <div className="container container1">
              <div className="nav-inside d-flex align-items-center justify-content-between">
                 <Link to="/" className="navbar-brand"><img src={logo} alt="" /></Link>
                 <button className="navbar-toggler collapsed d-flex align-items-center justify-content-start d-xl-none"
                    type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="nav-text">
                       <span className="nav-text-menu">Menu</span>
                       <span className="nav-text-close">Close</span>
                    </span>
                 </button>
                 <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-inside ms-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/how-it-works" className="nav-link">How it Works</Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/regions" className="nav-link">Regions</Link>
                        </li>
                     </ul>
                       <div className="nav-inside-content d-block d-lg-none text-center">
                          <div className="nic-item"><a className="header-page-link" href="tel:+13333334444">+1 333-333-4444</a>
                          </div>
                          <div className="nic-item"><button type="button" className="btn btn-primary header-btn btn-lg">Download
                                Brochure</button></div>
                          <div className="nic-item">
                           <Link to="/" className="btn btn-default header-btn btn-lg">Inquire Now</Link>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="header-right d-flex align-items-center">
                    <div className="hr-item d-none d-lg-block"><a className="header-page-link" href="tel:+13333334444">+1
                          333-333-4444</a></div>
                    <div className="hr-item d-none d-lg-block"><button type="button"
                          className="btn btn-primary header-btn">Download Brochure</button></div>
                    <div className="hr-item d-none d-lg-block"><Link to="/inquire-us" className="btn btn-default header-btn">Inquire Now</Link>
                    </div>
                 </div>
              </div>
           </div>
        </nav>
     </header>
    );
    
 
};

export default Header;