import React from "react";
import './RightImageContainer.css';
import RicImage from '../../Assets/ric-media.jpg';
import PlayIcon from '../../Assets/play-icon.svg';

const RightImageContainer = () => {
    return(
        <div className="content-container right-image-container">
            <div className="container">
                <div className="row">
                    <div className="ric-content-box d-flex flex-wrap align-items-center justify-content-between">
                    <div className="ric-text-box">
                        <div className="heading">
                            <h6>Meet Pete</h6>
                            <h3>Fetchable Storage®:
                                The Next Great Idea in Moving and Storage</h3>
                        </div>
                        <p>Pete Warhurst sold PODS in 2007 but, since then, he has never stopped thinking about ways to
                            improve the model. He believed so much in his ideas that he decided to start a new moving and
                            storage company and do the initial funding from his own pocket. Less than three years later, Red
                            Rover has opened 20 locations in 14 cities across the US and attracted almost $70 million in
                            investment including a financing round led by Oppenheimer and Co.
                        </p>
                        <p>
                            <strong>Curious to learn more about the idea that has enabled so much growth and investor
                                interest?</strong>
                        </p>
                    </div>
                    <div className="ric-media-box">
                        <div className="ric-media-inside position-relative">
                            <div className="ric-media">
                                <img src={RicImage} alt="" />
                            </div>
                            <button className="ric-play-icon" type="button" data-bs-toggle="modal" data-bs-target="#customModal">
                                <img src={PlayIcon} alt="" />
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightImageContainer;