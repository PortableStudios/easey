import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Page from './Page';

export default {
  title: 'Layout/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

type Args = React.ComponentProps<typeof Page>;
const Template: Story<Args> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
