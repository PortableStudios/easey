// List of node_modules that need to be transpiled, usually for IE11 support
// Used to modify the Webpack configs of Next.js and Storybook (see: next.config.js and .storybook/main.js)
module.exports = [
  'next',
  'toasted-notes',
  '@chakra-ui/(.*)', // all Chakra UI modules
  '@react-aria/(.*)', // all React ARIA modules
];
