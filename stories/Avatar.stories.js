/* eslint-disable no-unused-vars */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Avatar, AvatarBadge } from '../lib/';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is Avatar')(() => (
        <Avatar
          badge={text('Badge', '99+')}
          size={select(
            'Size',
            {
              xsmall: 'xsmall',
              small: 'small',
              medium: 'medium',
              large: 'large',
              xlarge: 'xlarge',
            },
            'medium',
          )}
          round={boolean('Round', false)}
        />
      )),
    ),
  );
