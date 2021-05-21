import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateAppointmentDialog from '../Dialog/CreateAppointmentDialog';
import Sidebar from '../Sidebar/Sidebar';
import './Header.css'
import DehazeIcon from '@material-ui/icons/Dehaze';

const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const[sidebarShow,setsidebvarShow]=useState(false)


    const handleSidebar=()=>{
        if(sidebarShow){
            setsidebvarShow(false)
        }else{
            setsidebvarShow(true)
        }
    }

    return (
        <div>
            <div className="header">
                <div>
                    <button onClick={handleSidebar} className="sidebar_button">
                        <DehazeIcon style={{ fontSize:30}}/>
                    </button>
                </div>
                <div>
                    <nav className="navigation">
                        <Link to="/">Home</Link>
                        <a href="/getappointment">Get Appointment</a>
                        <Link onClick={() => setModalShow(true)}>Create Appointment</Link>
                        <a href="/doctor/appointment">Doctor's Appointment</a>
                        <a href="/dashboard">Dashboard</a>
                        <CreateAppointmentDialog show={modalShow} onHide={() => setModalShow(false)}></CreateAppointmentDialog>
                    </nav>
                </div>
            </div>
            <div>
                {
                    sidebarShow &&
                    <Sidebar></Sidebar>
                }
            </div>
        </div>
    );
};

export default Header;