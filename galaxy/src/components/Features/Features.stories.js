import React from 'react';
import { storiesOf } from '@storybook/react';
import Features from './Features';
import styled from 'styled-components';

storiesOf('Features', module).add('with test value', () => (
  <EventtItemWrapper>
    <Features>test value</Features>
  </EventtItemWrapper>
));
const EventtItemWrapper = styled.div`
  max-width: 1370px;
  width: 100%;
  margin: 0 auto;
`;
