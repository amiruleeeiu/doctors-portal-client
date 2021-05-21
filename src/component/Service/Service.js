import React from 'react';
import './Service.css'
import toothimg1 from '../../images/001-dental.png'
import toothimg2 from '../../images/tooth (1).png'
import toothimg3 from '../../images/tooth.png'


const Service = () => {
    return (
        <div className="service-container">
                <div>
                    <h5>OUR SERVICES</h5>
                    <h2>Survices We Provide</h2>
                </div>
                <br/>
                <div className="row service_items_list">
                    <div className="col service-item" >
                        <img src={toothimg1} alt=""/>
                        <h6>Fluoride Treatment</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    </div>
                    <div className="col service-item" >
                        <img src={toothimg2} alt=""/>
                        <h6>Cavity Filling</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    </div>
                    <div className="col service-item">
                        <img src={toothimg3} alt=""/>
                        <h6>Teeth Whitening</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                    </div>
                </div>
            </div>
    );
};

export default Service;