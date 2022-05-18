export function isVisible(subject: { selector: any }) {
  Cypress.log({
    displayName: "isVisible",
    message: `Element ${subject.selector} should be visible`
  });
  cy.wrap(subject).should("exist").and("be.visible");
}