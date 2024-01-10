import React from "react";
import "./ComparisonTable.css";
import featuredBgImg from '../../Assets/featured-bg-img.png';
import tableHeadIcon from '../../Assets/table-head-icon.png';
import tickIcon from '../../Assets/tick-icon.svg';
import crossIcon from '../../Assets/cross-icon.svg';

const ComparisonTable = () => {
    return (
      <div className="content-container featured-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="featured-head">
                <div className="heading">
                  <h6>Compare Us</h6>
                  <h3>Compare Us To Other Franchise Programs</h3>
                </div>
                <p> Our CEO, Pete Warhurst, founded Red Rover with the goal of providing a more complete moving and storage experience than his last venture in the industry, as founder and CEO of PODS®. While Fetchable Storage from Red Rover shares some similarities to PODS®, we’ve found areas to improve our service offerings that make Red Rover the most comprehensive moving and storage service available today. Here’s how Red Rover stacks up against PODS®: </p>
              </div>
              <div className="featured-body">
                <div className="featured-bg-img">
                  <img src={featuredBgImg} alt="featured bg img" />
                </div>
                <div className="table-responsive">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th style={{ width: '37%' }}>
                          <div className="table-head">Brands</div>
                        </th>
                        <th style={{ width: '21%' }}>
                          <div className="table-head-icon">
                            <img src={tableHeadIcon} alt="table head icon" />
                          </div>
                        </th>
                        <th style={{ width: '21%' }}>Brand U</th>
                        <th style={{ width: '21%' }}>Brand P</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Management Creator of PODS </td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross dicon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Company Outlets</td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>In-House customer Sales Service Team</td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Storage Containers Truck Equipment Patent pending</td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Other Services Self-Move Trucks</td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Long Distance</td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Marketing Team Local Consumer</td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Training Initial / Ongoing</td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Advanced Technology </td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Equipment Lease program Financing Long-term</td>
                      <td>
                        <div className="table-icon">
                          <img src={tickIcon} alt="tick icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                      <td>
                        <div className="table-icon">
                          <img src={crossIcon} alt="cross icon" />
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ComparisonTable;