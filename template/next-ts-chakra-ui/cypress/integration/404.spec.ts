import { logA11yViolations } from '../support/utils';

describe('404', () => {
  it('loads successfully', () => {
    cy.visit('/foobar', { failOnStatusCode: false });
  });

  it('displays "page not found" heading on load', () => {
    cy.visit('/foobar', { failOnStatusCode: false });
    cy.findByRole('heading', { name: /page not found/i }).should('be.visible');
  });

  it('returns 404 status code', () => {
    cy.request({ url: '/foobar', failOnStatusCode: false }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it('has no detectable a11y violations on load', () => {
    cy.visit('/foobar', { failOnStatusCode: false });
    cy.injectAxe();
    cy.checkA11y(undefined, undefined, logA11yViolations);
  });
});
