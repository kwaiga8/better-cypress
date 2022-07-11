import { checkoutPage } from '../../locators/purchasing/checkoutPage'
import { AppPage } from '../common/appPage'

export class CheckoutPage extends AppPage {
  public title: string = 'Checkout: Your Information'
  public url: string = '/checkout-step-one.html'

  get continueBtn() {
    return cy.getBy(checkoutPage.continueBtn)
  }

  get nameInput() {
    return cy.getBy(checkoutPage.nameInput)
  }

  get lastNameInput() {
    return cy.getBy(checkoutPage.lastNameInput)
  }

  get zipCodeInput() {
    return cy.getBy(checkoutPage.zipCode)
  }

  submit() {
    this.continueBtn.click()
  }

  fillOutCorrectlyForm() {
    this.nameInput.type('TypeScriptTester')
    this.lastNameInput.type('WillDoE2Etests')
    this.zipCodeInput.type('21-370')
    this.submit()
  }
}
