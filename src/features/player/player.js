import React, { useState, useRef, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/core';
import { ContainerPlayer } from './playerStyle';
import Volume from './volume';
import Controls from './controls';
import SoundDescription from './soundDescription';

function Player({ url}) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [volumen, setVolumen] = useState(0.3);


  useEffect(() => {
    audioRef.current.volume = volumen;
    if (audioRef && audioRef.current) {
      if (playing) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [playing, volumen]);

 

  return (
    <ContainerPlayer>
      <audio src={url} ref={audioRef} />
      <SoundDescription />
      <Controls setPlaying={setPlaying} playing={playing} />
      <Volume setVolumen= {setVolumen} volumen = {volumen} />
    </ContainerPlayer>
  );
}

export default Player;
