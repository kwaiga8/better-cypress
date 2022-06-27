import { inventoryPage, Item } from "../../locators/inventory/inventory";
import { Cart } from "./cart";

export class InventoryPage {

public cart: Cart = new Cart()

  get burgerMenu() {
    return cy.get(inventoryPage.cartIcon);
  }

  get header() {
    return cy.get(inventoryPage.header);
  }

  addItem(item: Item) {
    cy.getBy(`add-to-cart-sauce-labs-${item}`).scrollIntoView().click();
 }

  removeItem(item: Item) {
    cy.getBy(`remove-sauce-labs-${item}`).scrollIntoView().click();
  }

  removeAllItems() {
    cy.getByPartial('remove-sauce-labs').click({multiple: true});
  }


  isVisible() {
    this.cart.cartIcon.isVisible();
    this.header.isVisible().should('have.text', 'Products');
    this.burgerMenu.isVisible();
  }


}