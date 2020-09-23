import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Error404 from './Error404';

export default {
  title: 'Pages',
  component: Error404,
  parameters: {
    layout: 'fullscreen',
    screenshot: {
      skip: false,
    },
  },
} as Meta;

type Args = React.ComponentProps<typeof Error404>;

export const Error404Story: Story<Args> = (args) => {
  return <Error404 {...args} />;
};
Error404Story.storyName = '404';
