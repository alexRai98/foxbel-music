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
      <div
        css={css`
          background-color: red;
          width: 100%;
        `}
      >
        {children}
      </div>
    </Fragment>
  );
}
export default Layout;
