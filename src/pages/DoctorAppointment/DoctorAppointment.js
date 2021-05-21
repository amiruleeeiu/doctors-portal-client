import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import DoctorAppointmentList from '../../component/DoctorAppointmentList/DoctorAppointmentList';
import DoctorAppointmentTable from '../../component/DoctorAppointmentTable/DoctorAppointmentTable';
import Loading from '../../component/Loading/Loading';

const DoctorAppointment = () => {
    const [value, onChange] = useState(new Date());
    const[appointments,setAppointments]=useState([]);
    // const[date,setDate]=useState()

    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [day,mnth,date.getFullYear()].join("-")
      }
      
      let date=convert(value);

     console.log(appointments);
    console.log(date);
    
    const exastingAppointment=appointments.filter(ap=>ap.date===date);
    console.log(exastingAppointment);
    

      // get data

      
   

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
        <div style={{margin:'30px 160px'}}>
            <div className="d-flex justify-content-between">
                <h4>Doctors Appointment</h4>
                
                <h4>{date}</h4>
            </div>
            <br/>
            <div className="d-flex justify-content-around">
                <div>
                    <DatePicker
                        selected={value}
                        onChange={date => onChange(date)}
                        openToDate={value}
                        inline
                        />
                </div>
                
                <div>
                    <DoctorAppointmentTable date={date}></DoctorAppointmentTable>
                </div>
                {/* <table style={{width:'50%',marginLeft:'80px'}}>
                    <tr>
                        <th>Name</th>
                        <th>Schedule</th> 
                        <th>Action</th>
                    </tr>
                        {
                            exastingAppointment ?
                            exastingAppointment.map(ap=><DoctorAppointmentList key={ap._id} appointment={ap}></DoctorAppointmentList>)
                            : <h1>There is no appointment in selected date</h1>
                        }
                    </table> */}
            </div>
        </div>
    );
};

export default DoctorAppointment;