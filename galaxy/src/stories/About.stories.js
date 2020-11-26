import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import About from '../components/About';

storiesOf('About', module).add('with test value', () => (
  <About>test value</About>
));

const EventItemWrapper = styled.div`
  max-width: 1370px;
  width: 100%;
  margin: 0 auto;
`;
