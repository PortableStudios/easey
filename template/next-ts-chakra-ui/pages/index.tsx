import React from 'react';
import type { NextPage, GetServerSideProps } from 'next';

import { Home } from '@/components/pages';
import generateMetaTags from '@/utils/meta';

type Props = {
  timestamp: number;
};

const Index: NextPage<Props> = ({ timestamp }) => {
  return (
    <>
      {generateMetaTags({ title: 'Home' })}
      <Home timestamp={timestamp} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const timestamp = new Date().getTime();
  return {
    props: { timestamp },
  };
};

export default Index;
