
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import {useParams} from 'react-router-dom';
export default function Update() {
    let history = useNavigate();
    console.log("Thsi is href",window.location.href.id);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Songlength, setSonglength] = useState('');
    const [Singer, setSinger] = useState('');
    const [ID, setID] = useState(null);
    const {id}=useParams();
    const sendDataToAPI = () => {
        axios.put(`https://623571e2163bf7c4745b1b6e.mockapi.io/crud/${ID}`, {
            firstName,
            lastName,
            Songlength,
            Singer
        }).then(() => {
            history.push('/Home1')
        })
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
            <Form>
                <Form.Field>
                    <label>Movie Name</label>
                    <input name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Song Name</label>
                    <input
                        name="lname"
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Song length</label>
                    <input
                        name="lname"
                        value={Songlength}
                        placeholder='Songlength'
                        onChange={(e) => setSonglength(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Singer</label>
                    <input
                        name="lname"
                        value={Singer}
                        placeholder='Singer'
                        onChange={(e) => setSinger(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}