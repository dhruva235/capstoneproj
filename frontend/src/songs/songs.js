import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import axios from 'axios';
import { Card,Collapse, CardFooter, Label, Input, CardHeader, Container, Button, CardTitle, CardBody, FormGroup, CardText, Row, Col } from 'reactstrap';
import Cart from "../components/APIFETCH/cart"
import Example from "../Navbar/Example"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Search from "../Navbar/Search"
import AddToPlaylist from '../playlist/AddToPlaylist';
export default function Songs() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpens, setIsOpens] = React.useState(false);
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [selectedSong,setSelectedSong]=useState(null);
  const [show,setShow] = useState(true);
  const cartItemHandler = (data) => {
    setCartData([...cartData, data]);
  }

  const addInCart = item => {
    const isAlreadyAdded = cartData.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast(" song is already added in playlist", {
        type: "error"
      });
      return;
    }

    setCartData([...cartData, item]);
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

  const setID = (id) => {
    console.log(id)
    localStorage.setItem('ID', id)
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

        toast("Are you sure you want to delete", {
          type: "warning",
          autoClose: 10000
        });
      })
  }

  const selectedSongHandler = (song) => {
      setSelectedSong(song);
      // Change CSS
  }
  return (
    <>
      <Example />
      
<h1>ONLY SONG page</h1>
      <Container fluid>

        <Row>
          <Col md="2" className={selectedSong?'container-blur':null}>
            {apiData.map((data, index) => {
              return (
                <Card key={index} Card body inverse color="success" className="mt-2 mb-4">
                  <CardBody className="text-center">


                    <CardTitle ><strong>Movie Name: <h3>{data.firstName} </h3></strong></CardTitle>
                    <CardText>  Song Name: <h3>{data.lastName}</h3></CardText>
                   
                    <FormGroup check>
          <Label check onClick={() => {
                setIsOpen(!isOpen)
            }}>
            <Input type="checkbox" />{' '}
           <p> Check here for more info</p>
          </Label>
        </FormGroup>
                    {/* <Button body inverse style={{ backgroundColor: '#E21717', borderColor: '#333' }}onClick={() => {
                setIsOpen(!isOpen)
            }}>Click here for more info!</Button> */}
            <Collapse isOpen={isOpen}>
                   <CardText>Songlength1: <h3>{data.Songlength}</h3></CardText>
                  
                 
                   
                  
                
        
                  
        
                    <CardText>  Singer:  <h3>  {data.Singer}</h3></CardText>
                    
                    <CardText>Click here to listen song: <a href="https://www.youtube.com/watch?v=3GI_uE4SxSU" target="_blank" rel="noopener noreferrer"><h3>songlink</h3></a></CardText>
                    </Collapse>
                    <Link to={`/update/${data.id}`}>
 
                      <ToastContainer />
  
                    </Link>
                    <CardText> 
                    <Button color="warning" size="sm" onClick={() => selectedSongHandler(data)}>AddToPlaylist</Button>{' '}
                    </CardText> 
                  </CardBody>


                </Card>
              )
            })}

          </Col>

          <Col md="4">
<h2>PLaylists</h2>
            <AddToPlaylist selectedSong={selectedSong} />
            </Col>
           

        
          
          <Col md="6">
          
          <Search/>
          
          </Col>
          {/* <Col md="4"> */}

          {/* <Cart cartData={cartData}/>
      <FormGroup>
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
     
     </FormGroup> */}
          {/* </Col> */}

        </Row>
      </Container>
    </>

  )
}
