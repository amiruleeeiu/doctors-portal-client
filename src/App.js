import React from 'react';
import AddAppointment from './pages/AddAppointment/AddAppointment';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DoctorAppointment from './pages/DoctorAppointment/DoctorAppointment';
import Header from './component/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import { UserContextProvider } from './component/Context';
import CreateAppointment from './pages/CreateAppointment/CreateAppointment';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/getappointment">
            <AddAppointment></AddAppointment>
          </Route>
          <Route path="/doctor/appointment">
            <DoctorAppointment></DoctorAppointment>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;