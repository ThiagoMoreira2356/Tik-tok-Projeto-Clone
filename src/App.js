import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video.js";
import db from "./Config/Firebase";
import { collection, getDocs } from "firebase/firestore/lite";


/* Tela principal do App*/

function App() {
  
  let maxHeight;
  if(window.innerHeight <= 800){

    maxHeight = window.innerHeight

  }
  
  
  
  const [Videos, setVideos] = useState([]);
  async function getVideos() {
    const videosCollection = collection(db, "Videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="app__container" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__videos">
        {Videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        
      </div>
    </div>
  );
}

export default App;
