import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/core';

function Volume({ setVolumen, volumen }) {

  const handleSlider = (value) => {
    setVolumen(value / 100);
  };
  return (
    <Box>
      <Slider defaultValue={volumen * 100} onChange={handleSlider} w="100px">
        <SliderTrack bg="red.100" />
        <SliderFilledTrack bg="tomato" />
        <SliderThumb />
      </Slider>
      <FaIcons.FaVolumeOff />
    </Box>
  );
}

export default Volume;
