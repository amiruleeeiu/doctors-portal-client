import React, { useContext } from 'react';
import { UserContext } from '../Context';
import './AppointmentNumber.css'

const AppointmentNumber = () => {

    const appointments=useContext(UserContext)
    console.log(appointments);

    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [day,mnth,date.getFullYear()].join("-")
      }
      
      let date=convert(new Date());
      console.log(date);

      let todayAppointments;
    if(appointments){
        todayAppointments=appointments.filter(appointment=>appointment.date===date);
        console.log(todayAppointments);
    }


    return (
        <div style={{display:'flex',width:'100%',marginLeft:'150px'}}>
            <div className="AppointmentNumber" style={{background:'rgb(9, 173, 9)'}}>
                <h1>13</h1>
                <h5 style={{marginLeft:'10px'}}>Pending Appointments</h5>
            </div>
            <div className="AppointmentNumber" style={{background:'orange'}}>
                <h1>{todayAppointments.length}</h1>
                <h5 style={{marginLeft:'10px'}}>Today's Appointments</h5>
            </div>
            <div className="AppointmentNumber" style={{background:'rgb(0, 153, 255)'}}>
                <h1>{appointments.length}</h1>
                <h5 style={{marginLeft:'10px'}}>Total Appointments</h5>
            </div>
            <div className="AppointmentNumber" style={{background:'rgb(184, 23, 23)'}}>
                <h1>{appointments.length}</h1>
                <h5 style={{marginLeft:'10px'}}>Total Patient number</h5>
            </div>
        </div>
    );
};

export default AppointmentNumber;