import React from 'react';
import { storiesOf } from '@storybook/react';
import Works from '../components/Works';

storiesOf('Works', module).add('with test value', () => (
  <Works>test value</Works>
));
