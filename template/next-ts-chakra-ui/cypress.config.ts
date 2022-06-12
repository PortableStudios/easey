import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('./cypress/plugins/index.ts').default(on, config);
    },
  },
});
