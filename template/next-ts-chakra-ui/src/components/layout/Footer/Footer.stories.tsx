import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

type Args = React.ComponentProps<typeof Footer>;
const Template: Story<Args> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
