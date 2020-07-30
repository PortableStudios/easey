import React from 'react';

import Page from './Page';

export default {
  title: 'Layout',
  component: Page,
};

export const PageStory = () => {
  return <Page />;
};
PageStory.story = { name: 'Page' };
