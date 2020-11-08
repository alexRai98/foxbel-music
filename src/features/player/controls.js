import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import {ButtomPlay,ContainerPlay} from './playerStyle';

function Controls({playing,setPlaying}) {

  const togglePlay = () => setPlaying(!playing);
  return (
    <ContainerPlay alignItems="center">
      <CgIcons.CgPlayTrackPrev />
      <ButtomPlay onClick={togglePlay}>
        {playing ? <FaIcons.FaPause /> : <FaIcons.FaPlay />}
      </ButtomPlay>
      <CgIcons.CgPlayTrackNext />
    </ContainerPlay>
  );
}

export default Controls;
