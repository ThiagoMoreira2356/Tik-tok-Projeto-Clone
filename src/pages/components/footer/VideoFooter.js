import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name , description , music}) {
  return (
    <div className="Video__Footer">
      <div className="Video__Footer__Texto">
        <h3>@{name} </h3>
        <p>{description}</p>

        <div className="Video__Footer__Musica">
          <MusicNoteIcon className="Video__Footer__Musica__Icone"/>
          <div className="Video__Footer__Musica__Titulo">
              <p>{music}</p>
          </div>

        </div>
      </div>

      <img className="Video__Footer__Icone" alt="icone de vinil" 
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      
      
      
      
      />
    </div>
  );
}

export default VideoFooter;
