import React from 'react';
import { storiesOf } from '@storybook/react';
import Clients from '../components/Clients';

storiesOf('Clients', module).add('with test value', () => (
  <Clients>test value</Clients>
));
