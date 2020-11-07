import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { showMenu } from '../menu/menuSlice';
import { useSelector,useDispatch } from 'react-redux';

function Navbar(){
  const isSidebar = useSelector((state) => state.menu.isShow);
  const dispatch = useDispatch();
  const showSidebar =()=> dispatch( showMenu());

  return(

    <nav>
      <FaIcons.FaBars onClick={showSidebar} />
    </nav>

  )
  
}
export default Navbar;