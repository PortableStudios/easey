import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Page from './Page';

export default {
  title: 'Layout',
  component: Page,
} as Meta;

type Args = React.ComponentProps<typeof Page>;

export const PageStory: Story<Args> = (args) => {
  return <Page {...args} />;
};
PageStory.storyName = 'Page';
