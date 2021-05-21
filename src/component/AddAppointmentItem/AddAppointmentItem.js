import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './AddAppointmentItem.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Dialog from '../Dialog/Dialog';

const AddAppointmentItem = (props) => {
    const{name,startTime,endTime,space}=props.data;
    const [modalShow, setModalShow] = useState(false);

    const convertTime=(time)=>{
        let timeString=time
        var hourEnd = timeString.indexOf(":");
        var H = +timeString.substr(0, hourEnd);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? "AM" : "PM";
        timeString = h + timeString.substr(hourEnd, 3) + ampm;
        console.log(timeString);
        return timeString;
    }

    return (
        <div className="appointment-item">
            <h4>{name}</h4>
            <h5>{convertTime(startTime)} - {convertTime(endTime)}</h5>
            <p>{space} spaces Available</p>
            <Button className="main-button" variant="info" onClick={() => setModalShow(true)}>Book Appointment <AiOutlineArrowRight/></Button>
            <Dialog name={name} time={convertTime(startTime)} date={props.date} show={modalShow} onHide={() => setModalShow(false)}></Dialog>
        </div>
    );
};

export default AddAppointmentItem;