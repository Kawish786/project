import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {callData} from '../../pages/Action'

function Home() {

    const state  = useSelector((data)=>data)//same for all
    const nav=useNavigate()
    const dispatch=useDispatch()
    const handleadd=()=>{
        nav('/')
    }
    useEffect(()=>{
      if(state.UserReducer.user.length===0)
      dispatch(callData)
    },[])
  return (
    
        
          <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead  >
                <TableRow >
                  <TableCell style={{color:"blue"}}>#</TableCell>
                  <TableCell align="right" style={{color:"blue"}}>Username</TableCell>
                  <TableCell align="right" style={{color:"blue"}}>Email&nbsp;</TableCell>
                  <TableCell align="right" style={{color:"blue"}}>id&nbsp;</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {state.UserReducer.user.map((i,index) => (
                  <TableRow
                    key={index}
                  >
                    <TableCell component="th" scope="row">
                      {index+1}
                    </TableCell>
                    <TableCell align="right">{i.name}</TableCell>
                    <TableCell align="right">{i.email}</TableCell>
                    <TableCell align="right">{i.id}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button onClick={handleadd}>ADD DETAILS</button>
          </div>
        );
      }

export default Home