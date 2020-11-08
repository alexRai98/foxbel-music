import React from 'react';
import { Text, Flex, Image } from '@chakra-ui/core';
import {useSelector} from 'react-redux';

function SoundDescription() {
  const {titleSound,artistName, albumName,albumImage} = useSelector(state=> state.player.sound)
  return (
    <Flex color="#ffffff">
      <Image objectFit="cover" width="100px" src={albumImage} alt="image_album" />
      <Flex flexDirection="column" justifyContent="center" ml="10px">
        <Text fontSize="14px" fontWeight="bold">{titleSound} </Text>
        <Text fontSize="12px">
          {artistName} - {albumName}{' '}
        </Text>
      </Flex>
    </Flex>
  );
}

export default SoundDescription;
