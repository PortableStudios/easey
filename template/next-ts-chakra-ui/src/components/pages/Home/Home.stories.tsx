import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Home from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      skip: false,
    },
  },
} as Meta;

type Args = React.ComponentProps<typeof Home>;
const Template: Story<Args> = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
