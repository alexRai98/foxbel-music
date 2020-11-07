/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React, { Fragment } from 'react';
import Menu from '../menu';
import NavBar from '../navbar';

function Layout({ children }) {
  return (
    <Fragment>
      <Menu />
      <NavBar />
      {children}
    </Fragment>
  );
}
export default Layout;
