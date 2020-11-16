import React from 'react';
import { storiesOf } from '@storybook/react';
import Services from '../components/Services';

storiesOf('Services', module).add('with test value', () => (
  <Services>test value</Services>
));
