import React, {useState} from 'react'
import "./VideoSideBar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import ShareIcon from '@mui/icons-material/Share';


function VideoSideBar({likes, messages , shares}) {

    const [liked, setLiked] = useState (false)


    function clicaBotao(){  
        setLiked(!liked)
    }

  
  
  
  
  
  
    return (
    
 
    
    
    <div className='Video__Sidebar'>

    <div className='Video__Sidebar__Botao'
    onClick={clicaBotao}
    >
        { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/> }
        <p>{ liked ? likes + 1 : likes}</p>
    </div>


    <div className='Video__Sidebar__Botao'>
        <ChatIcon fontSize='large'/>
        <p>{ messages }</p>
    </div>


    <div className='Video__Sidebar__Botao' 
    onClick={clicaBotao}
    >
        { liked ? <TurnedInIcon fontSize='large'/> : <TurnedInNotIcon fontSize='large'/> }
        <p>{ liked ? 80 + 1 : 80 }</p>


    </div>



    <div className='Video__Sidebar__Botao'>
        <ShareIcon fontSize='large'/>
        <p>{ shares }</p>
    </div>


    
    </div>
  )
}

export default VideoSideBar