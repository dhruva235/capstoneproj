
import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import axios from 'axios';
import { Card,CardFooter,CardHeader, Container,Button, CardTitle,CardBody, FormGroup, CardText, Row, Col } from 'reactstrap';
import Cart from "../components/APIFETCH/cart"
import Playlist from './Playlist';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import Example  from "../Navbar/Example";


function Main() {
  const [apiData, setApiData] = useState([]);
  const [selectedPlaylist,setSelectedPlaylist] = useState({});
   const [cartData,setCartData] = useState([]);
   const cartItemHandler=(data)=>{
    setCartData([...cartData,data]);
}

    const addInCart = item => {
    const isAlreadyAdded = cartData.findIndex(function(array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast(" song is already added in playlist", {
        type: "error"
      });
      return;
    }

    setCartData([...cartData,item]);
  };

    const emptyCart = () => {
        setCartData([]);
    
        toast("PLaylist is complety emplty now", {
          type: "success"
        });
      };

      const removeItem = item => {
        setCartData(cartData.filter(singleItem => singleItem.id !== item.id));
      };
 
    useEffect(() => {
        axios.get(`https://623571e2163bf7c4745b1b6e.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])
    
    useEffect(() => {
      axios.get(`https://623571e2163bf7c4745b1b6e.mockapi.io/playlist/${selectedPlaylist.id}`)
      .then((response) =>setCartData(response.data.songs))
      .catch((error) => {console.log("There was some error fetchhing the songs for the playlist")})
    },
    [selectedPlaylist])
    const setID = (id) =>{
        console.log(id)
        localStorage.setItem('ID',id)
    }
    
    const getData = () => {
        axios.get(`https://623571e2163bf7c4745b1b6e.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://623571e2163bf7c4745b1b6e.mockapi.io/crud/${id}`)
        .then(() => {
            getData();
        })
    }
  return(
    <>
    <Example/>
  <h1>only paylist page</h1>
  

<Container fluid>
  <Row>
  <Col md="17">
      <Playlist setSelectedPlaylist={setSelectedPlaylist}/>
  </Col>

  <Col md="17">
      <Cart cartData={cartData}/>
      
      {<FormGroup>
      {cartData.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Total songs are</CardHeader>
          <CardBody>
           <b> Your added  {cartData.length} songs   </b> 
          </CardBody>
          <CardFooter>
            
            <Button color="success" onClick={emptyCart} >
              
              empty the play list here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h1 className="text-warning">Your Playlist is empty</h1>
      )}
     
     </FormGroup> }
     </Col>
     </Row>
      </Container>      
  </>
  )
}

export default Main;
