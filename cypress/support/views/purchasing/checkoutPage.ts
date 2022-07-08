import { checkoutPage } from '../../locators/purchasing/checkoutPage'

export class CheckoutPage {
  get continueBtn() {
    return cy.getBy(checkoutPage.continueBtn)
  }

  get title() {
    return cy.get(checkoutPage.title)
  }

  isVisible() {
    this.title.should('have.text', 'Checkout: Your Information')
    this.continueBtn.isVisible()
  }
}
