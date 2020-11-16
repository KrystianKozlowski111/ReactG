import React from 'react';
import {
  FeatureContainer,
  TextContainer,
  Text,
  Placeholder1,
  Placeholder2,
  Icon,
  RightContainer,
  IconText,
  IconTextContainer,
  IconContainer,
  AppContainer,
} from './Features.style';
import { Header } from '../../assets/Global.style.js';
import PlaceholderFeatures1 from '../../assets/images/PlaceholderFeatures1.svg';
import PlaceholderFeatures2 from '../../assets/images/PlaceholderFeatures2.svg';
import Icon100 from '../../assets/images/Icon100.svg';
import Bagicon from '../../assets/images/Bagicon.svg';
const Features = () => {
  return (
    <FeatureContainer>
      <Placeholder1>
        {' '}
        <img
          src={PlaceholderFeatures1}
          className="App-PlaceholderFeatures1"
          alt="PlaceholderFeatures1"
        />
      </Placeholder1>
      <Placeholder2>
        <img
          src={PlaceholderFeatures2}
          className="App-PlaceholderFeatures2"
          alt="PlaceholderFeatures2"
        />
      </Placeholder2>
      <RightContainer>
        <TextContainer>
          <Header>Well thought with super easy to use</Header>
          <Text>
            As we approached the palace I could see through the great windows of
            the first floor the brilliantly illuminated audience chamber of Than
            Kosis. The immense hall was crowded with nobles and their women.
          </Text>
        </TextContainer>
        <IconContainer>
          <IconTextContainer>
            <Icon>
              <img src={Icon100} className="App-Icon100" alt="Icon100" />
            </Icon>
            <IconText>Ultimate Result</IconText>
          </IconTextContainer>
          <IconTextContainer>
            <Icon>
              <img src={Bagicon} className="App-Bagicon" alt="Bagicon" />
            </Icon>
            <IconText>Minimal Design</IconText>
          </IconTextContainer>
        </IconContainer>
      </RightContainer>
    </FeatureContainer>
  );
};

export default Features;
