import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import AddAppointmentItem from '../../component/AddAppointmentItem/AddAppointmentItem';
import './AddAppointment.css'
import image from '../../images/Mask Group 1.png'
import Loading from '../../component/Loading/Loading';

const AddAppointment = () => {
  const [value, onChange] = useState(new Date());
  const[appointments,setAppointments]=useState([]);

  console.log(process.env.REACT_APP_BACKEND_URL);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day,mnth,date.getFullYear()].join("-")
  }
  const date=convert(value);

  useEffect(()=>{
      fetch(`${process.env.REACT_APP_BACKEND_URL}appointment`)
          .then((response) => response.json())
          .then((json) =>{
              setAppointments(json)
              
          })
  },[])
  
    if(appointments.length===0){
      return <Loading></Loading>
    }
  return (
    <div className="get-appointment">
      <div style={{margin:'50px 100px'}}>
        <div className="row" style={{marginBottom:'100px'}}>
          <div className="col" style={{padding:'10px',textAlign:'center'}}>
            <DatePicker
                  selected={value}
                  onChange={date => onChange(date)}
                  openToDate={value}
                  inline
                />
          </div>
          <div className="col">
            <img src={image} alt=""/>
          </div>
        </div>
        
        <div className="appointment-section">
          <h2 style={{textAlign:'center',color:'rgb(66, 185, 179)'}}>Available Appointments on {date}</h2>
          {
            appointments &&
            appointments.map(data=><AddAppointmentItem date={date} key={data.id} data={data}></AddAppointmentItem>)
          }
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;