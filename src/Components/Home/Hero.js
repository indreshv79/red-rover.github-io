import React from "react";
import { Link } from 'react-router-dom';
import './Hero.css';
import Background from '../../Assets/hero.jpg';


var sectionStyle = {backgroundImage: `url(${Background})`};

const Hero = () =>{
    
    return(
        <div className="hero-container position-relative d-flex align-items-end text-white">
            <div className="hero-bg" style={sectionStyle}></div>
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="hero-content-box">
                        <h6>The Next Great Moving and Storage Franchise</h6>
                        <h1>A New Breed of Franchising </h1>
                        <div className="hero-btn">
                            <Link to="/inquire-us" className="btn btn-default">Inquire Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;