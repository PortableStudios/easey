import React from 'react';
import type { Story, Meta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'UI/Card',
  component: Card,
} as Meta;

type Args = React.ComponentProps<typeof Card>;
const Template: Story<Args> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Lorem ipsum',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Basic.args,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum fringilla eleifend. Donec auctor blandit commodo. Ut id tellus placerat, rutrum diam sed, pretium magna.',
};

export const WithLink = Template.bind({});
WithLink.args = {
  ...Basic.args,
  link: {
    label: 'View content',
    url: 'https://storybook.js.org/',
  },
};

export const WithDescriptionAndLink = Template.bind({});
WithDescriptionAndLink.args = {
  ...WithDescription.args,
  ...WithLink.args,
};
