import React from 'react';
import {SoundsSection} from './soudStyle';
import { useSelector } from "react-redux";
import SoundDetail from './soundDetail';


function Sounds (){

  const searchStatus = useSelector((state) => state.search.status);
  const sounds = useSelector((state) => state.search.sounds);
  return(
    <SoundsSection>
      {sounds.length > 0&& searchStatus !== "loading" && <SoundDetail sound={sounds[0]} />  }
      {searchStatus==="loading"&&"Loading..."}
      {searchStatus==="failed"&&"Algo salió mal, trata otra vez"}

    </SoundsSection>
  )
}

export default Sounds;