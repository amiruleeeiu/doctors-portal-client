import React, { useState } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const CreateAppointment = () => {

    const [createdAppointment,setCreatedAppointment]=useState([]);

    const handleChangle=(e)=>{
        const newAppointment={...createdAppointment};
        newAppointment[e.target.name]=e.target.value;
        setCreatedAppointment(newAppointment);
    }

    const handleSubmit=()=>{
        console.log("submit successfully");
    }

    return (
        <Form>
            <InputGroup className="mb-3">
                <FormControl
                    name="name"
                    placeholder="Appointment Name"
                    onBlur={handleChangle}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    name="startTime"
                    placeholder="Start Time"
                    onBlur={handleChangle}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    name="endTime"
                    placeholder="End Time"
                    onBlur={handleChangle}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    name="space"
                    placeholder="Availabe Appointment"
                    onBlur={handleChangle}
                />
            </InputGroup>
            <input style={{width:'100px',height:'35px',background:'rgb(10, 165, 157)',color:'white'}} variant="success" type="reset" onClick={handleSubmit} value="Send"/>
        </Form>
    );
};

export default CreateAppointment;