import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  TextContainer,
  SocialMenu,
  Link,
  HeadContainer,
  Menu,
  MainContainer,
  ImageContainer,
  CarouselContainer,
  App1Container,
  PlayButton,
  ButtonL,
  ButtonR,
} from './Services.style';
import {
  Header,
  HeaderC,
  WorkHeader,
  AppContainer,
} from '../../assets/Global.style.js';
import Slider from 'react-slick';
import playbutton from '../../assets/images/playbutton.svg';
import Carousel1 from '../../assets/images/Carousel1.svg';
import Carousel2 from '../../assets/images/Carousel2.svg';
import LeftButton from '../../assets/images/LeftButton.svg';
import RightButton from '../../assets/images/RightButton.svg';

const Services = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <ButtonR>
        {' '}
        <img src={RightButton} className="App-RightButton" alt="RightButton" />
      </ButtonR>
    ),
    prevArrow: (
      <ButtonL>
        {' '}
        <img src={LeftButton} className="App-LeftButton" alt="LeftButton" />
      </ButtonL>
    ),
  };
  return (
    <>
      <HeaderC>
        <WorkHeader>— services</WorkHeader>
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
      <App1Container>
        <CarouselContainer>
          <Slider {...settings}>
            <ImageContainer>
              <PlayButton>
                {' '}
                <img
                  src={playbutton}
                  className="App-playbutton"
                  alt="playbutton"
                />
              </PlayButton>
              <img src={Carousel1} />
            </ImageContainer>

            <ImageContainer>
              <img src={Carousel2} />
            </ImageContainer>
          </Slider>
        </CarouselContainer>
      </App1Container>
    </>
  );
};

export default Services;
