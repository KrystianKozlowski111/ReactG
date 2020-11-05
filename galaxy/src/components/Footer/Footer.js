import React from 'react';
import {
  Footercontainer,
  Inputf,
  Menutext,
  Form,
  Menu,
  Image,
  Button,
  MainContainer,
  BottomContainer,
  FooterText,
  MenuFooter,
  SocialMenu,
} from './Footer.style';
import GravityLogo from '../../assets/images/GravityLogo.svg';
import Twitter from '../../assets/images/Twitter.svg';
import Linkedin from '../../assets/images/Linkedin.svg';
import Google from '../../assets/images/Google.svg';
import Face from '../../assets/images/Face.svg';
const Footer = () => {
  return (
    <MainContainer>
      <Footercontainer>
        <Image>
          <img
            src={GravityLogo}
            className="App-GravityLogo"
            alt="GravityLogo"
          />
        </Image>
        <Menu>
          <Menutext href="#">Travel</Menutext>
          <Menutext href="#">Explore</Menutext>
          <Menutext href="#">Works</Menutext>
          <Menutext href="#">About Us</Menutext>
          <Menutext href="#">Contacts</Menutext>
        </Menu>
        <Form>
          <label for="fname"></label>
          <Inputf type="text" id="fname" placeholder="Your email" />
          <Button>SEND</Button>
        </Form>
      </Footercontainer>
      <BottomContainer>
        <MenuFooter>
          <FooterText href="#">Terms</FooterText>
          <FooterText href="#">Promo</FooterText>
          <FooterText href="#">Download</FooterText>
          <FooterText href="#">News</FooterText>
        </MenuFooter>
        <SocialMenu>
          <FooterText href="#">
            <img src={Twitter} className="App-Twitter" alt="Twitter" />
          </FooterText>
          <FooterText href="#">
            <img src={Linkedin} className="App-Linkedin" alt="Linkedin" />
          </FooterText>
          <FooterText href="#">
            <img src={Google} className="App-Google" alt="Google" />
          </FooterText>
          <FooterText href="#">
            <img src={Face} className="App-Face" alt="Face" />
          </FooterText>
        </SocialMenu>
      </BottomContainer>
    </MainContainer>
  );
};

export default Footer;
