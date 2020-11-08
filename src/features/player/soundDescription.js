import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import {useSelector} from 'react-redux';

function SoundDescription() {
  const sound = useSelector(state=> state.player.sound)
  return (
    <Box>
      <Image src={sound.image} alt="image_album" />
      <Box>
        <h4>{sound.title} </h4>
        <span>
          {sound.artist} - {sound.album}{' '}
        </span>
      </Box>
    </Box>
  );
}

export default SoundDescription;
