import React from 'react';
import { Flex } from '@chakra-ui/core';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';

function Controls({playing,setPlaying}) {

  const togglePlay = () => setPlaying(!playing);
  return (
    <Flex>
      <CgIcons.CgPlayTrackPrev />
      <div onClick={togglePlay}>
        {playing ? <FaIcons.FaPause /> : <FaIcons.FaPlay />}
      </div>
      <CgIcons.CgPlayTrackNext />
    </Flex>
  );
}

export default Controls;
