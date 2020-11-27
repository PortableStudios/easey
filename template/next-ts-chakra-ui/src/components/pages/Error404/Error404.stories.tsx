import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Error404 from './Error404';

export default {
  title: 'Pages/Error404',
  component: Error404,
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      skip: false,
    },
  },
} as Meta;

type Args = React.ComponentProps<typeof Error404>;
const Template: Story<Args> = (args) => <Error404 {...args} />;

export const Default = Template.bind({});
Default.args = {};
