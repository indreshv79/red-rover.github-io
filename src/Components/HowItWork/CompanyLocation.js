import React from "react";
import './CompanyLocation.css';
import companyLocationMap from '../../Assets/company-location-map.png';
import companyLocationMapMob from '../../Assets/company-location-map-mob.png';

const CompanyLocation = () => {
    return (
      <div className="content-container company-location-container position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="company-location-content-box">
                <div className="heading pe-lg-4">
                  <h6>Company</h6>
                  <h3>A New Solution Backed By Over 150 Years Of Expertise</h3>
                </div>
                <p>
                  The Red Rover® team is focused on providing moving and storage solutions that are more affordable and convenient than traditional options. With our Fetchable Moving & Storage™ containers, you can pick up and drop off your containers at your convenience, no waiting on drivers and no hidden fees. And if you’re moving long-distance, we do the driving from one of our locations to the next.
                </p>
                <p>
                  Red Rover was founded by Pete Warhurst, who founded PODS®. His goal was to bring together a team of industry veterans to define a new breed of moving and storage that puts the customer in the driver’s seat. We’re happy to say he succeeded!
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="company-location-bg-box">
                <div className="company-location-bg d-none d-lg-block">
                  <img src={companyLocationMap} alt="company location map" />
                </div>
                <div className="company-location-bg d-lg-none">
                  <img src={companyLocationMapMob} alt="company location map" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CompanyLocation;
