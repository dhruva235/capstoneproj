import React,{useState} from "react";
import "./App.css";
import Home from "./components/home"
import Login from "./components/login";
import Register from "./components/register"
import Example from "./components/Example"
import Update from "./songs/updated/update"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./songs/Home";
import About from "./songs/About"
import Main from "./songs/Main"
import Read from "./songs/updated/read"
import Create from "./songs/updated/create"
import Profile from "./songs/profile";
import Context from './Context/userContext';
function App() {
  const [ user, setLoginUser] = useState({}) 
  return (
    <>
 
<Context.Provider value={[user,setLoginUser]}>
<Router>

  <Routes>
  {/* <Route path="/" element={(!(user && user._id))?<Login setLoginUser={setLoginUser}/>:null}/> */}
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
    
  </Routes>
</Router>
</Context.Provider>
   
    
   
</>
  );
}

export default App;