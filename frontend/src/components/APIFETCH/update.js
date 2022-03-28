
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Example from '../../Navbar/Example'
import {useParams} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function Update() {
    window.onbeforeunload=(e)=>{
        console.log("Unloaded");
    }
  
    let history = useNavigate();
    console.log("Thsi is href",window.location.href.id);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Songlength, setSonglength] = useState('');
    const [Singer, setSinger] = useState('');
    const [ID, setID] = useState(null);
    const {id}=useParams();
    
    

    const sendDataToAPI = (e) => {
        if(isValidInputs())
        {axios.put(`https://623571e2163bf7c4745b1b6e.mockapi.io/crud/${ID}`, {
            firstName,
            lastName,
            Songlength,
            Singer
        }).then(() => {
            toast("Hi  welcome and enjoy the songs" , {
                type: "success"
              });
            history('/Home');
        })}
        else{
            alert("Please enter all the data");
            e.preventDefault();

        }
    }

const isValidInputs=()=>{
   return [firstName,lastName,Songlength,Singer].every((ele)=>ele?true:false)?true:false;
}
 useEffect(() => {

        // setFirstName(localStorage.getItem('firstName'));
        // setLastName(localStorage.getItem('lastName'));
        // setID(localStorage.getItem('ID'))
        
        axios.get(`https://623571e2163bf7c4745b1b6e.mockapi.io/crud/${id}`).then((res)=>{
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setSonglength(res.data.Songlength);
                setSinger(res.data.Singer)
                setID(res.data.id);
        })
    }, [])

    return (
        <div>
            <Example/>
            <Form>
                <Form.Field>
                    <label>Movie Name</label>
                    <input name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name'
                        required />
                </Form.Field>
                <Form.Field>
                    <label>Song Name</label>
                    <input
                        name="lname"
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label>Song length</label>
                    <input
                        name="lname"
                        value={Songlength}
                        placeholder='Songlength'
                        onChange={(e) => setSonglength(e.target.value)}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label>Singer</label>
                    <input
                        name="lname"
                        value={Singer}
                        placeholder='Singer'
                        onChange={(e) => setSinger(e.target.value)}
                        required
                    />
                </Form.Field>
                <Button type='submit'  color='primary' onClick={sendDataToAPI} >Update</Button>
            </Form>
        </div>
    )
}