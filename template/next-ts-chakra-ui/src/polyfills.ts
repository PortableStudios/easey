import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

// Add polyfill to fix development mode not working on IE11
// https://github.com/vercel/next.js/issues/13231#issuecomment-712179844
if (process.env.NODE_ENV === 'development') {
  require('@webcomponents/shadydom');
}

export default {};
