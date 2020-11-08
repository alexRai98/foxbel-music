/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import {FormSearch} from './navbarStyle';
import { useDispatch } from "react-redux";
import {fetchSounds} from './searchSlice';

function Search (){
  const [input, setInput] = useState("");

  const handleInput = (event)=>{
    setInput(event.target.value)
  }
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(fetchSounds(input));
      console.log(response);

    } catch {
     console.log("An error occurred");
    }
  };


  return(
    <FormSearch onSubmit={handleSubmit} >
      <input placeholder="Buscar" onChange={handleInput} />
      <AiIcons.AiOutlineSearch css={css`color: #BDBDBD;`} />
    </FormSearch>
  ) 
}

export default Search;