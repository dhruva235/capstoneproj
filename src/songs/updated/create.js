import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useNavigate } from 'react-router';
import Example  from "../../components/Example"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Songlength, setSonglength] = useState('');
    const [Singer, setSinger] = useState('');
    console.log(firstName)
    console.log(lastName)
    const sendDataToAPI = () => {
        axios.post(`https://623571e2163bf7c4745b1b6e.mockapi.io/crud`, {
          firstName,
          lastName,
          Songlength,
          Singer

        })}

        const diffToast =() =>{
            toast.success('🦄 Song Added Sucessfully!', {
                position: "top-left",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
  return(
      
    <div>  
        <Example/>      
      <Form>
        <FormGroup>
        
        
        
        <Label for="exampleEmail" sm={1}>MOvie Name</Label>
          <input name="fname" 
         onChange={(e) => setFirstName(e.target.value)} 
          placeholder='Movie Name' />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail" sm={1}>Song Name</Label>
          <input 
          name="lname" 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder='Song Name' 
         
          />
          </FormGroup>
          
        <FormGroup>
          <Label for="exampleEmail" sm={1} >Songlength</Label>
          <input name="fname" 
         onChange={(e) => setSonglength(e.target.value)} 
          placeholder='Songlength' />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" sm={1} >Singer</Label>
          <input name="fname" 
         onChange={(e) => setSinger(e.target.value)} 
          placeholder='Singer' />
        </FormGroup>

        <FormGroup>
        <Link to = "/playlist">
        <Button sm={2} type='submit' onClick={sendDataToAPI} 
        
        >Submit</Button>
        
        </Link>
        </FormGroup>
      </Form>
      </div> 

  )
  
}
