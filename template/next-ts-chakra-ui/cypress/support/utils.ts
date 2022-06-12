// https://github.com/avanslaars/cypress-axe#in-your-spec-file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logA11yViolations = (violations: any[]) => {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    })
  );

  cy.task('table', violationData);
};

// Use `cypress-axe` to check the page for accessibility violations
// https://github.com/component-driven/cypress-axe#cychecka11y
export const checkA11y = () => {
  cy.injectAxe();
  cy.checkA11y(
    {
      // Ignore Chakra UI toast manager until a11y issues are fixed
      // https://github.com/chakra-ui/chakra-ui/issues/6164
      exclude: [
        ['#chakra-toast-manager-top'],
        ['#chakra-toast-manager-top-left'],
        ['#chakra-toast-manager-top-right'],
        ['#chakra-toast-manager-bottom'],
        ['#chakra-toast-manager-bottom-left'],
        ['#chakra-toast-manager-bottom-right'],
      ],
    },
    undefined,
    logA11yViolations
  );
};
