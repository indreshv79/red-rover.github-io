import React from 'react';
import './Compair.css';
import accordationImage from '../../Assets/accordion-icon-1.svg';
import accordationImage2 from '../../Assets/accordion-icon-2.svg';
import accordationImage3 from '../../Assets/accordion-icon-3.svg';
import accordationImage4 from '../../Assets/accordion-icon-4.svg';
import accordationImage5 from '../../Assets/accordion-icon-5.svg';
import accordationImage6 from '../../Assets/accordion-icon-6.svg'

const Compair = () =>{
    return(
        <div className="content-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                    <div className="how-work-left">
                        <div className="heading">
                            <h6>How it Works</h6>
                            <h3>How Does Red Rover Compare?</h3>
                        </div>
                        <p> Put Red Rover up against any other method of moving and storage, and you'll see why
                            we feel we've created the "ultimate breed" of moving and storage services. </p>
                        <p> Regardless of if you're looking for the lowest cost, the most convenient,
                            or help handing a complicated move, you'll find that Red Rover checks all
                            of the boxes across the moving and storage industry. </p>
                    </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="how-work-right">
                            <div className="accordion-list accordion" id="accordionExample">
                                <div className="accordion-item accordion-item">
                                    <div className="accordion-head accordion-header" id="headingOne">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne">
                                        <div className="accordion-head-icon"> 
                                            <img src={accordationImage} alt="accordion icon 1" />
                                        </div>
                                        <h5> Red Rover vs Portable Storage </h5>
                                    </div>
                                    </div>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-body-content">
                                        <p> If you’re out of space in your home and need somewhere to stash away some
                                            belongings for a while, then a self storage unit makes sense.
                                            For moving and storage uses, you’ll be banging your head against the storage unit
                                            door after your 10th trip back and forth! </p>
                                        <ul className="bullet-list">
                                            <li className="bullet-item">
                                                Bring your storage unit home to load up and unload. While your container is in
                                                storage, you can request access anytime at one of our Storage Centers or Self
                                                Service Lots, for FREE!
                                            </li>
                                            <li className="bullet-item">
                                                Skip the wear and tear on your vehicle of loading it up with your belongings and
                                                making countless trips to and from your self storage unit. We let you drive our
                                                truck for FREE for
                                                14 hours on the first and last day of your rental.
                                            </li>
                                            <li className="bullet-item">
                                                Load and unload your storage unit ONCE instead of making multiple visits to move
                                                things in and out of the storage unit.
                                            </li>
                                        </ul>
                                        <p>
                                            <small>
                                                All Red Rover containers are stored in our brand-new Storage Centers, so you won’t
                                                have to worry about leaky roofs, insects or rodents, or any other occurrences that
                                                self-storage brings to the table.
                                            </small>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item accordion-item">
                                    <div className="accordion-head accordion-header" id="headingTwo">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo">
                                        <div className="accordion-head-icon"> 
                                        <img src={accordationImage2} alt="accordion icon 2" />
                                        </div>
                                        <h5> Red Rover vs Full-Service Movers </h5>
                                    </div>
                                    </div>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-body-content">
                                        <p> If you’re out of space in your home and need somewhere to stash away some
                                            belongings for a while, then a self storage unit makes sense.
                                            For moving and storage uses, you’ll be banging your head against the storage unit
                                            door after your 10th trip back and forth! </p>
                                        <ul className="bullet-list">
                                            <li className="bullet-item">
                                                Bring your storage unit home to load up and unload. While your container is in
                                                storage, you can request access anytime at one of our Storage Centers or Self
                                                Service Lots, for FREE!
                                            </li>
                                            <li className="bullet-item">
                                                Skip the wear and tear on your vehicle of loading it up with your belongings and
                                                making countless trips to and from your self storage unit. We let you drive our
                                                truck for FREE for
                                                14 hours on the first and last day of your rental.
                                            </li>
                                            <li className="bullet-item">
                                                Load and unload your storage unit ONCE instead of making multiple visits to move
                                                things in and out of the storage unit.
                                            </li>
                                        </ul>
                                        <p>
                                            <small>
                                                All Red Rover containers are stored in our brand-new Storage Centers, so you won’t
                                                have to worry about leaky roofs, insects or rodents, or any other occurrences that
                                                self-storage brings to the table.
                                            </small>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item accordion-item">
                                    <div className="accordion-head accordion-header" id="headingThree">
                                    <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        <div className="accordion-head-icon"> 
                                        <img src={accordationImage3}alt="accordion icon 3" />
                                        </div>
                                        <h5> Red Rover vs Self Storage </h5>
                                    </div>
                                    </div>
                                    <div id="collapseThree" className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-body-content">
                                        <p> If you’re out of space in your home and need somewhere to stash away some
                                            belongings for a while, then a self storage unit makes sense.
                                            For moving and storage uses, you’ll be banging your head against the storage unit
                                            door after your 10th trip back and forth! </p>
                                        <ul className="bullet-list">
                                            <li className="bullet-item">
                                                Bring your storage unit home to load up and unload. While your container is in
                                                storage, you can request access anytime at one of our Storage Centers or Self
                                                Service Lots, for FREE!
                                            </li>
                                            <li className="bullet-item">
                                                Skip the wear and tear on your vehicle of loading it up with your belongings and
                                                making countless trips to and from your self storage unit. We let you drive our
                                                truck for FREE for
                                                14 hours on the first and last day of your rental.
                                            </li>
                                            <li className="bullet-item">
                                                Load and unload your storage unit ONCE instead of making multiple visits to move
                                                things in and out of the storage unit.
                                            </li>
                                        </ul>
                                        <p>
                                            <small>
                                                All Red Rover containers are stored in our brand-new Storage Centers, so you won’t
                                                have to worry about leaky roofs, insects or rodents, or any other occurrences that
                                                self-storage brings to the table.
                                            </small>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item accordion-item">
                                    <div className="accordion-head accordion-header" id="headingFour">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour">
                                        <div className="accordion-head-icon"> 
                                        <img src={accordationImage4} alt="accordion icon 4" />
                                        </div>
                                        <h5> Red Rover vs Rental Truck </h5>
                                    </div>
                                    </div>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-body-content">
                                        <p> If you’re out of space in your home and need somewhere to stash away some
                                            belongings for a while, then a self storage unit makes sense.
                                            For moving and storage uses, you’ll be banging your head against the storage unit
                                            door after your 10th trip back and forth! </p>
                                        <ul className="bullet-list">
                                            <li className="bullet-item">
                                                Bring your storage unit home to load up and unload. While your container is in
                                                storage, you can request access anytime at one of our Storage Centers or Self
                                                Service Lots, for FREE!
                                            </li>
                                            <li className="bullet-item">
                                                Skip the wear and tear on your vehicle of loading it up with your belongings and
                                                making countless trips to and from your self storage unit. We let you drive our
                                                truck for FREE for
                                                14 hours on the first and last day of your rental.
                                            </li>
                                            <li className="bullet-item">
                                                Load and unload your storage unit ONCE instead of making multiple visits to move
                                                things in and out of the storage unit.
                                            </li>
                                        </ul>
                                        <p>
                                            <small>
                                                All Red Rover containers are stored in our brand-new Storage Centers, so you won’t
                                                have to worry about leaky roofs, insects or rodents, or any other occurrences that
                                                self-storage brings to the table.
                                            </small>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item accordion-item">
                                    <div className="accordion-head accordion-header" id="headingFive">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive">
                                        <div className="accordion-head-icon"> 
                                        <img src={accordationImage5}
                                                alt="accordion icon 5" />
                                        </div>
                                        <h5> Red Rover vs Moving Trailers </h5>
                                    </div>
                                    </div>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-body-content">
                                        <p> If you’re out of space in your home and need somewhere to stash away some
                                            belongings for a while, then a self storage unit makes sense.
                                            For moving and storage uses, you’ll be banging your head against the storage unit
                                            door after your 10th trip back and forth! </p>
                                        <ul className="bullet-list">
                                            <li className="bullet-item">
                                                Bring your storage unit home to load up and unload. While your container is in
                                                storage, you can request access anytime at one of our Storage Centers or Self
                                                Service Lots, for FREE!
                                            </li>
                                            <li className="bullet-item">
                                                Skip the wear and tear on your vehicle of loading it up with your belongings and
                                                making countless trips to and from your self storage unit. We let you drive our
                                                truck for FREE for
                                                14 hours on the first and last day of your rental.
                                            </li>
                                            <li className="bullet-item">
                                                Load and unload your storage unit ONCE instead of making multiple visits to move
                                                things in and out of the storage unit.
                                            </li>
                                        </ul>
                                        <p>
                                            <small>
                                                All Red Rover containers are stored in our brand-new Storage Centers, so you won’t
                                                have to worry about leaky roofs, insects or rodents, or any other occurrences that
                                                self-storage brings to the table.
                                            </small>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item accordion-item">
                                    <div className="accordion-head accordion-header" id="headingSix">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix">
                                        <div className="accordion-head-icon"> <img src={accordationImage6}
                                                alt="accordion icon 6" />
                                        </div>
                                        <h5> Red Rover vs DIY Moving </h5>
                                    </div>
                                    </div>
                                    <div id="collapseSix" className=" accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body accordion-body-content">
                                        <p> If you’re out of space in your home and need somewhere to stash away some
                                            belongings for a while, then a self storage unit makes sense.
                                            For moving and storage uses, you’ll be banging your head against the storage unit
                                            door after your 10th trip back and forth! </p>
                                        <ul className="bullet-list">
                                            <li className="bullet-item">
                                                Bring your storage unit home to load up and unload. While your container is in
                                                storage, you can request access anytime at one of our Storage Centers or Self
                                                Service Lots, for FREE!
                                            </li>
                                            <li className="bullet-item">
                                                Skip the wear and tear on your vehicle of loading it up with your belongings and
                                                making countless trips to and from your self storage unit. We let you drive our
                                                truck for FREE for
                                                14 hours on the first and last day of your rental.
                                            </li>
                                            <li className="bullet-item">
                                                Load and unload your storage unit ONCE instead of making multiple visits to move
                                                things in and out of the storage unit.
                                            </li>
                                        </ul>
                                        <p>
                                            <small>
                                                All Red Rover containers are stored in our brand-new Storage Centers, so you won’t
                                                have to worry about leaky roofs, insects or rodents, or any other occurrences that
                                                self-storage brings to the table.
                                            </small>
                                        </p>
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

export default Compair;