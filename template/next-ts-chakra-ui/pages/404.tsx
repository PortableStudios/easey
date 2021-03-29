import React from 'react';

import { Error404 } from '@/components/pages';
import generateMetaTags from '@/utils/meta';

const Custom404 = () => {
  return (
    <>
      {generateMetaTags({
        title: 'Page Not Found',
        description: 'Sorry, we couldn’t find the page you are looking for.',
      })}
      <Error404 />
    </>
  );
};

export default Custom404;
