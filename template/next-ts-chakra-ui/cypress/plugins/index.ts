/// <reference types="cypress" />

// https://github.com/avanslaars/cypress-axe#in-cypress-plugins-file
const conf: Cypress.PluginConfig = (on) => {
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
