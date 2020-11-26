import React from 'react';
import { storiesOf } from '@storybook/react';
import Features from '../components/Features';
import styled from 'styled-components';

storiesOf('Features', module).add('with test value', () => (
  <EventItemWrapper>
    <Features>test value</Features>
  </EventItemWrapper>
));
const EventItemWrapper = styled.div`
  max-width: 1370px;
  width: 100%;
  margin: 0 auto;
`;
