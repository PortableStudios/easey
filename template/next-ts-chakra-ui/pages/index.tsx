import React from 'react';
import Head from 'next/head';
import type { NextPage, GetServerSideProps } from 'next';

import { Home } from '@/components/pages';
import generateMetaTags from '@/utils/meta';

type Props = {
  timestamp: number;
};

const Index: NextPage<Props> = ({ timestamp }) => {
  return (
    <>
      <Head>{generateMetaTags({ title: 'Home' })}</Head>
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
