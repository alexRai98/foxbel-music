import React from 'react';
import { Text, Flex, Image } from '@chakra-ui/core';
import {useSelector} from 'react-redux';

function SoundDescription() {
  const {image,title,artist,album} = useSelector(state=> state.player.sound)
  return (
    <Flex color="#ffffff">
      <Image objectFit="cover" width="100px" src={image} alt="image_album" />
      <Flex flexDirection="column" justifyContent="center" ml="10px">
        <Text fontSize="14px" fontWeight="bold">{title} </Text>
        <Text fontSize="12px">
          {artist} - {album}{' '}
        </Text>
      </Flex>
    </Flex>
  );
}

export default SoundDescription;
