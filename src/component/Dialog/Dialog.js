import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';

const Dialog = (props) => {
    const date=props.date;
    const[info,setinfo]=useState([]);

    const handleChangle=(e)=>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setinfo(newInfo)
    }

    //send appointment

    info.date=props.date;
    const handleSubmit=()=>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}user`, {
            method: 'POST',
            body: JSON.stringify(info),
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
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <br/>
            <h5 style={{margin:'auto',color:'rgb(66, 185, 179)'}}>{props.name}</h5>
            <br/>
            <div style={{width:'400px',margin:'auto'}}>
                <Form>
                    <Form.Group controlId="formGridState">
                        <Form.Control as="select" name="time" defaultValue="Choose" onBlur={handleChangle}>
                            <option>Select Time</option>
                            <option>{props.time}</option>
                        </Form.Control>
                    </Form.Group>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="name"
                            onBlur={handleChangle}
                            placeholder="Your Name"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="phone" 
                            onBlur={handleChangle}
                            placeholder="Phone Number"
                        />
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                        <FormControl
                            name="email"
                            onBlur={handleChangle}
                            placeholder="Email"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="address"
                            onBlur={handleChangle}
                            placeholder="Address"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="date"
                            placeholder="dd/mm/yy"
                            value={props.date}
                            disabled
                        />
                    </InputGroup>
                    <input style={{width:'100px',height:'35px',background:'rgb(10, 165, 157)',color:'white'}} variant="success" type="reset" onClick={handleSubmit} value="Send"/>
                    <Button style={{width:'100px',marginLeft:'20px'}} variant="danger" onClick={props.onHide}>Cancel</Button>
                </Form>
                <br/>
            </div>
            
        </Modal>
    );
};

export default Dialog;