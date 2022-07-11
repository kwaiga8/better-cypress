import { cartPage } from '../../locators/inventory/cart'
import { AppPage } from '../common/appPage'

export class CartPage extends AppPage {
  public title: string = 'Your Cart'
  public url: string = '/cart.html'

  get checkoutBtn() {
    return cy.getBy(cartPage.checkoutBtn)
  }

  get inventoryList() {
    return cy.get(cartPage.inventoryList)
  }

  hasNumberOfItems(numberOfItems: number) {
    return this.inventoryList.should('have.length', numberOfItems)
  }

  goToCheckout() {
    this.checkoutBtn.scrollIntoView().click()
  }
}
