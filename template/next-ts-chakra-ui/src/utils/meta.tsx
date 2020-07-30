import React from 'react';

export type MetaTagProps = {
  title?: string;
  description?: string;
  image?: string;
};

const generateMetaTags = ({
  title,
  description = 'This is a Portable website.',
  image = require('@/images/cover.jpg'),
}: MetaTagProps = {}) => {
  const fullTitle = `${title} - Portable`;
  const fullImageUrl = `${process.env.SITE_URL}${image}`;
  return (
    <>
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
    </>
  );
};

export default generateMetaTags;
