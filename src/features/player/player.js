import React, { useState, useRef, useEffect } from 'react';
import { ContainerPlayer } from './playerStyle';
import Volume from './volume';
import Controls from './controls';
import SoundDescription from './soundDescription';
import { useSelector } from 'react-redux';
import {ContainerControls} from './playerStyle';

function Player() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [volumen, setVolumen] = useState(0.3);

  const { url } = useSelector((state) => state.player.sound);

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
      <ContainerControls >
        <Controls setPlaying={setPlaying} playing={playing} />
        <Volume setVolumen={setVolumen} volumen={volumen} />
      </ContainerControls>
    </ContainerPlayer>
  );
}

export default Player;
