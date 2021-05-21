import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UserContext } from '../Context';
import { Button } from '@material-ui/core';
import Loading from '../Loading/Loading'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function BasicTable() {
  const classes = useStyles();

    const appointments=useContext(UserContext)

    if(appointments.length===0){
      return <Loading></Loading>
    }

    console.log(appointments);
    // let i=2;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Sr. No</TableCell>
            <TableCell >Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Prescription</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { appointments &&
          appointments.map((appointment,i) => (
            <TableRow key={appointment._id}>
            <TableCell >{i+1}</TableCell>
            <TableCell component="th" scope="row">
                {appointment.name}
              </TableCell>
              <TableCell >{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.phone}</TableCell>
              <TableCell><Button variant="contained"  color="primary">Not Added</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
