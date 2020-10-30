import React from 'react';
import { Headercontainer, Image, Menuicon, Searchicon } from './Header.style';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/searchIcon.svg';
import menu from '../../assets/images/menuIcon.svg';
const Header = () => {
  return (
    <Headercontainer>
      <Image>
        <img src={logo} className="App-logo" alt="logo" />
      </Image>

      <Searchicon>
        <img src={search} className="App-logo" alt="search" />
      </Searchicon>
      <Menuicon>
        <img src={menu} className="App-logo" alt="menu" />
      </Menuicon>
    </Headercontainer>
  );
};

export default Header;
