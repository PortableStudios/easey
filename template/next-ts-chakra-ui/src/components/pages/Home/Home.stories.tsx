import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Home from './Home';

export default {
  title: 'Pages',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      skip: false,
    },
  },
} as Meta;

type Args = React.ComponentProps<typeof Home>;

export const HomeStory: Story<Args> = (args) => {
  return <Home {...args} />;
};
HomeStory.storyName = 'Home';
HomeStory.args = {
  timestamp: new Date().getTime(),
};
