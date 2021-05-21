import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';

const CreateAppointmentDialog = (props) => {
    const [createdAppointment,setCreatedAppointment]=useState([]);
    const [startDate, setStartDate] = useState();

    const handleChangle=(e)=>{
        const newAppointment={...createdAppointment};
        newAppointment[e.target.name]=e.target.value;
        setCreatedAppointment(newAppointment);
    }

    const handleSubmit=()=>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}appointment`, {
            method: 'POST',
            body: JSON.stringify(createdAppointment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((res) => res.json())
            .then((data) =>{
                console.log(data);
                window.location.pathname='/getappointment'
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
            <h5 style={{margin:'auto',color:'rgb(66, 185, 179)'}}>Create Appointment By Doctor</h5>
            <br/>
            <div style={{width:'400px',margin:'auto'}}>
                <Form>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="name"
                            placeholder="Appointment Name"
                            onBlur={handleChangle}
                        />
                    </InputGroup>
                    <label> Start Time</label>
                    <InputGroup className="mb-3">
                        
                        <FormControl
                            name="startTime"
                            placeholder="Start Time"
                            type="time"
                            
                            onBlur={handleChangle}
                        />
                    </InputGroup>
                    <label> End Time</label>
                    <InputGroup className="mb-3">
                        <FormControl
                            name="endTime"
                            placeholder="End Time"
                            type="time"
                            onBlur={handleChangle}
                        />
                    </InputGroup>
                    {/* <ReactDatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    /> */}
                    <InputGroup className="mb-3">
                        <FormControl
                            name="space"
                            placeholder="Availabe Appointment"
                            onBlur={handleChangle}
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

export default CreateAppointmentDialog;