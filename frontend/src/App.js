import React,{useState} from "react";
import "./App.css";

import Login from "./components/Authentication/login";
import Register from "./components/Authentication/register"
import Example from "./Navbar/Example"
import Update from "./components/APIFETCH/update"
import Songs from "./songs/songs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserleaveConfirmation from "./components/Authentication/UserleaveConfirmation"
import About from "./songs/About"
import Main from "./playlist/PlaylistDisply"
import Read from "./components/APIFETCH/read"
import Create from "./components/APIFETCH/create"
import Profile from "./songs/profile";
import Context from './Context/userContext';
import Search from './Navbar/Search';
function App() {
  const[confirmOpen,setConfirmOpen] =useState(true)
  const [ user, setLoginUser] = useState({}) 
  return (
    <>
 
<Context.Provider value={[user,setLoginUser]}>
<Router

>

  <Routes>
  {/* <Route path="/" element={(!(user && user._id))?<Login setLoginUser={setLoginUser}/>:null}/> */}
  <Route path="/" element={<About/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/Create"  element={user && user._id?<Create/>:<Login setLoginUser={setLoginUser}/>} />
 <Route path="/Home" element={<Read/>} />
  <Route path="/playlist" element={<Main/>} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/update/:id" element={<Update/>} />
  <Route path="/a" element={user && user._id ? <Main setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
  } />
  <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
  <Route path="/register" element={<Register/>} />
  <Route path="/search" element={<Search/>} /> 
  <Route path="/songs" element={<Songs/>} /> 
  </Routes>
</Router>
</Context.Provider>
   
    
   
</>
  );
}

export default App;