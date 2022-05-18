import {getBy} from "./selectors";
import {isVisible} from "./assertions";

/* Selectors commands */
Cypress.Commands.add('getBy', getBy);

/* Assertions commands */
Cypress.Commands.add('isVisible', { prevSubject: true }, isVisible);