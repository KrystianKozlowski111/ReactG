import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from '../components/Hero';
import styled from 'styled-components';

storiesOf('Hero', module).add('with test value', () => (
  <EventItemWrapper>
    <Hero>test value</Hero>
  </EventItemWrapper>
));
const EventItemWrapper = styled.div`
  max-width: 1370px;
  width: 100%;
  margin: 0 auto;
`;
