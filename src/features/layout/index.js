/* @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Fragment } from 'react';
import Menu from '../menu';
import NavBar from '../navbar';

function Layout({children}) {
  return (
    <Fragment>
      <Menu />
      <div>
        <NavBar />
        <div
          css={css`
            background-color: red;
            width: 100%;
          `}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
}
 export default Layout;