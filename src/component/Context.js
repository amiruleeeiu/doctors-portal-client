import React, { createContext, useContext, useEffect, useState } from 'react';


export const UserContext=createContext();

export const UserContextProvider=(props)=>{
    const appointments=Appointments()
    return <UserContext.Provider value={appointments}>{props.children}</UserContext.Provider>
}

export const Appointments=()=>{
    const[appointments,setAppointments]=useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}user`)
            .then((response) => response.json())
            .then((json) =>{
                setAppointments(json)
                
            })
    },[])
    return appointments;

}

