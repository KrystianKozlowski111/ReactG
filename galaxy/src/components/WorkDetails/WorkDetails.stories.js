import React from 'react';
import { storiesOf } from '@storybook/react';
import WorkDetails from './WorkDetails';

storiesOf('WorkDetails', module).add('with test value', () => (
  <WorkDetails>test value</WorkDetails>
));
