import React from 'react';
import {
  TextContainer,
  SocialMenu,
  Link,
  HeadContainer,
  Menu,
  MainContainer,
} from './Services.style';
import {
  Header,
  HeaderC,
  WorkHeader,
  AppContainer,
} from '../../assets/Global.style.js';

const Services = () => {
  return (
    <>
      <HeaderC>
        <WorkHeader>— our works</WorkHeader>
      </HeaderC>
      <AppContainer>
        <HeadContainer>
          <TextContainer>
            <Header>
              We love work hard and explore new things that’s why we cover lot
              of things. Check our service list and view details
            </Header>
          </TextContainer>
          <Menu>
            <SocialMenu>
              <Link href="#">Multimedia</Link>
              <Link href="#">Interactive design</Link>
              <Link href="#">Packaging</Link>
              <Link href="#">Branding</Link>
            </SocialMenu>
            <SocialMenu>
              <Link href="#">Creative Strategy</Link>
              <Link href="#">UI/UX</Link>
              <Link href="#">Coding</Link>
            </SocialMenu>
          </Menu>
        </HeadContainer>
      </AppContainer>
    </>
  );
};

export default Services;
