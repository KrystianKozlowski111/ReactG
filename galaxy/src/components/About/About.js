import React from 'react';
import {
  AboutContainer,
  AboutTextContainer,
  AboutHeader,
  Placeholder,
  User,
  UserContainer,
  UserTextContainer,
} from './About.style';

import {
  Text,
  UserHeader,
  AppContainer,
  UserText,
} from '../../assets/Global.style.js';
import placeholderAbout from '../../assets/images/placeholderAbout.svg';
import eclipse from '../../assets/images/eclipse.png';
const About = () => {
  return (
    <AppContainer>
      <AboutContainer>
        <Placeholder>
          {' '}
          <img
            src={placeholderAbout}
            className="App-placeholderAbout"
            alt="placeholderAbout"
          />
        </Placeholder>
        <AboutTextContainer>
          <AboutHeader>
            We solve digital problems with an outstanding creative flare
          </AboutHeader>
          <Text>
            The best time to view the moon, obviously, is at night when there
            are few clouds and the weather is accommodating for a long and
            lasting study.
          </Text>
          <Text>
            For most of us, the idea of astronomy is something we directly
            connect to “stargazing”, telescopes and seeing magnificent displays
            in the heavens.
          </Text>
          <UserContainer>
            <User>
              <img src={eclipse} className="App-eclipse" alt="eclipse" />
            </User>
            <UserTextContainer>
              <UserHeader>Denis Shepovalov</UserHeader>
              <UserText>Co-Founder & CEO</UserText>
            </UserTextContainer>
          </UserContainer>
        </AboutTextContainer>
      </AboutContainer>
    </AppContainer>
  );
};

export default About;
