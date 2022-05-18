import {LoginPage } from "../support/views/login/loginPage";

describe("User can succesfully log in only with valid credentials", () => {
  let loginPage: LoginPage = new LoginPage();

  xit("is accessible possible to login with correct credentials", () => {
  });


  it("is impossible to login without providing username and password", () => {
    loginPage.visit();
    loginPage.form.submit();
    loginPage.errorPopup.isVisible();
  });
});
