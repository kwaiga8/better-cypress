import {getBy} from "./selectors";
import { hasValidationError, isVisible, withInfo } from "./assertions";

/* Selectors commands */
Cypress.Commands.add('getBy', getBy);

/* Assertions commands */
Cypress.Commands.add('isVisible', { prevSubject: true }, isVisible);
Cypress.Commands.add('hasValidationError', { prevSubject: true }, hasValidationError);
Cypress.Commands.add('withInfo', { prevSubject: true }, withInfo);