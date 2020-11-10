import React from 'react';
import {
  WorkTextContainer,
  WorkHeader,
  Placeholder,
  WorkText,
  HeroContainer,
  Button,
  PlayButton,
  VideoContainer,
} from './Hero.style';
import placeholder from '../../assets/images/placeholder.svg';
import playbutton from '../../assets/images/playbutton.svg';
import video from '../../assets/images/video.png';
const Hero = () => {
  return (
    <>
      <HeroContainer>
        <WorkTextContainer>
          <WorkHeader>Work around you and your team</WorkHeader>
          <WorkText>
            From ads that dance or sing to MTV-like commercials, online
            advertisers are now using a new type of technology “rich media” to
            attract consumers.
          </WorkText>
          <Button>GET STARTED</Button>
        </WorkTextContainer>
        <Placeholder>
          {' '}
          <img
            src={placeholder}
            className="App-placeholder"
            alt="placeholder"
          />
        </Placeholder>
      </HeroContainer>
      <VideoContainer>
        {' '}
        <img src={video} className="App-video" alt="video" />
      </VideoContainer>
    </>
  );
};

export default Hero;
