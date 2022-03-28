import React from 'react';
import { Card, Button, CardTitle,CardBody, CardText, Row, Col } from 'reactstrap';
import {useState,useEffect} from 'react';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

var item;
const Cart=({cartData})=>{
 
    // console.log("The songs are",cartData)
    // const [songs,setSongs]=useState([...cartData]);
    // console.log("The songs:",songs)
    // const deleteSongFromPlaylist=(song)=>{
    //     const updatedPlaylist=selectedPlaylist;
    //     const updatedSong=selectedPlaylist.song.filter((item)=>item.id!==song.id);
    //     updatedPlaylist.song=updatedSong;
    //     axios.delete(`https://623571e2163bf7c4745b1b6e.mockapi.io/playlist/${selectedPlaylist.id}`)
    //     .then((response)=>{
    //         axios.post(`https://623571e2163bf7c4745b1b6e.mockapi.io/playlist`,updatedPlaylist)
    //         .then(res=>{
    //             console.log("Update the playlist");
    //             setSongs(res.data.songs);
    //         })
    //             .catch(err=>console.log(err))
    //     }).catch(err=>console.log(err))
    // }
    const [apiData, setApiData] = useState([]);
    const [playlists,setPlaylists]=useState([]);
    const [reload,setReload]= useState(0);
    const handleDeletePlaylist=(id)=>{
      axios.delete(`https://623571e2163bf7c4745b1b6e.mockapi.io/playlist/${id}`)
      .then(response=>{
        console.log("Deleted the playlist");
        
      })
      .catch(err=>console.log("Error deleting the playlist"))
      setReload(Math.random());
    }
    useEffect(()=>{
      axios.get("https://623571e2163bf7c4745b1b6e.mockapi.io/playlist")
      .then((response)=>setPlaylists(response.data))
      .catch((error)=>console.log("There was an trying to fetch the playlist"));
    },[reload]);
    
    

    
    
    return (
        
            cartData.map((data,index)=>{
                console.log(index)
                return (
                    <Card key={index} body inverse color="info" className="text-center">
                    <CardBody className="text-center">

                    <Row>
      <Col sm="6">
<CardTitle ><h1><strong>{data.lastName}</strong></h1></CardTitle>
<CardText>Click here to listen song: <a href="https://www.youtube.com/watch?v=3GI_uE4SxSU" target="_blank" rel="noopener noreferrer"><h3>songlink</h3></a></CardText>
<Button color="danger" size="sm">Remove</Button>
</Col>


  </Row>      

</CardBody>

</Card>
                )
            })
        
       
    );
        }

export default Cart;