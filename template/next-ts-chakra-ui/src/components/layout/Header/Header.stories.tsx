import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

type Args = React.ComponentProps<typeof Header>;
const Template: StoryFn<Args> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
