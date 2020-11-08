import React  from 'react';
import { useSelector } from "react-redux";
import SoundDetail from './soundDetail';
import {Box} from '@chakra-ui/core'


function Sounds (){

  const searchStatus = useSelector((state) => state.search.status);
  const sounds = useSelector((state) => state.search.sounds);
  return(
    <Box px="20px">

      {sounds.length === 0 &&"Busca algo"}
      {searchStatus === "fulfilled" && <SoundDetail sound={sounds[0]} />  }
      {searchStatus==="loading"&&"Loading..."}
      {searchStatus==="failed"&&"No se encontró lo que buscaba, intente nuevamente"}

   
    </Box>
  )
}

export default Sounds;