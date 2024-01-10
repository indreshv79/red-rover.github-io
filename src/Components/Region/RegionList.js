import React from 'react';
import './RegionList.css'

const RegionList = () => {
    // Sample data for regions
    const regions = [
      { name: 'Colorado', color: 'bg-red' },
      { name: 'California', color: 'bg-light-red' },
      { name: 'Arizona', color: 'bg-pink' },
      { name: 'Texas', color: 'bg-grey' },
      { name: 'Illinois', color: 'bg-grey' },
      { name: 'Florida', color: 'bg-grey' },
      { name: 'Virginia', color: 'bg-grey' },
      { name: 'West Virginia', color: 'bg-grey' },
      { name: 'Massachusetts', color: 'bg-grey' },
      { name: 'New York', color: 'bg-grey' },
      { name: 'Nevada', color: 'bg-grey' },
      { name: 'Rhode Island', color: 'bg-grey' },
      { name: 'South Carolina', color: 'bg-grey' },
      { name: 'Washington DC', color: 'bg-grey' },
      { name: 'Maryland', color: 'bg-grey' },
      { name: 'North Carolina', color: 'bg-grey' },
      { name: 'North Carolina', color: 'bg-grey' },
      { name: 'North Carolina', color: 'bg-grey' },
      { name: 'North Carolina', color: 'bg-grey' },
    ];
  return (
    <div className="content-container regions-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="regions-content-box">
              <div className="heading">
                <h6>Available Regions</h6>
                <h3>Top 20 Regions</h3>
              </div>
              <div className="col-list d-flex flex-wrap">
                {/* Map through an array of regions to generate col-items */}
                {regions.map((region, index) => (
                  <div key={index} className="col-item">
                    <div className={`col-box w-100 h-100 d-flex flex-wrap align-items-center ${region.color}`}>
                      <div className="col-numb-box">#{index + 1}</div>
                      <div className="col-text-box">{region.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionList;
