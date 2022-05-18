/// <reference types="cypress" />
 declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-test test attribute.
             * @example const searchbar = cy.getBy('searchField').get('input');
             */
            getBy: (
                dataTestAttribute: string,
                args?: any,
            ) => typeof import('./commands/selectors').getBy;
            /**
             *
             *<p>Chainable custom command for checking </p>
             *<p>element visibility</p>
             *<p>It will check if element exist</p>
             *<p> and if it is visible using chai assertions</p>
             * @example
             *  cy.get('#btn').isVisible().click();
             * */
            isVisible: () => typeof import('./commands/assertions').isVisible;
        }
    }
}