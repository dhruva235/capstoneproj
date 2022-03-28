import React , { useState, userContext, useContext } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import Example  from "../../Navbar/Example";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Context from '../../Context/userContext';

function Login(props) {
    const [context, setContext] = useContext(Context);
    let history = useNavigate()
    const [ user, setUser] = useState({
       
        email:"",
        password:"",
       
    })


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            console.log(res);
            toast("Hi  welcome and enjoy the songs" , {
                type: "success"
              });
            alert(res.data.message)
            props.setLoginUser(res.data.user.name)
            setContext(res.data.user)

            history("/home");
           
        }).catch(err => {
            console.log("Error caught");
            alert("Not registered")
            history("/register");

        })
    }
  return (
      <>
      <Example/>
   
    <div className="login">
        
        {console.log("User", user)}
    <h1>Login </h1>
    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
    <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
    <div className="button" onClick={login}>Login</div>
    <div>or</div>
    <div className="button" onClick={()=>history("/register")} >Register</div>
</div>
</>
  );
}

export default Login;