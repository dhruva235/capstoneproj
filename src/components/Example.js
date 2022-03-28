import React,{useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import {useNavigate} from 'react-router-dom'
  import axios from 'axios';
 
 const Example=(props)=> {

  const [ user, setUser] = useState({
       
    email:"",
    password:"",
   
})
  let history = useNavigate()
  const login = (props) => {
    axios.post("http://localhost:9002/login", user)
    .then(res => {
        alert(res.data.message)
        props.setLoginUser(res.data.user)
        history("/")
      
       
    })
}
    return (
      <div>
        <Navbar color="info" light expand="md">
          <NavbarBrand onClick={()=>history("/About")}><h6>Songlibray</h6></NavbarBrand>
         
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={()=>history("/About")}><h6>About</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history("/Create")} ><h6>Create song</h6></NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={()=>history("/login")} ><h6>Songs Management</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history("/playlist")} ><h6>Playlist</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history("/register")}><h6>Signup</h6></NavLink>

              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history("/login")} ><h6>Signin</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history("/profile")} ><h6>Profile</h6></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={()=>history("/login")} ><h6>Logout</h6></NavLink>
              </NavItem>


            </Nav>
        
        </Navbar>
      </div>
    );
  }
export default Example;