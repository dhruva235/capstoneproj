import React,{useState,useContext} from "react";

import Context from '../Context/userContext';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const CardItem = ({ product, addInCart }) => {
  const[contacts,setContacts] = useState();
  const [context,setContext] =useContext(Context);
  return (
    <>
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.img1} />
      <CardBody className="text-center">
      <CardTitle><strong>Movie name:<h4>{product.songName}</h4></strong></CardTitle>
        <CardTitle><strong>Song name:<h5>{product.movieName}</h5></strong></CardTitle>
        <CardText className="secondary">
         <strong> songlength: <h6>4:45</h6></strong>
        </CardText>
        <CardText className="secondary">
         <strong> musictype:<h6 className="mt"> {product.musictype}</h6></strong>
        </CardText>
        <CardText className="secondary">
         <strong> singer :<h6 className="si">{product.singer}</h6></strong>
        </CardText>
        <CardText className="secondary">
         <strong> <a id="GFG" href="https://www.youtube.com/watch?v=60ItHLz5WEA"> click here to listen the Song </a></strong>
        </CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          Add to playlist
        </Button>
      </CardBody>
    </Card>
    <Card className="mt-2 mb-1">
    <CardImg top height="250" width="100%" src={product.img1} />
    <CardBody className="text-center">
    <CardTitle><strong>Movie name:<h4>{product.songName}</h4></strong></CardTitle>
      <CardTitle><strong>Song name:<h5>{product.movieName}</h5></strong></CardTitle>
      <CardText className="secondary">
       <strong> songlength: <h6>4:45</h6></strong>
      </CardText>
      <CardText className="secondary">
       <strong> musictype:<h6 className="mt"> {product.musictype}</h6></strong>
      </CardText>
      <CardText className="secondary">
       <strong> singer :<h6 className="si">{product.singer}</h6></strong>
      </CardText>
      <CardText className="secondary">
       <strong> <a id="GFG" href="https://www.youtube.com/watch?v=60ItHLz5WEA"> click here to listen the Song </a></strong>
      </CardText>
      <Button color="success" onClick={() => addInCart(product)}>
        Add to playlist
      </Button>
    </CardBody>
  </Card>
  </>
    
  );
};

export default CardItem;
