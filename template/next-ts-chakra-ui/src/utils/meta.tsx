import React from 'react';
import Head from 'next/head';

import MetaImage from '@/images/cover.jpg';

export type MetaTagProps = {
  title?: string;
  description?: string;
  image?: string;
  skipTitleSuffix?: boolean;
};

const generateMetaTags = ({
  title,
  description = 'This is a Portable website.',
  image = MetaImage.src,
  skipTitleSuffix = false,
}: MetaTagProps = {}) => {
  const fullTitle = skipTitleSuffix ? title : `${title} - Portable`;
  const fullImageUrl = image.startsWith('/')
    ? `${process.env.NEXT_PUBLIC_SITE_URL}${image}`
    : image;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
    </Head>
  );
};

export default generateMetaTags;
