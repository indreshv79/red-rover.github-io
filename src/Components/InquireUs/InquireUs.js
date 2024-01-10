import React from "react";
import './InquireUs.css';
import contactBgImage from '../../Assets/contact-bg-image.jpg';

var sectionStyle = {backgroundImage: `url(${contactBgImage})`};

const InquireUs = () => {
  return (
    <div className="contact-container d-flex align-items-center">
      <div className="contact-bg" style={sectionStyle}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-box d-flex flex-wrap">
              <div className="contact-left">
                <div className="contact-text text-white">
                  <h6>Inquire Now</h6>
                  <h2>Get in touch <br /> with us!</h2>
                </div>
                <div className="contact-details-box d-flex flex-column align-items-start text-white">
                  <div className="contact-details">
                    <span>Phone </span>
                    <a href="tel:8005551212" className="contact-btn">+1 333 333 444</a>
                  </div>
                  <div className="contact-details">
                    <span>Email Us </span>
                    <a href="mailto:abc@example.com" className="contact-btn">Example@email.com</a>
                  </div>
                </div>
              </div>
              <div className="contact-right">
                <div className="contact-form">
                  <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Example_name" value="Example_Name" />
                    <label className="ms-lable">FULL NAME</label>
                  </div>
                  <div className="form-floating">
                    <input type="text" className="form-control" placeholder="phone_no" />
                    <label className="ms-lable">Phone</label>
                  </div>
                  <div className="form-floating invalid">
                    <input type="text" className="form-control" placeholder="phone_no" />
                    <label className="ms-lable">Email Address</label>
                    <div className="email-invalid">Enter email address</div>
                  </div>
                  <div className="form-floating text-area">
                    <textarea className="form-control" placeholder="Leave a comment here" id="message"></textarea>
                    <label className="mr-lable" htmlFor="message">Message</label>
                  </div>
                  <div className="form-btn-box d-flex justify-content-end">
                    {/* <a href="#" className="btn btn-default btn-sm">Submit</a> */}
                    <input type="submit" value="submit" className="btn btn-default btn-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquireUs;


