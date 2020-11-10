import React from 'react';
import { storiesOf } from '@storybook/react';
import About from '../components/About';

storiesOf('About', module).add('with test value', () => (
  <About>test value</About>
));
