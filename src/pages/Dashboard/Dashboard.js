import React, { useContext } from 'react';
import AppointmentNumber from '../../component/AppointmentNumber/AppointmentNumber';
import AppointmentTable from '../../component/AppointmentTable/AppointmentTable'
import { UserContext } from '../../component/Context';
import './Dashboard.css'

const Dashboard = () => {

    const appointments=useContext(UserContext)
    console.log(appointments);

    return (
        <div>
            <div>
                <div>
                    <AppointmentNumber></AppointmentNumber>
                </div>
                
                <div style={{margin:'50px 150px',textAlign:'center'}}>
                    <h2 className="recent_appointment_title">Recent Appointments</h2>
                    <AppointmentTable></AppointmentTable>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;