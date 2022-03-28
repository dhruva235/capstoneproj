import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import Example  from "../components/Example";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import BuyPage from "./songs"
import Cart from "./Playlist";

function Home1() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast(" song is already added in playlist", {
        type: "error"
      });
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);

    toast("PLaylist is complety emplty now", {
      type: "success"
    });
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };

  return (
     
    <Container fluid>
      <Example/>
      <ToastContainer />
     
      <Row>
      <div class="about-section">
  <h1>THIS IS THE SONG PAGE</h1>
  <p>This is the application is to add the songs.</p>
  <p>Please <b>login</b> if u have a account or<b> register </b>  to use the playlist of this app.</p>
</div>

        <Col md="17">
        <BuyPage addInCart={addInCart} />
        </Col>
        
      </Row>
    </Container>
  );
}

export default Home1;
