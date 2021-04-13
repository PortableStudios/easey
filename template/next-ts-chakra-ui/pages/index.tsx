import React from 'react';
import type { NextPage } from 'next';

import { Home } from '@/components/pages';
import generateMetaTags from '@/utils/meta';

const Index: NextPage = () => {
  return (
    <>
      {generateMetaTags({ title: 'Home' })}
      <Home />
    </>
  );
};

export default Index;
