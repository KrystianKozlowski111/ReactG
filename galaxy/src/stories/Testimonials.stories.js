import React from 'react';
import { storiesOf } from '@storybook/react';
import Testimonials from '../components/Testimonials';

storiesOf('Testimonials', module).add('with test value', () => (
  <Testimonials>test value</Testimonials>
));
