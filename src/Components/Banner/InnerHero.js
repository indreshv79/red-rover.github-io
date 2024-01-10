import React from "react";
import "./InnerHero.css"
import { Link } from 'react-router-dom';
import BgImage from "../../Assets/inner-hero-1.jpg";

var Bg = {backgroundImage: `url(${BgImage})`};


const InnerHero = ({ title, subtitle}) => {
    return (
      <div className="inner-hero-container position-relative d-flex align-items-end text-white">
        <div className="inner-hero-bg" style={Bg}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-hero-content-box">
                <h6>{title}</h6>
                <h1>{subtitle}</h1>
                <div className="inner-hero-btn">
                  <Link to="/inquire-us" className="btn btn-default">
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };  
  export default InnerHero;