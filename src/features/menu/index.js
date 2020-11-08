/* @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/core';
import React from 'react';
import { ContainerMenu, TitleMenu, ItemMenu, LogoImagen, ContainerIconClose } from './menuStyle';
import * as AiIcons from 'react-icons/ai';
import logo from '../../assets/images/logo.png';
import { sidebarLibreria, SidebarPlayList } from './sidebarData';
import { Link } from 'react-router-dom';
import { showMenu } from './menuSlice';
import { useSelector, useDispatch } from 'react-redux';

function Menu() {
  const sidebar = useSelector((state) => state.menu.isShow);
  const dispatch = useDispatch();
  const showSidebar = () => dispatch(showMenu());

  const handleSelected = () => {
    dispatch(showMenu())                                                                                                      
  };

  return (
    <ContainerMenu
      css={
        sidebar &&
        css`
          left: 0;
          transition: 350ms;
          z-index: 1;
        `
      }
    >
      <ContainerIconClose >
        <AiIcons.AiOutlineClose onClick={showSidebar} />
      </ContainerIconClose>
      <LogoImagen src={logo} alt="logo" />

      <TitleMenu>Mi Librería</TitleMenu>
      <ul>
        {sidebarLibreria.map((item) => (
          <ItemMenu key={item.title}>
            <Link to={item.path} onClick={handleSelected}>
              {item.title}
            </Link>
          </ItemMenu>
        ))}
      </ul>
      <TitleMenu>Playlist</TitleMenu>
      <ul>
        {SidebarPlayList.map((item) => (
          <ItemMenu key={item.title}>
            <Link to={item.path} onClick={handleSelected}>
              {item.title}
            </Link>
          </ItemMenu>
        ))}
      </ul>
    </ContainerMenu>
  );
}

export default Menu;
