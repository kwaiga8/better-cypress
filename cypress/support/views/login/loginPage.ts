import { loginPage } from "../../locators/login/loginPage";
import { LoginForm } from "./loginForm";

export class LoginPage {
  public form : LoginForm = new LoginForm();

  visit() {
    cy.visit('');
  }

  get errorPopup() {
    return cy.getBy(loginPage.errorPopup);
  }

}