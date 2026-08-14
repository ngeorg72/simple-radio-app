'use client';
import { useState, useRef } from 'react';

export default function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Βάλε εδώ το δικό σου streaming link (π.χ. από EverestCast/Aloncast)
  const streamUrl = "https://ice.streams.ovh:1765/stream"; 

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#121212',
      color: '#ffffff',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Simple Radio</h1>
      <p style={{ color: '#888', marginBottom: '30px' }}>Ζωντανά στο κινητό σου</p>

      <audio ref={audioRef} src={streamUrl} preload="none" />

      <button 
        onClick={togglePlay}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: isPlaying ? '#ff4b4b' : '#1db954',
          color: '#fff',
          fontSize: '20px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          transition: 'transform 0.1s'
        }}
      >
        {isPlaying ? 'PAUSE' : 'PLAY'}
      </button>

      <div style={{ marginTop: '20px', fontSize: '14px', color: isPlaying ? '#1db954' : '#888' }}>
        {isPlaying ? '● On Air (Αναπαραγωγή)' : '○ Σε αναμονή'}
      </div>
    </main>
  );
}
