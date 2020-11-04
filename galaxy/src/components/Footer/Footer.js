import React from 'react';
import {
  Footercontainer,
  Inputf,
  Menutext,
  Form,
  Menu,
  Image,
  Button,
} from './Footer.style';
import GravityLogo from '../../assets/images/GravityLogo.svg';
import SendButton from '../../assets/images/SendButton.svg';
const Footer = () => {
  return (
    <Footercontainer>
      <Image>
        <img src={GravityLogo} className="App-GravityLogo" alt="GravityLogo" />
      </Image>
      <Menu>
        <Menutext>Travel</Menutext>
        <Menutext>Explore</Menutext>
        <Menutext>Works</Menutext>
        <Menutext>About Us</Menutext>
        <Menutext>Contacts</Menutext>
      </Menu>
      <Form>
        <label for="fname"></label>
        <Inputf type="text" id="fname" placeholder="Your email" />
        <Button>
          <img src={SendButton} className="App-SendButton" alt="SendButton" />
        </Button>
      </Form>
    </Footercontainer>
  );
};

export default Footer;
