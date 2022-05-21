export function isVisible(subject: { selector: any }) {
  Cypress.log({
    displayName: 'isVisible',
    message: `Element ${subject.selector} should be visible`
  });
  cy.wrap(subject).should('exist').and('be.visible');
}

export function hasValidationError(subject: { selector: any }) {
  cy.wrap(subject).should('have.class', 'input_error' );
  Cypress.log({
    displayName: 'hasValidationError',
    message: `Element ${subject.selector} should have class input_error`
  });
}

export function withInfo(subject: { selector: any }, text: string) {
  cy.wrap(subject).should('contain.text', text );
}