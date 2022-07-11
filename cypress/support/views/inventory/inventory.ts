import { inventoryPage, Item } from '../../locators/inventory/inventory'
import { Cart } from './cart'
import { AppPage, IAppPage } from '../common/appPage'

export class MainShopPage extends AppPage {
  public title: string = 'Products'
  public url: string = '/inventory.html'
  public cart: Cart = new Cart()

  get burgerMenu() {
    return cy.get(inventoryPage.cartIcon)
  }

  addItem(item: Item) {
    cy.getBy(`add-to-cart-sauce-labs-${item}`).scrollIntoView().click()
  }

  removeItem(item: Item) {
    cy.getBy(`remove-sauce-labs-${item}`).scrollIntoView().click()
  }

  removeAllItems() {
    cy.getByPartial('remove-sauce-labs').click({ multiple: true })
  }

  isCorrectlyLoaded() {
    super.isCorrectlyLoaded()
    this.burgerMenu.isVisible()
  }
}
