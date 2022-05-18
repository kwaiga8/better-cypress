/// <reference types="cypress" />
import Chainable = Cypress.Chainable;

export function getBy(selector: any, ...args: any[]): Chainable<JQuery<HTMLElement>> {
    return cy.get(`[data-test=${selector}]`, ...args);
}
