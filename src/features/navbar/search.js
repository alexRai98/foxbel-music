/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import {FormSearch} from './navbarStyle'

function Search (){
  const [input, setInput] = useState("");

  const handleInput = (event)=>{
    setInput(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(input);
  }

  return(
    <FormSearch onSubmit={handleSubmit} >
      <input placeholder="Buscar" onChange={handleInput} />
      <AiIcons.AiOutlineSearch css={css`color: #BDBDBD;`} />
    </FormSearch>
  ) 
}

export default Search;