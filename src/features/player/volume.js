import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/core';
import {ContainerVolumen} from './playerStyle';

function Volume({ setVolumen, volumen }) {

  const handleSlider = (value) => {
    setVolumen(value / 100);
  };
  return (
    <ContainerVolumen>
      <Slider defaultValue={volumen * 100} onChange={handleSlider} w="100px">
        <SliderTrack bg="red.100" h="6px"/>
        <SliderFilledTrack bg="tomato" h="6px"/>
        <SliderThumb />
      </Slider>
      <FaIcons.FaVolumeOff />
    </ContainerVolumen>
  );
}

export default Volume;
