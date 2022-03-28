import {useEffect,useState} from 'react';
import axios from 'axios';
import {Card,CardText,CardBody,CardTitle,Button} from 'reactstrap';
import Cart from './updated/cart';
const Playlist=({setSelectedPlaylist})=>{
  const [playlists,setPlaylists]=useState([]);
  const [title,setTitle]=useState([]);
  const [reload,setReload]= useState(0);
  const handleChange=(e)=>{
    setTitle(e.target.value);
  }

  const handleOnclick=()=>{
    axios.post("https://623571e2163bf7c4745b1b6e.mockapi.io/playlist",{
      title: title,
      songs:[]
    }).then(response=>{
      console.log(response);
      setPlaylists([...playlists,response.data]);})
    .catch(err=>console.log("Error updating the playlist"))
    

  }

  const handlePlaylistUpdate=(playlist)=>{
    setSelectedPlaylist(playlist);
  }

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

  return(
    <>
    <div className="playlist">
    New playlist:
    <input type="text" onChange={handleChange }/>
    <button onClick={handleOnclick}>Add New Playlist</button>
    {playlists.length>=1?playlists.map((playlist,index)=>
      <Card key={index} onClick={()=>handlePlaylistUpdate(playlist)} >
        <CardBody>
          <CardText>{playlist.title}</CardText>
      <Button onClick={()=>handleDeletePlaylist(playlist.id)}>Delete</Button>
        </CardBody>
      </Card>):null}
      </div>
      </>
     
      )
    
    
  
}

export default Playlist;