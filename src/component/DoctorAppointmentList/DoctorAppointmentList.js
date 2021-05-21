import { Button } from 'react-bootstrap';
import React from 'react';

const DoctorAppointmentList = (props) => {
console.log(props);
const{name,time}=props.appointment;

    return (
        <tr>
            <td>{name}</td>
            <td>{time}</td>
            <Button variant="info">Not Visited</Button>
        </tr>
    );
};

export default DoctorAppointmentList;