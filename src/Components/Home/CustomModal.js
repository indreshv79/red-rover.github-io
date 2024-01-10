import React from "react";
import './CustomModal.css';
import video from "../../Assets/modal-media.mp4";
import './CustomModal.css';

const CustomModal = () => {
    return (
      <div className="modal fade custom-modal" id="customModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body position-relative">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="custom-modal-media">
                <video controls src={video}></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomModal;