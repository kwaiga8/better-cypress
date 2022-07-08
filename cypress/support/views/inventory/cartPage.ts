import { cartPage } from '../../locators/inventory/cart'

export class CartPage {
  get checkoutBtn() {
    return cy.getBy(cartPage.checkoutBtn)
  }

  get inventoryList() {
    return cy.get(cartPage.inventoryList)
  }

  get title() {
    return cy.get(cartPage.title)
  }

  isVisible() {
    this.title.should('have.text', 'Your Cart')
    this.checkoutBtn.isVisible()
  }

  hasNumberOfItems(numberOfItems: number) {
    return this.inventoryList.should('have.length', numberOfItems)
  }

  goToCheckout() {
    this.checkoutBtn.scrollIntoView().click()
  }
}
