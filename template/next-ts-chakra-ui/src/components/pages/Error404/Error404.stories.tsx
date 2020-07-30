import React from 'react';

import Error404 from './Error404';

export default {
  title: 'Pages',
  component: Error404,
  parameters: {
    screenshot: {
      skip: false,
    },
  },
};

export const Error404Story = () => {
  return <Error404 />;
};
Error404Story.story = { name: '404' };
