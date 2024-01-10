import React from "react";
import './AllRegionsContainer.css';
import arrowLeft from '../../Assets/arrow-left.svg';
import locationIcon from '../../Assets/location-icon.svg';

const AllRegionsContainer = () =>{
    return (
        <div className="content-container all-regions-container pt-0">
        <div className="container">
           <div className="row">
              <div className="col-lg-12">
                 <div className="heading">
                    <h6>Available Regions</h6>
                    <h3>All Regions</h3>
                 </div>
                 <div className="all-regions-wrapper d-flex flex-wrap position-relative">
                    <div className="all-regions-left">
                       <div className="all-regions-left-head">
                          <div className="all-regions-search-box">
                             <input type="text" placeholder="Search Location" />
                          </div>
                       </div>
                       <div className="all-regions-left-body">
                          <div className="all-regions-index nav-tabs" id="myTab" role="tablist">
                             <div className="all-regions-index-box">
                                <h6>A</h6>
                                <div className="ari-list">
                                   <div className="ari-item">
                                      <a className="ari-box" href="#!" id="arc-a1-tab" data-bs-toggle="tab"
                                         data-bs-target="#arc-a1" role="tab">Arizona</a>
                                   </div>
                                </div>
                             </div>
                             <div className="all-regions-index-box">
                                <h6>C</h6>
                                <div className="ari-list">
                                   <div className="ari-item">
                                      <a className="ari-box" href="#!" id="arc-c1-tab" data-bs-toggle="tab"
                                         data-bs-target="#arc-c1" role="tab">California</a>
                                   </div>
                                   <div className="ari-item">
                                      <a className="ari-box" href="#!" id="arc-c2-tab" data-bs-toggle="tab"
                                         data-bs-target="#arc-c2" role="tab">Colorado</a>
                                   </div>
                                </div>
                             </div>
                             <div className="all-regions-index-box">
                                <h6>F</h6>
                                <div className="ari-list">
                                   <div className="ari-item">
                                      <a className="ari-box" href="#!" id="arc-f1-tab" data-bs-toggle="tab"
                                         data-bs-target="#arc-f1" role="tab">Florida</a>
                                   </div>
                                </div>
                             </div>
                             <div className="all-regions-index-box">
                                <h6>I</h6>
                                <div className="ari-list">
                                   <div className="ari-item">
                                      <a className="ari-box" href="#!" id="arc-i1-tab" data-bs-toggle="tab"
                                         data-bs-target="#arc-i1" role="tab">Illinois</a>
                                   </div>
                                </div>
                             </div>
                             <div className="all-regions-index-box">
                                <h6>M</h6>
                                <div className="ari-list">
                                   <div className="ari-item">
                                      <a className="ari-box" href="#!" id="arc-m1-tab" data-bs-toggle="tab"
                                         data-bs-target="#arc-m1" role="tab">Massachusetts</a>
                                   </div>
                                   <div className="ari-item">
                                      <a className="ari-box" href="#!" id="arc-m2-tab" data-bs-toggle="tab"
                                         data-bs-target="#arc-m2" role="tab">Maryland</a>
                                   </div>
                                </div>
                             </div>
                             <div className="all-regions-index-box">
                                <h6>N</h6>
                                <div className="ari-list">
                                   <div className="ari-item">
                                      <a className="ari-box" href="#!" id="arc-n1-tab" data-bs-toggle="tab"
                                         data-bs-target="#arc-n1" role="tab">New York</a>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="all-regions-empty h-100">
                       <div className="h-100  d-none d-lg-flex flex-column align-items-center justify-content-center">
                          <div className="are-icon"><img src={locationIcon} alt="location icon" /></div>
                          <div className="are-text">
                             <h6 className="px-5">Select a state to show available cities</h6>
                             <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley.</p>
                          </div>
                       </div>
                    </div>
                    <div className="all-regions-right tab-content add-index" id="myTabContent">
                       <div className="tab-pane fade all-regions-right-container" id="arc-a1" role="tabpanel">
                          <div
                             className="all-regions-right-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                             <div className="d-lg-none back-btn">
                                <img src={arrowLeft} alt="arrow left" /> 
                                <a href="#!">Back</a></div>
                             <h5>Arizona</h5>
                             <div className="all-regions-right-btn"><a href="#!" className="btn btn-default">Inquire Now</a></div>
                          </div>
                          <div className="all-regions-right-body">
                             <div className="acr-heading">Available Cities</div>
                             <div className="all-city-regions">
                                <div className="acr-list">
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Phoenix</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tucson</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Scottsdale</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Sedona</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Mesa</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Flagstaff</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tempe</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Yuma</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Prescott</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Chandler</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="tab-pane fade all-regions-right-container" id="arc-c1" role="tabpanel">
                          <div
                             className="all-regions-right-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                             <div className="d-lg-none back-btn"><img src={arrowLeft} alt="arrow left" /> <a
                                   href="#!">Back</a></div>
                             <h5>California</h5>
                             <div className="all-regions-right-btn"><a href="#!" className="btn btn-default">Inquire Now</a></div>
                          </div>
                          <div className="all-regions-right-body">
                             <div className="acr-heading">Available Cities</div>
                             <div className="all-city-regions">
                                <div className="acr-list">
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Phoenix</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tucson</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Scottsdale</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Sedona</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Mesa</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Flagstaff</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tempe</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Yuma</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Prescott</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Chandler</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="tab-pane fade all-regions-right-container" id="arc-c2" role="tabpanel">
                          <div
                             className="all-regions-right-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                             <div className="d-lg-none back-btn"><img src={arrowLeft} alt="arrow left" /> <a
                                   href="#!">Back</a></div>
                             <h5>Colorado</h5>
                             <div className="all-regions-right-btn"><a href="#!" className="btn btn-default">Inquire Now</a></div>
                          </div>
                          <div className="all-regions-right-body">
                             <div className="acr-heading">Available Cities</div>
                             <div className="all-city-regions">
                                <div className="acr-list">
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Phoenix</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tucson</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Scottsdale</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Sedona</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Mesa</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Flagstaff</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tempe</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Yuma</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Prescott</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Chandler</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="tab-pane fade all-regions-right-container" id="arc-f1" role="tabpanel">
                          <div
                             className="all-regions-right-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                             <div className="d-lg-none back-btn"><img src={arrowLeft} alt="arrow left" /> <a
                                   href="#!">Back</a></div>
                             <h5>Florida</h5>
                             <div className="all-regions-right-btn"><a href="#!" className="btn btn-default">Inquire Now</a></div>
                          </div>
                          <div className="all-regions-right-body">
                             <div className="acr-heading">Available Cities</div>
                             <div className="all-city-regions">
                                <div className="acr-list">
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Phoenix</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tucson</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Scottsdale</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Sedona</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Mesa</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Flagstaff</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tempe</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Yuma</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Prescott</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Chandler</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="tab-pane fade all-regions-right-container" id="arc-i1" role="tabpanel">
                          <div
                             className="all-regions-right-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                             <div className="d-lg-none back-btn"><img src={arrowLeft} alt="arrow left" /> <a
                                   href="#!">Back</a></div>
                             <h5>Illinois</h5>
                             <div className="all-regions-right-btn"><a href="#!" className="btn btn-default">Inquire Now</a></div>
                          </div>
                          <div className="all-regions-right-body">
                             <div className="acr-heading">Available Cities</div>
                             <div className="all-city-regions">
                                <div className="acr-list">
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Phoenix</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tucson</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Scottsdale</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Sedona</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Mesa</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Flagstaff</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tempe</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Yuma</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Prescott</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Chandler</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="tab-pane fade all-regions-right-container" id="arc-m1" role="tabpanel">
                          <div
                             className="all-regions-right-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                             <div className="d-lg-none back-btn"><img src={arrowLeft} alt="arrow left" /> <a
                                   href="#!">Back</a></div>
                             <h5>Massachusetts</h5>
                             <div className="all-regions-right-btn"><a href="#!" className="btn btn-default">Inquire Now</a></div>
                          </div>
                          <div className="all-regions-right-body">
                             <div className="acr-heading">Available Cities</div>
                             <div className="all-city-regions">
                                <div className="acr-list">
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Phoenix</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tucson</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Scottsdale</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Sedona</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Mesa</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Flagstaff</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tempe</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Yuma</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Prescott</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Chandler</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="tab-pane fade all-regions-right-container" id="arc-m2" role="tabpanel">
                          <div
                             className="all-regions-right-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                             <div className="d-lg-none back-btn"><img src={arrowLeft} alt="arrow left" /> <a
                                   href="#!">Back</a></div>
                             <h5>Maryland</h5>
                             <div className="all-regions-right-btn"><a href="#!" className="btn btn-default">Inquire Now</a></div>
                          </div>
                          <div className="all-regions-right-body">
                             <div className="acr-heading">Available Cities</div>
                             <div className="all-city-regions">
                                <div className="acr-list">
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Phoenix</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tucson</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Scottsdale</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Sedona</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Mesa</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Flagstaff</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tempe</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Yuma</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Prescott</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Chandler</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="tab-pane fade all-regions-right-container" id="arc-n1" role="tabpanel">
                          <div
                             className="all-regions-right-head d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                             <div className="d-lg-none back-btn"><img src={arrowLeft} alt="arrow left" /> <a
                                   href="#!">Back</a></div>
                             <h5>New York</h5>
                             <div className="all-regions-right-btn"><a href="#!" className="btn btn-default">Inquire Now</a></div>
                          </div>
                          <div className="all-regions-right-body">
                             <div className="acr-heading">Available Cities</div>
                             <div className="all-city-regions">
                                <div className="acr-list">
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Phoenix</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tucson</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Scottsdale</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Sedona</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Mesa</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Flagstaff</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Tempe</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Yuma</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Prescott</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                   <div className="acr-item">
                                      <div className="acr-box d-flex justify-content-between align-items-center">
                                         <div className="acr-label">Chandler</div>
                                         <a href="#!" className="acr-btn">Inquire Now</a>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
}

export default AllRegionsContainer;