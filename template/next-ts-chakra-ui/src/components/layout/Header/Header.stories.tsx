import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Layout',
  component: Header,
} as Meta;

type Args = React.ComponentProps<typeof Header>;

export const HeaderStory: Story<Args> = (args) => {
  return <Header {...args} />;
};
HeaderStory.storyName = 'Header';
