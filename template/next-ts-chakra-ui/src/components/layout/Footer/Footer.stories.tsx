import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Layout',
  component: Footer,
} as Meta;

type Args = React.ComponentProps<typeof Footer>;

export const FooterStory: Story<Args> = (args) => {
  return <Footer {...args} />;
};
FooterStory.storyName = 'Footer';
