import React,{useState,useContext} from 'react';
import "../App.css"
import { useHistory } from "react-router-dom";
import Example from "../Navbar/Example";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import Context from '../Context/userContext';
const Profile = (props) =>{ 
      const [context,setContext] =useContext(Context);
      console.log("The context data is:",context)
      const [ user, setUser] = useState({
       
            email:"",
            password:"",
           
        })
      let history = useNavigate()
  const login = () => {
    axios.post("http://localhost:9002/login", user)
    .then(res => {
        alert(res.data.message)
        props.setLoginUser(res.data.user)
        history("/")
      
       
    })}
     return(  
     <>  
     <Example/>

     <div class="about-section">
  <h1>Profile page</h1>
  
</div>
<div className="homepage">
<h3>The username is:   <b>{context.name}</b></h3>
  <h3>The user email is: <b>  {context.email}</b></h3>
  <h3>The user location is: <b>  {context.location}</b></h3>
  <h3>The user phone number is: <b>  {context.phno}</b></h3>
  <button className="homepagebtn1 " onClick={()=>history("/Home1")}>logout</button>
  </div>
       
    


     </>
   )}
  ;export default Profile;