import React from "react";
import { Link } from 'react-router-dom';
import './ColContainer.css';

const ColContainer = () => {
    return (
      <div className="content-container col-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="col-text-left h-100 d-flex flex-column">
                <div className="heading">
                  <h6>Available Regions</h6>
                  <h3>Top 20 Regions</h3>
                  <p>Red Rover Fetchable Moving & Storage® is growing! Since our launch in 2020, we have expanded to
                    cover locations across the United States. As a moving company, we provide you with great flexibility
                    in both how and when you move, plus incredible savings compared to competitors. As a storage company,
                    you'll love the ability to use a free moving truck to bring your belongings right to where you need
                    them, when you need them!</p>
                </div>
                <div className="bc-btn mt-auto d-none d-md-block">
                  <Link to="/regions" className="btn btn-default">View Available Regions</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="col-text-right">
                <div className="col-list">
                  <div className="col-item">
                    <div className="col-box bg-red w-100 h-100 d-flex flex-wrap align-items-center">
                      <div className="col-numb-box">#1</div>
                      <div className="col-text-box">Colorado</div>
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="col-box bg-light-red w-100 h-100 d-flex flex-wrap align-items-center">
                      <div className="col-numb-box">#2</div>
                      <div className="col-text-box">California</div>
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="col-box bg-pink w-100 h-100 d-flex flex-wrap align-items-center">
                      <div className="col-numb-box">#3</div>
                      <div className="col-text-box">Arizona</div>
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="col-box w-100 h-100 d-flex flex-wrap align-items-center">
                      <div className="col-numb-box">#4</div>
                      <div className="col-text-box">Texas</div>
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="col-box w-100 h-100 d-flex flex-wrap align-items-center">
                      <div className="col-numb-box">#5</div>
                      <div className="col-text-box">Illinois</div>
                    </div>
                  </div>
                </div>
                <div className="col-btn d-flex align-items-center justify-content-center">
                  <Link to="/inquire-us" className="page-btn-link">View All 20 Regions</Link>
                </div>
                <div className="bc-btn d-flex justify-content-center d-md-none">
                  <Link to="/inquire-us" className="btn btn-default">View Available Regions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ColContainer;