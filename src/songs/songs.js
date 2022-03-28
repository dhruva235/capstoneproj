import React, { useState, useEffect,useContext } from "react";
import Axios from "axios";
import CartItem from "./songdisplay";
import "../App.css";
import { faker } from "faker";
import { Container, Col, Row } from "reactstrap";
import Context from '../Context/userContext';
const apiKey = "INSET_YOUR_KEY_HERE";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "https://myjson.dit.upm.es/api/bins/fdbr";
const SongsPage = ({ addInCart }) => {
  const [context,setContext] =useContext(Context);
  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey
  //       }
  //     });

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl, {});

    const { photos } = data;

    const allProduct = photos.map(photo => ({
     
      img1:faker.image.avatar(),
     
      
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div class="vl">
    <Container fluid>
      <h1 className="text-success text-center"> Hi<b> {context.name}</b> ENJOY THE SONGS</h1>
      <Row>
        
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        
      </Row>
    </Container>
    </div>
  );
};

export default SongsPage;
