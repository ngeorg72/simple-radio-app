'use client';
import React, { useState, useRef } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  // ΕΔΩ ΕΙΧΕΣ ΒΑΛΕΙ ΤΟ ΛΙΝΚ ΤΟΥ SIMPLE RADIO
  const streamUrl = "https://ice.streams.ovh:1765/stream"; 

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#000', color: '#fff', height: '100vh', padding: '20px' }}>
      <h1>Simple Radio Player</h1>
      <audio ref={audioRef} src={streamUrl} />
      <button onClick={togglePlay} style={{ padding: '20px 40px', fontSize: '20px', cursor: 'pointer', marginTop: '20px' }}>
        {isPlaying ? 'STOP' : 'PLAY'}
      </button>
    </div>
  );
}
