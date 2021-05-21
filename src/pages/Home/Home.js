import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import image from '../../images/Mask Group 1.png'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
 
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import './Home.css'
import Service from '../../component/Service/Service';

const Home = () => {

    const[createComment,setCreateComment]=useState([])

    const handleChangle=(e)=>{
        const newComment={...createComment};
        newComment[e.target.name]=e.target.value;
        setCreateComment(newComment)
    }

    const handleSubmit=()=>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}comment`, {
            method: 'POST',
            body: JSON.stringify(createComment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((res) => res.json())
            .then((data) =>{
                console.log(data);
                window.location.pathname='/'
            })
    }


    return (
        <div className="home">
            <div className="row home-header">
                <div className="col">
                    <h3>Your New smile Starts Here</h3>
                    <br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                    <Link to="/getappointment"><Button className="main-button" variant="info">Get Appointment <AiOutlineArrowRight/></Button></Link>
                </div>
                <div className="col">
                    <img src={image} alt=""/>
                </div>
            </div>

            <div className="row time-location-call">
                <div className="col" style={{display:'flex',margin:'10px',backgroundColor:'teal',color:'white',padding:'20px'}}>
                    <h1><AccessTimeIcon/></h1>
                    <div style={{marginLeft:'20px'}}>
                        <h4>Opening - Closing</h4>
                        <p>6AM - 11PM</p>
                    </div>
                    <br/>
                </div>
                <div className="col" style={{display:'flex',margin:'10px',backgroundColor:'rgb(233, 92, 27)',color:'white',padding:'20px'}}>
                    <h1><LocationOnIcon/></h1>
                    <div style={{marginLeft:'20px'}}>
                        <h4>Visit Our Location</h4>
                        <p>Kushtia Sadar,Kushtia,7000</p>
                    </div>
                </div>
                <div className="col" style={{display:'flex',margin:'10px',backgroundColor:' rgb(24, 27, 212)',color:'white',padding:'20px'}}>
                    <h1><CallIcon/></h1>
                    <div style={{marginLeft:'20px'}}>
                        <h4>Contact Us Now</h4>
                        <p>+880174662311</p>
                    </div>
                </div>
            </div>

            <div>
                <Service></Service>
            </div>

            <div className="home-footer">
                <h5>CONTACT US</h5>
                <h2>Always Contact with us</h2>
                <br/>
                <Form>
                    <InputGroup className="mb-3">
                    <FormControl
                        name="email"
                        placeholder="Email Address"
                        onBlur={handleChangle}
                    />
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <FormControl
                        name="subject"
                        placeholder="Subject"
                        onBlur={handleChangle}
                    />
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <FormControl
                        name="message"
                        as="textarea" 
                        rows={3}
                        placeholder="Message"
                        onBlur={handleChangle}
                    />
                    </InputGroup>
                    <input type="reset" value="Submit" onClick={handleSubmit}/>
                </Form>
            </div>
        </div>
    );
};

export default Home;