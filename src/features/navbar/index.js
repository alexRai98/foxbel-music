/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { showMenu } from '../menu/menuSlice';
import { useDispatch } from 'react-redux';
import Search from './search';
import User from './user';
import { Nav } from './navbarStyle';
import { Flex } from '@chakra-ui/core';

function Navbar() {
  const dispatch = useDispatch();
  const showSidebar = () => dispatch(showMenu());

  return (
    <Nav>
      <Flex
        alignItems="center"
        css={css`
          @media (min-width: 768px) {
            max-width: 500px;
            width: 100%;
          }
        `}
      >
        <FaIcons.FaBars
          onClick={showSidebar}
          css={css`
            color: #e86060;
            font-size: 20px;
            cursor: pointer;
            margin-right: 5px;
          `}
        />
        <Search />
      </Flex>
      <User />
    </Nav>
  );
}
export default Navbar;
