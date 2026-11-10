import { defineConfig } from 'cypress';

import plugins from './cypress/plugins';

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on) {
      plugins(on);
    },
  },
});
