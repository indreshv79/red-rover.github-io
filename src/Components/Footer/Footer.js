import React from 'react';
import footerLogo from "../../Assets/logo.svg";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-upper d-lg-flex align-items-lg-center justify-content-lg-between">
              <div className="footer-logo-area">
                <Link to="/" className="footer-logo"><img src={footerLogo} alt="Logo" /></Link>
              </div>
              <div className="footer-upper-right d-lg-flex align-items-lg-center">
                <div className="d-lg-flex align-items-lg-center">
                  <ul className="footer-nav-list d-lg-flex align-items-lg-center">
                    <li className="footer-nav-item"><Link to="/" className="footer-nav-link">Home</Link></li>
                    <li className="footer-nav-item"><Link to="/how-it-works" className="footer-nav-link">How it Works</Link></li>
                    <li className="footer-nav-item"><Link to="/regions" className="footer-nav-link">Regions</Link></li>
                    <li className="footer-nav-item"><Link to="/inquire-us" className="footer-nav-link">Inquire Now</Link></li>
                  </ul>
                  <div className="footer-nav-links">
                    <Link to="/" className="footer-link">RedRover<span>s</span>.com</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-lower d-lg-flex align-items-lg-center justify-content-lg-between">
              <ul className="footer-nav-list d-flex align-items-center justify-content-center justify-content-lg-start">
                <li className="footer-nav-item"><Link to="/" className="footer-nav-link">Terms</Link></li>
                <li className="footer-nav-item"><Link to="/" className="footer-nav-link">Privacy</Link></li>
              </ul>
              <ul className="social-link d-flex align-items-center">
                <li><Link to="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-facebook-f"></i></Link></li>
                <li><Link to="https://www.linkedin.com/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></Link></li>
                <li><Link to="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram"></i></Link></li>
              </ul>
              <div className="copyright">Red Rover <span>&copy;</span>, LLC 2023</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
