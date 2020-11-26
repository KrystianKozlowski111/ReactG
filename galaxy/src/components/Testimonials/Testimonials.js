import React from 'react';
import {
  TextContainer,
  HeroContainer,
  Placeholder,
  UserTextContainer,
  UserContainer,
  Buttoncontainer,
  ButtonLR,
  MainContainer,
} from './Testimonials.style';
import {
  UserHeader,
  UserText,
  HeaderC,
  WorkHeader,
  Header,
} from '../../assets/Global.style.js';
import TestimonialsPng from '../../assets/images/Testimonials.svg';
import LeftButton from '../../assets/images/LeftButton.svg';
import RightButton from '../../assets/images/RightButton.svg';
const Testimonials = () => {
  return (
    <MainContainer>
      <HeaderC>
        <WorkHeader>— testimonials</WorkHeader>
      </HeaderC>
      <HeroContainer>
        <TextContainer>
          <Header>
            "Professionals in their craft! All products were super great with
            strong attention to details, and overall vibe"
          </Header>
          <UserContainer>
            <UserTextContainer>
              <UserHeader>Polina Kuzina</UserHeader>
              <UserText>Manager at Craftwork</UserText>
            </UserTextContainer>
          </UserContainer>
          <Buttoncontainer>
            <ButtonLR>
              {' '}
              <img
                src={LeftButton}
                className="App-LeftButton"
                alt="LeftButton"
              />
            </ButtonLR>
            <ButtonLR>
              {' '}
              <img
                src={RightButton}
                className="App-RightButton"
                alt="RightButton"
              />
            </ButtonLR>
          </Buttoncontainer>
        </TextContainer>
        <Placeholder>
          {' '}
          <img
            style={{ width: '100%' }}
            src={TestimonialsPng}
            className="App-Testimonials"
            alt="Testimonials"
          />
        </Placeholder>
      </HeroContainer>
    </MainContainer>
  );
};

export default Testimonials;
