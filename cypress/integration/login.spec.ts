import {LoginPage } from "../support/views/login/loginPage";

describe("User can successfully log in only with valid credentials", () => {
  let loginPage: LoginPage = new LoginPage();

  beforeEach(()=>{
    loginPage.visit();
  })

  it("is impossible to login without providing password", () => {
    loginPage.form.passCorrectUsername();
    loginPage.form.submit();
    loginPage.errorPopup.isVisible().withInfo('Password is required');
    loginPage.form.passwordInput.hasValidationError();
  });

  it("is impossible to login without providing username", () => {
    loginPage.form.passCorrectPassword()
    loginPage.form.submit();
    loginPage.errorPopup.isVisible().withInfo('Username is required')
    loginPage.form.usernameInput.hasValidationError();
  });

  it("is impossible to login with incorrect password", () => {
    loginPage.form.passCorrectUsername();
    loginPage.form.passIncorrectPassword()
    loginPage.form.submit();
    loginPage.errorPopup.isVisible().withInfo('Username and password do not match any user in this service');
  });

  it("is impossible to login with incorrect username", () => {
    loginPage.form.passIncorrectUsername();
    loginPage.form.passCorrectPassword()
    loginPage.form.submit();
    loginPage.errorPopup.isVisible().withInfo('Username and password do not match any user in this service');
  });

  it("is impossible to login without providing username and password", () => {
    loginPage.form.submit();
    loginPage.errorPopup.isVisible();
  });

  xit("is accessible possible to login with correct credentials", () => {
  });
});

