

import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";
import Example  from "./Example";
import { Container, Row, Col } from "reactstrap";

import Main from "../songs/Main";

function Home(props) {
      return (
            <>
            
            <Example/>
            
                <div className="button" onClick={() => props.setLoginUser({})} >Logout</div>
            <Main/>
                
            </>
        )
    }
    


export default Home;