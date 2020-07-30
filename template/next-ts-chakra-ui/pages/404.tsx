import React from 'react';
import Head from 'next/head';

import { Error404 } from '@/components/pages';
import generateMetaTags from '@/utils/meta';

const Custom404 = () => {
  return (
    <>
      <Head>
        {generateMetaTags({
          title: 'Page Not Found',
          description: 'Sorry, we couldn’t find the page you are looking for.',
        })}
      </Head>
      <Error404 />
    </>
  );
};

export default Custom404;
