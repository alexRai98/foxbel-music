/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { showMenu } from '../menu/menuSlice';
import { useSelector, useDispatch } from 'react-redux';
import Search from './search';
import User from './user';
import { Nav } from './navbarStyle';

function Navbar() {
  const isSidebar = useSelector((state) => state.menu.isShow);
  const dispatch = useDispatch();
  const showSidebar = () => dispatch(showMenu());

  return (
    <Nav>
      <FaIcons.FaBars
        onClick={showSidebar}
        css={css`
          color: #e86060;
          font-size: 20px;
          cursor: pointer;
        `}
      />
      <Search />
      <User />
    </Nav>
  );
}
export default Navbar;
