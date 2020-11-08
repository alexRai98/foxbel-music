/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/core';
import * as FaIcons from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSound, showPlayer } from '../player/playerSlice';
import { ContainerDetails, Slider, PlayDetails,ImageAlbum,Title,Button } from './soudStyle';
import three from '../../assets/images/three.png'

function SoundDetail({ sound }) {
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
    <ContainerDetails>
      <Box position="relative">
        <ImageAlbum src={sound.album.cover_medium} alt="photo_album" />
        <PlayDetails onClick={playSound}>
          <FaIcons.FaPlay />
        </PlayDetails>
      </Box>
      <Flex
        flexDirection="column"
        position="relative"
      >
        <Image objectFit="cover" h="100%" w="100%" src={sound.artist.picture_medium} alt="photo_artist" />

        <Slider>
          <Title>{sound.album.title} </Title>
          <Flex alignItems="center">
            <Text fontSize="14px" mr="16px">Lo mejor de{sound.artist.name} </Text>
            <Text fontSize="10px" color="#662323" fontWeight="bold">{sound.rank} seguidores </Text>
          </Flex>
          <Text mt="21px" mb="40px">
          Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8​ 
          </Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Button onClick={playSound}>Reproducir</Button>
            <Button css={css`color:#e86060;  background: transparent;`}>Seguir</Button>
            <Image src={three} alt="three" h="4px" />
          </Flex>
        </Slider>
      </Flex>
    </ContainerDetails>
  );
}

export default SoundDetail;
