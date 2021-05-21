import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateAppointmentDialog from '../Dialog/CreateAppointmentDialog';
import './Sidebar.css'

const Sidebar = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="sidebar_items">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/getappointment">Get Appointment</a></li>
                <li><Link onClick={() => setModalShow(true)}>Create Appointment</Link></li>
                <li><a href="/doctor/appointment">Doctor's Appointment</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <CreateAppointmentDialog show={modalShow} onHide={() => setModalShow(false)}></CreateAppointmentDialog>
            </ul>
        </div>
    );
};

export default Sidebar;