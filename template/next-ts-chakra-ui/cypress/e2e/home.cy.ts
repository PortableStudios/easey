import { checkA11y } from '../support/utils';

describe('Home', () => {
  it('loads successfully', () => {
    cy.visit('/');
  });

  it('has no detectable a11y violations on load', () => {
    cy.visit('/');
    checkA11y();
  });
});
