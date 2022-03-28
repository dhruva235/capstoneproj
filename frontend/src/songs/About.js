import React,{useState,useContext} from 'react';
import Context from '../Context/userContext';
import "../App.css"
import { useHistory } from "react-router-dom";
import Example from "../Navbar/Example";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
const About = (props) =>{ 
  const [context,setContext] =useContext(Context);
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
     <h3>The username is:   <b>{context.name}</b></h3>
  <h1>About This App</h1>
  <p>This is the application is to add the songs.</p>
  <p>Please login or register the to do Song management of this app.
    if u want only songs the click on songs menu
  </p>
</div>

        <div className="homepage">
            <h2>Hello User please do login or register to use the app </h2>
            
            <div className="button" onClick={()=>history("/login")}>Login</div>
    <div>or</div>
    <div className="button" onClick={()=>history("/register")} >Register</div>
    
        </div>
    


     </>
   )}
  ;export default About;