import React from 'react';
import { Card, Button, CardTitle,CardBody, CardText, Row, Col } from 'reactstrap';
import {useState} from 'react';
import axios from 'axios';

var item;
const Cart=({cartData,selectedPlaylist})=>{
    console.log("The songs are",cartData)
    const [cartItem, setCartItem] = useState([]);
    const [songs,setSongs]=useState(cartData);
    const deleteSongFromPlaylist=(song)=>{
        const updatedPlaylist=selectedPlaylist;
        const updatedSong=selectedPlaylist.song.filter((item)=>item.id!==song.id);
        updatedPlaylist.song=updatedSong;
        axios.delete(`https://623571e2163bf7c4745b1b6e.mockapi.io/playlist/${selectedPlaylist.id}`)
        .then((response)=>{
            axios.post(`https://623571e2163bf7c4745b1b6e.mockapi.io/playlist`,updatedPlaylist)
            .then(res=>{
                console.log("Update the playlist");
                setSongs(res.data.songs);
            })
                .catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }
  
    
    
    return (
        
            songs.map((data,index)=>{
                console.log(index)
                return (
                    <Card key={index} inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="mt-2 mb-4">
                    <CardBody className="text-center">

<CardTitle ><strong>{data.firstName}</strong></CardTitle>
<Button onClick={()=>deleteSongFromPlaylist(data)}>REmove</Button>

        

</CardBody>

</Card>
                )
            })
        
       
    );
        }

export default Cart;