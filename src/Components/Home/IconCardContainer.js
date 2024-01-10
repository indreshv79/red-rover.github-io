import React from "react";
import { Link } from 'react-router-dom';
import facilitiesIcon1 from "../../Assets/facilities-icon-1.svg";
import facilitiesIcon2 from "../../Assets/facilities-icon-2.svg";
import facilitiesIcon3 from "../../Assets/facilities-icon-3.svg";
import facilitiesIcon4 from "../../Assets/facilities-icon-4.svg";
import facilitiesIcon5 from "../../Assets/facilities-icon-5.svg";
import facilitiesIcon6 from "../../Assets/facilities-icon-6.svg";
import facilitiesIcon7 from "../../Assets/facilities-icon-7.svg";
import facilitiesIcon8 from "../../Assets/facilities-icon-8.svg";
import './IconCardContainer.css';

const IconCardContainer = () => {

    return (
      <div className="content-container icon-card-container bg-grey">
         <div className="container">
            <div className="row">
                  <div className="col-lg-12">
                     <div className="icon-card-heading">
                     <div className="heading">
                        <h6>Facilities</h6>
                        <h3>What Separates Fetchable Storage <br /> From the Rest of the Pack?</h3>
                     </div>
                     </div>
                     <ul className="icon-card-list d-flex flex-wrap">
                        <li className="icon-card-item">
                              <div className="icon-card-box d-flex flex-wrap">
                                 <div className="icb-show d-flex flex-column justify-content-between h-100">
                                    <div className="icb-img">
                                    <img src={facilitiesIcon1} alt="facilities icon 1" />
                                    </div>
                                    <div className="icb-text">
                                    <h4> Multiple Revenue Streams</h4>
                                    </div>
                                 </div>
                                 <div className="icb-hover text-white d-flex flex-column justify-content-between h-100">
                                    <div className="icb-hover-text">
                                    One of the most significant benefits of becoming a Red Rover franchisee is the ability to
                                    capitalize on the multiple revenue streams our business model allows. We offer more op...
                                    </div>
                                    <div className="icb-hover-btn-box">
                                    <Link to="/" className="icb-btn"> View More </Link>
                                    </div>
                                 </div>
                              </div>
                        </li>
                        <li className="icon-card-item">
                              <div className="icon-card-box d-flex flex-wrap">
                                 <div className="icb-show d-flex flex-column justify-content-between h-100">
                                    <div className="icb-img">
                                    <img src={facilitiesIcon2} alt="facilities icon 2" />
                                    </div>
                                    <div className="icb-text">
                                    <h4> Moving and Storage Combined </h4>
                                    </div>
                                 </div>
                                 <div className="icb-hover text-white d-flex flex-column justify-content-between h-100">
                                    <div className="icb-hover-text">
                                    One of the most significant benefits of becoming a Red Rover franchisee is the ability to
                                    capitalize on the multiple revenue streams our business model allows. We offer more op...
                                    </div>
                                    <div className="icb-hover-btn-box">
                                    <Link to="/" className="icb-btn"> View More </Link>
                                    </div>
                                 </div>
                              </div>
                        </li>
                        <li className="icon-card-item">
                           <div className="icon-card-box d-flex flex-wrap">
                              <div className="icb-show d-flex flex-column justify-content-between h-100">
                                 <div className="icb-img">
                                    <img src={facilitiesIcon3} alt="facilities icon 3" />
                                 </div>
                                 <div className="icb-text">
                                    <h4> Most Flexible Options in the Industry</h4>
                                 </div>
                              </div>
                              <div className="icb-hover text-white d-flex flex-column justify-content-between h-100">
                                 <div className="icb-hover-text">
                                    One of the most significant benefits of becoming a Red Rover franchisee is the ability to
                                    capitalize on the multiple revenue streams our business model allows. We offer more op...
                                 </div>
                                 <div className="icb-hover-btn-box">
                                 <Link to="/" className="icb-btn"> View More </Link>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="icon-card-item">
                           <div className="icon-card-box d-flex flex-wrap">
                              <div className="icb-show d-flex flex-column justify-content-between h-100">
                                 <div className="icb-img">
                                    <img src={facilitiesIcon4} alt="facilities icon 4" />
                                 </div>
                                 <div className="icb-text">
                                    <h4> Long Distance or Local Moving</h4>
                                 </div>
                              </div>
                              <div className="icb-hover text-white d-flex flex-column justify-content-between h-100">
                                 <div className="icb-hover-text">
                                    One of the most significant benefits of becoming a Red Rover franchisee is the ability to
                                    capitalize on the multiple revenue streams our business model allows. We offer more op...
                                 </div>
                                 <div className="icb-hover-btn-box">
                                    <Link to="/" className="icb-btn"> View More </Link>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="icon-card-item">
                           <div className="icon-card-box d-flex flex-wrap">
                              <div className="icb-show d-flex flex-column justify-content-between h-100">
                                 <div className="icb-img">
                                    <img src={facilitiesIcon5} alt="facilities icon 5"/>
                                 </div>
                                 <div className="icb-text">
                                    <h4> Patented Truck Technology </h4>
                                 </div>
                              </div>
                              <div className="icb-hover text-white d-flex flex-column justify-content-between h-100">
                                 <div className="icb-hover-text">
                                    One of the most significant benefits of becoming a Red Rover franchisee is the ability to
                                    capitalize on the multiple revenue streams our business model allows. We offer more op...
                                 </div>
                                 <div className="icb-hover-btn-box">
                                    <Link to="/" className="icb-btn"> View More </Link>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="icon-card-item">
                           <div className="icon-card-box d-flex flex-wrap">
                              <div className="icb-show d-flex flex-column justify-content-between h-100">
                                 <div className="icb-img">
                                    <img src={facilitiesIcon6} alt="facilities icon 6"/>
                                 </div>
                                 <div className="icb-text">
                                    <h4> State of the Art Trucks </h4>
                                 </div>
                              </div>
                              <div className="icb-hover text-white d-flex flex-column justify-content-between h-100">
                                 <div className="icb-hover-text">
                                    One of the most significant benefits of becoming a Red Rover franchisee is the ability to
                                    capitalize on the multiple revenue streams our business model allows. We offer more op...
                                 </div>
                                 <div className="icb-hover-btn-box">
                                    <Link to="/" className="icb-btn"> View More </Link>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="icon-card-item">
                           <div className="icon-card-box d-flex flex-wrap">
                              <div className="icb-show d-flex flex-column justify-content-between h-100">
                                 <div className="icb-img">
                                    <img src={facilitiesIcon7} alt="facilities icon 7"/>
                                 </div>
                                 <div className="icb-text">
                                    <h4> Storage at their Location or Ours </h4>
                                 </div>
                              </div>
                              <div className="icb-hover text-white d-flex flex-column justify-content-between h-100">
                                 <div className="icb-hover-text">
                                    One of the most significant benefits of becoming a Red Rover franchisee is the ability to
                                    capitalize on the multiple revenue streams our business model allows. We offer more op...
                                 </div>
                                 <div className="icb-hover-btn-box">
                                    <Link to="/" className="icb-btn"> View More </Link>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li className="icon-card-item">
                           <div className="icon-card-box d-flex flex-wrap">
                              <div className="icb-show d-flex flex-column justify-content-between h-100">
                                 <div className="icb-img">
                                    <img src={facilitiesIcon8} alt="facilities icon 8"/>
                                 </div>
                                 <div className="icb-text">
                                    <h4> Industry Leading Customer Service </h4>
                                 </div>
                              </div>
                              <div className="icb-hover text-white d-flex flex-column justify-content-between h-100">
                                 <div className="icb-hover-text">
                                    One of the most significant benefits of becoming a Red Rover franchisee is the ability to
                                    capitalize on the multiple revenue streams our business model allows. We offer more op...
                                 </div>
                                 <div className="icb-hover-btn-box">
                                    <Link to="/" className="icb-btn"> View More </Link>
                                 </div>
                              </div>
                           </div>
                        </li>


                     </ul>
                  </div>
            </div>
         </div>
      </div>
    );
};
export default IconCardContainer;