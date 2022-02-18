import React, { useRef, useState } from "react";
import song from "../../assets/lofi.mp3";
import { BiPause, BiPlay } from "react-icons/bi";

export default function AudioButton({ className }) {
  // state
  const [isPlaying, setIsPlaying] = useState(false);

  // references
  const audioPlayer = useRef(); // references for audio component

  const handlePlay = () => {
    const prevVal = isPlaying;
    setIsPlaying(!prevVal);
    if (!prevVal) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div className={className}>
      <button onClick={handlePlay}>
        {!isPlaying ? <BiPlay className="play" /> : <BiPause />}
      </button>
      <audio ref={audioPlayer} src={song}></audio>
    </div>
  );
}
