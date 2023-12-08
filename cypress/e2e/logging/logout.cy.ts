import { LoginPage } from '../../support/views/login/loginPage'
import { MainShopPage } from '../../support/views/inventory/inventory'

describe('User can successfully log out', () => {
  const loginPage: LoginPage = new LoginPage()
  const mainShopPage: MainShopPage = new MainShopPage()

  beforeEach(() => {
    loginPage.visit()
    loginPage.form.passCorrectUsername()
    loginPage.form.passCorrectPassword()
    loginPage.form.submit()
    mainShopPage.isCorrectlyLoaded()
  })

  it('is possible to log out', () => {
    mainShopPage.isCorrectlyLoaded()
  })

 
})
