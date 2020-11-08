import React, { Fragment } from 'react';
import {SoundsSection} from './soudStyle';
import { useSelector } from "react-redux";
import SoundDetail from './soundDetail';


function Sounds (){

  const searchStatus = useSelector((state) => state.search.status);
  const sounds = useSelector((state) => state.search.sounds);
  return(
    <Fragment>
    <SoundsSection>
      {sounds.length === 0 &&"Busca algo"}
      {searchStatus === "fulfilled" && <SoundDetail sound={sounds[0]} />  }
      {searchStatus==="loading"&&"Loading..."}
      {searchStatus==="failed"&&"Algo salió mal, trata otra vez"}

    </SoundsSection>
    </Fragment>
  )
}

export default Sounds;