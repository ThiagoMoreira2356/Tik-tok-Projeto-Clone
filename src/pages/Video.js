import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./components/footer/VideoFooter"
import VideoSideBar from "./components/sidebar/VideoSideBar"

function Video({likes , messages , shares , name , description , music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video__container">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src = {url}
      ></video>
      <VideoSideBar
      likes={likes}
      messages={messages}
      shares={shares}
      />
      <VideoFooter
      name = {name}
      description = {description}
      music = {music}
      />
    </div>
  );
}

export default Video;
