import React from 'react';
import { useSelector } from 'react-redux';
import SoundDetail from './soundDetail';
import { Box, Flex, Text, Skeleton } from '@chakra-ui/core';
import SoundCard from './soundCard';

function Sounds() {
  const searchStatus = useSelector((state) => state.search.status);
  const sounds = useSelector((state) => state.search.sounds);
  const skele = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'r', 'y', 'i'];

  return (
    <Box px="20px">
      {searchStatus === 'fulfilled' && <SoundDetail sound={sounds[0]} />}
      {searchStatus === 'failed' &&
        'No se encontró lo que buscaba, intente nuevamente'}
      {searchStatus === 'loading' && (
        <Box>
          <Skeleton height="635px" w="100%" />
        </Box>
      )}
      <Text
        color="#E86060"
        fontSize="22px"
        fontWeight="bold"
        mt="40px"
        mb="20px"
      >
        {' '}
        {sounds.length === 0 ? 'Busca algo' : 'Resultados'}
      </Text>
      {searchStatus === 'loading' && (
        <Box>
          {skele.map((re) => (
            <Skeleton height="289px" mr="22px" mb="22px" key={re} />
          ))}
        </Box>
      )}

      <Flex flexWrap="wrap" justifyContent="center" mb="120px">
        {sounds.map((sound) => (
          <SoundCard key={sound.id} sound={sound} />
        ))}
      </Flex>
    </Box>
  );
}

export default Sounds;
