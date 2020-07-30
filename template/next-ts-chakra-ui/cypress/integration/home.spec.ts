import { logA11yViolations } from '../support/utils';

describe('Home', () => {
  it('loads successfully', () => {
    cy.visit('/');
  });

  it('has no detectable a11y violations on load', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y(undefined, undefined, logA11yViolations);
  });
});
