/// <reference types="cypress" />

// https://github.com/avanslaars/cypress-axe#in-cypress-plugins-file
const conf = (on: Cypress.PluginEvents): void => {
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
    table(message) {
      console.table(message);
      return null;
    },
  });
};

export default conf;
