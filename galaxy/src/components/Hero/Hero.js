import React from 'react';
import {
  WorkTextContainer,
  WorkHeader,
  Placeholder,
  WorkText,
  HeroContainer,
  Button,
  VideoContainer,
} from './Hero.style';
import { PlayButton } from '../../assets/Global.style.js';
import placeholder from '../../assets/images/placeholder.svg';
import playbutton from '../../assets/images/playbutton.svg';
import video from '../../assets/images/video.png';
const Hero = () => {
  return (
    <>
      <HeroContainer>
        <WorkTextContainer>
          <WorkHeader>
            Work around you <br />
            and your team
          </WorkHeader>
          <WorkText>
            From ads that dance or sing to MTV-like commercials,
            <br />
            online advertisers are now using a new type of
            <br />
            technology “rich media” to attract consumers.
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
        <VideoContainer>
          {' '}
          <img src={video} className="App-video" alt="video" />
          <PlayButton>
            <img src={playbutton} className="App-playbutton" alt="playbutton" />
          </PlayButton>
        </VideoContainer>
      </HeroContainer>
    </>
  );
};

export default Hero;
