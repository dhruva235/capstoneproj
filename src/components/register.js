import React, { useState }  from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import Example  from "./Example";
function Register() {

    let history = useNavigate()
    const [ user, setUser] = useState({
        name: "",
        lname:'',
        email:"",
        password:"",
        reEnterPassword: "",
        location:"",
        phno:""

    })


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { name, lname, location,
        phno,email, password, reEnterPassword } = user
        if( name && email && password &&  location &&  phno && (password === reEnterPassword)){
            
            axios.post("http://localhost:9002/register", user)
            .then(res=>
                
              
                alert(res.data.message))
            
        } else {
            alert("invlid input")
        }
        
    }
  return (
      <>
      <Example/>
    <div className="register">
   {console.log("User", user)}
    <h1>Register</h1>
    <input type="text" name="name" value={user.name} placeholder=" Please Enter Your First Name" onChange={ handleChange }></input>
    
    <input type="text" name="location" value={user.location} placeholder=" Please Enter Your location" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Please Enter Your Email" onChange={ handleChange }></input>
            <input type="text" name="phno" value={user.phno} placeholder="Please Enter phone num" onChange={ handleChange }></input>
            
            <input type="password" name="password" value={user.password} placeholder=" Enter Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={ handleChange }></input>
    <div className="button" onClick={ register}>Register</div>
    <div>or</div>
    <div className="button"onClick={()=>history("/login")}>Login</div>
</div>
</>
  );
}

export default Register;