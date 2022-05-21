import { loginPage } from "../../locators/login/loginPage";

export class LoginForm {
  private username: string = "standard_user";
  private password: string = "secret_sauce";
  private incorrectPassword: string = "some_ugly_password";
  private incorrectUsername: string = "no_user";

  get usernameInput(){
    return cy.getBy(loginPage.usernameInput);
  }

  get passwordInput(){
    return cy.getBy(loginPage.passwordInput);
  }


  get loginButton() {
    return cy.getBy(loginPage.loginButton);
  }

  submit(){
    this.loginButton.click();
  }

  passCorrectUsername(){
    this.usernameInput.type(this.username);
  }

  passCorrectPassword(){
    this.passwordInput.type(this.password);
  }

  passIncorrectPassword() {
    this.passwordInput.type(this.incorrectPassword);

  }

  passIncorrectUsername() {
    this.usernameInput.type(this.incorrectUsername);

  }
}