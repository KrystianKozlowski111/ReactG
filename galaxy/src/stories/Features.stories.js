import React from 'react';
import { storiesOf } from '@storybook/react';
import Features from '../components/Features';

storiesOf('Features', module).add('with test value', () => (
  <Features>test value</Features>
));
