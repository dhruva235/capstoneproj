import Playlist from './Playlist';
import {useState,useEffect} from 'react';
import {Card,CardText,CardBody,CardTitle,Button} from 'reactstrap';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
const AddToPlaylist=({selectedSong})=>{
    const [playlists,setPlaylists]= useState([]);
    useEffect(()=>{
        axios.get("https://623571e2163bf7c4745b1b6e.mockapi.io/playlist")
    .then((response)=>setPlaylists(response.data))
    .catch((error)=>console.log("There was an trying to fetch the playlist"));
    },[])

    const handleClick=(playlist,selectedSong)=>{
     console.log("The palylist is:",playlist)
     axios.delete(`https://623571e2163bf7c4745b1b6e.mockapi.io/playlist/${playlist.id}`)
     .then((res)=>{
         const updatedPlaylist=playlist;
         updatedPlaylist.songs=[...playlist.songs,selectedSong];
         axios.post(`https://623571e2163bf7c4745b1b6e.mockapi.io/playlist`,updatedPlaylist)
         .then((response)=>{
        //   setPlaylists([...playlists,response.data])
          toast.success("Song added to playlist successfully!");
        })
      .catch(err=>console.log("There was an error updating the playlist"))
     }).catch(err=>"There was an error in deleting the playlist")
      
    }
   return (
       <>
      { playlists.map((playlist,index)=>(
        <Card key={index} onClick={()=>handleClick(playlist,selectedSong)} body inverse color="primary">
        <CardBody>
          <CardText><strong><h3>{playlist.title}</h3></strong></CardText>
        </CardBody>
      </Card>
       ))}
       <ToastContainer/>
       </> 
   )
}

export default AddToPlaylist;