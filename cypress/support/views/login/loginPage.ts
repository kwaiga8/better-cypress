import { loginPage } from "../../locators/login/loginPage";

export class LoginPage {
  public form : LoginForm = new LoginForm();

  visit() {
    cy.visit('');
  }

  get errorPopup() {
    return cy.getBy(loginPage.errorPopup);
  }

}

export class LoginForm {
  get loginButton() {
    return cy.getBy(loginPage.loginButton);
  }

  submit(){
    this.loginButton.click();
  }




}