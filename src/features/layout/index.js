/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React, { Fragment } from 'react';
import Menu from '../menu';
import NavBar from '../navbar';
import Player from '../player/player';
import { useSelector } from 'react-redux';

function Layout({ children }) {
  const showPlayer = useSelector(state => state.player.showPlayer);
  return (
    <Fragment>
      <Menu />
      <NavBar />
      {children}
      {showPlayer && <Player />}     
    </Fragment>
  );
}
export default Layout;
