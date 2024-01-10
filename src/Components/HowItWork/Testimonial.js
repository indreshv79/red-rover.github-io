import React from 'react';
import './Testimonial.css'
import quiteIcon from '../../Assets/quote-icon.svg';
import starIcon from '../../Assets/star-icon.svg';

const Testimonial = () => {
  return (
    <div className="content-container testimonials-container bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h6>Testimonials</h6>
              <h3>Red Rover Moving & Storage Reviews</h3>
            </div>
            <div className="testimonials-box position-relative">
              <div className="testimonials-quote-icon">
                <img src={quiteIcon} alt="quote icon" />
              </div> 
              <div className="testimonials-text-box">
                <h5>
                  Just did phase one today of the storage rental...plenty of directions and check ins leading up...vehicle was ready and I was off to load up my house! Thank you!
                </h5>
                <div className="testimonials-author">Jeff B</div>
                <div className="testimonials-stars-list d-flex">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="testimonials-stars-item d-flex">
                      <img src={starIcon} alt="star icon" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
