import React from 'react';
import {
  TextContainer,
  SocialMenu,
  Link,
  HeadContainer,
  WallP,
  Buttoncontainer,
  BottomTextContainer,
  AwardsContainer,
  Button,
  AwardsPicture,
  AwardsText,
  BoxContainer,
  BoxItem,
  BoxTextContainer,
  AwardsHeader,
  AwardsData,
} from './WorkDetails.style';
import {
  Header,
  Text,
  UserText,
  PictureContainer,
  AppContainer,
  PlayButton,
  Picture,
} from '../../assets/Global.style.js';
import Twitter from '../../assets/images/TwitterB.svg';
import Awards from '../../assets/images/Awards.svg';
import Linkedin from '../../assets/images/LinkedinB.svg';
import Google from '../../assets/images/GoogleB.svg';
import Face from '../../assets/images/FaceB.svg';
import Wallpaper from '../../assets/images/Wallpaper.svg';
import WorkD1 from '../../assets/images/WorkD1.svg';
import WorkD2 from '../../assets/images/WorkD2.svg';
import WorkD3 from '../../assets/images/WorkD3.svg';
import playbutton from '../../assets/images/playbutton.svg';
const WorkDetails = () => {
  return (
    <AppContainer>
      <HeadContainer>
        <TextContainer>
          <Header>Branding Do You Know Who You Are</Header>
        </TextContainer>
        <SocialMenu>
          <Link href="#">
            <img src={Twitter} className="App-Twitter" alt="Twitter" />
          </Link>
          <Link href="#">
            <img src={Linkedin} className="App-Linkedin" alt="Linkedin" />
          </Link>
          <Link href="#">
            <img src={Google} className="App-Google" alt="Google" />
          </Link>
          <Link href="#">
            <img src={Face} className="App-Face" alt="Face" />
          </Link>
        </SocialMenu>
      </HeadContainer>
      <WallP>
        <img src={Wallpaper} className="App-Wallpaper" alt="Wallpaper" />
      </WallP>
      <Text>
        As we approached the palace I could see through the great windows of the
        first floor into the brilliantly illuminated audience chamber of Than
        Kosis. The immense hall was crowded with nobles and their women, as
        though some important function was in progress.
      </Text>
      <PictureContainer>
        <img src={WorkD1} className="App-WorkD1" alt="WorkD1" />
        <Picture>
          <PlayButton>
            <img src={playbutton} className="App-playbutton" alt="playbutton" />
          </PlayButton>
          <img src={WorkD2} className="App-WorkD2" alt="WorkD2" />
        </Picture>
        <img src={WorkD3} className="App-WorkD3" alt="WorkD3" />
      </PictureContainer>
      <Buttoncontainer>
        <BottomTextContainer>
          <Text>
            As we approached the palace I could see through the great windows of
            the first floor the brilliantly illuminated audience chamber of Than
            Kosis.
          </Text>
        </BottomTextContainer>
        <Button>Explore</Button>
      </Buttoncontainer>
      <AwardsContainer>
        <AwardsPicture>
          <img src={Awards} className="App-Awards" alt="Awards" />
        </AwardsPicture>
        <BoxContainer>
          <BoxItem>
            <AwardsText>Site of the Day</AwardsText>
            <BoxTextContainer>
              <AwardsHeader>SINGLETON UI KIT</AwardsHeader>
              <UserText>
                Application that helps to find nearest sport centres in your
                area
              </UserText>
            </BoxTextContainer>
            <AwardsData>2018</AwardsData>
          </BoxItem>
          <BoxItem>
            <AwardsText>Best Navigation</AwardsText>
            <BoxTextContainer>
              <AwardsHeader>Midleton Headers</AwardsHeader>
              <UserText>
                Application that helps to find nearest sport centres in your
                area
              </UserText>
            </BoxTextContainer>
            <AwardsData>2018</AwardsData>
          </BoxItem>
        </BoxContainer>
      </AwardsContainer>
    </AppContainer>
  );
};

export default WorkDetails;
