import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import axios from 'axios';
import { Card, CardFooter, CardHeader, Container, Button, CardTitle, CardBody, FormGroup, CardText, Row, Col } from 'reactstrap';
import Cart from "./cart"
import Example from "../../components/Example"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AddToPlaylist from '../AddToPlaylist';
export default function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [selectedSong,setSelectedSong]=useState(null);
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
      <div class="about-section">
        <h1>THIS IS THE SONG PAGE</h1>
        <p>This is the application is to add the songs.</p>
        <p>Please <b>login</b> if u have a account or<b> register </b>  to use the playlist of this app.</p>
      </div>

      <Container fluid>

        <Row>
          <Col md="8" className={selectedSong?'container-blur':null}>
            {apiData.map((data, index) => {
              return (
                <Card key={index} inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="mt-2 mb-4">
                  <CardBody className="text-center">


                    <CardTitle ><strong>Movie Name:{data.firstName}</strong></CardTitle>
                    <CardText>Song Name:{data.lastName}</CardText>
                    <CardText>Songlength:{data.Songlength}</CardText>
                    <CardText>Singer:{data.Singer}</CardText>
                    <Link to={`/update/${data.id}`}>

                      <ToastContainer />
                      <Button color="success" onClick={() => setID(data.id)} size="sm">update</Button>{' '}
                    </Link>
                    <Button color="danger" onClick={() => onDelete(data.id)} size="sm">delete</Button>{' '}
                    <Button color="success" size="sm" onClick={() => selectedSongHandler(data)}>addto</Button>{' '}
                  </CardBody>

                </Card>
              )
            })}

          </Col>

          <Col >

            <AddToPlaylist selectedSong={selectedSong} />

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
