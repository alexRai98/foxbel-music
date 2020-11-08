import React from 'react';
import { Box, Image, Text } from '@chakra-ui/core';
import * as FaIcons from 'react-icons/fa';
import three from '../../assets/images/thre.png';
import { useDispatch } from 'react-redux';
import { setSound, showPlayer } from '../player/playerSlice';

function SoundCard({ sound }) {

  const dispach = useDispatch();
  const playSound = () => {
    dispach(showPlayer());
    dispach(
      setSound({
        titleSound: sound.title,
        artistName: sound.artist.name,
        albumName: sound.album.title,
        albumImage: sound.album.cover_medium,
        soundUrl: sound.preview,
      })
    );
  };
  return (
    <Box mr="22px" mb="22px" w="250px">
      <Box position="relative">
        <Image w="100%" h="250px" objectFit="cover" src={sound.album.cover_medium} alt="img_album" />
        <Box position="absolute" top="8px" right="8px">
          <Image src={three} alt="three" />
        </Box>
        <Box position="absolute" top="107px" right="107px" onClick={playSound} color="#ffffff" fontSize="36px">
          <FaIcons.FaPlay />
        </Box>
      </Box>
      <Text fontWeight="bold" fontSize="14px" color="#555555">
        {sound.album.title}{' '}
      </Text>
      <Text fontSize="12px" color="#828282">
        {sound.artist.name}{' '}
      </Text>
    </Box>
  );
}

export default SoundCard;
