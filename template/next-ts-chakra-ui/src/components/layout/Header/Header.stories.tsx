import React from 'react';

import Header from './Header';

export default {
  title: 'Layout',
  component: Header,
};

export const HeaderStory = () => {
  return <Header />;
};
HeaderStory.story = { name: 'Header' };
