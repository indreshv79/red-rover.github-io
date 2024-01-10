import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import logoCarouselImg from '../../Assets/logo-carousel-img.jpg';
import Swiper from 'swiper';
import './LogoCarousel.css';

const LogoCarousel = () => {
    useEffect(() => {
        // Initialize Swiper when the component mounts
        new Swiper('.logo-carousel-slider', {
          
          speed: 6000,
          slidesPerView: 'auto',
          spaceBetween: 15,
          autoplay: {
            delay: 0,
          },
          loop: true,
          // allowTouchMove: false,
          disableOnInteraction: true, // Prevents the autoplay from stopping on user interaction
          breakpoints: {
            992: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          },
        });
      }, []);
  return (
    <div className="content-container logo-carousel-container pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading text-center">
              <h6>As Seen on</h6>
            </div>
            <div className="swiper logo-carousel-slider">
              <ul className="swiper-wrapper">
                
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>
                <li className="swiper-slide">
                  <Link to="/" className="logo-carousel-box position-relative">
                    <div className="logo-carousel-img">
                      <img src={logoCarouselImg} alt="logo carousel img" />
                    </div>
                  </Link>
                </li>               
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;