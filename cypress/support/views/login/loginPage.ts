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

  //unfortunately there is no option to login via API to this demo page
  //so we need to login by form
  login() {
    this.visit();
    this.form.passCorrectUsername();
    this.form.passCorrectPassword();
    this.form.submit();
  }

}