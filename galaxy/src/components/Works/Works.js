import React from 'react';
import {
  HeaderC,
  WorkHeader,
  WorksContainer,
  Headercontainer,
  DiscoverHeader,
  Switcher,
  SwitcherText,
  PictureContainer,
  Picture,
  PlayButton,
  Footercontainer,
  FooterText,
  Button,
} from './Works.style';
import Works1 from '../../assets/images/Works1.svg';
import Works2 from '../../assets/images/Works2.svg';
import Works6 from '../../assets/images/Works6.svg';
import Works3 from '../../assets/images/Works3.svg';
import Works4 from '../../assets/images/Works4.svg';
import Works5 from '../../assets/images/Works5.svg';
import playbutton from '../../assets/images/playbutton.svg';
const Works = () => {
  return (
    <>
      <HeaderC>
        <WorkHeader>— our works</WorkHeader>
      </HeaderC>
      <Headercontainer>
        <DiscoverHeader>Discover our Work</DiscoverHeader>
        <Switcher>
          <SwitcherText>All</SwitcherText>
          <SwitcherText>Branding</SwitcherText>
          <SwitcherText>Web</SwitcherText>
          <SwitcherText>Development</SwitcherText>
          <SwitcherText>Films</SwitcherText>
        </Switcher>
      </Headercontainer>
      <WorksContainer>
        <PictureContainer>
          <img src={Works3} className="App-Works3" alt="Works3" />

          <img src={Works2} className="App-Works2" alt="Works2" />
          <Picture>
            <PlayButton>
              <img
                src={playbutton}
                className="App-playbutton"
                alt="playbutton"
              />
            </PlayButton>
            <img src={Works3} className="App-Works3" alt="Works3" />
          </Picture>
          <img src={Works4} className="App-Works4" alt="Works4" />

          <img src={Works5} className="App-Works5" alt="Works5" />

          <img src={Works6} className="App-Works6" alt="Works6" />
        </PictureContainer>
      </WorksContainer>
      <Footercontainer>
        <FooterText>
          It picks up the words on the page and displays ads that are similar to
          those words. Then when someone either performs an action or clicks on
          your page you will get paid.
        </FooterText>
        <Button>See our works</Button>
      </Footercontainer>
    </>
  );
};

export default Works;
