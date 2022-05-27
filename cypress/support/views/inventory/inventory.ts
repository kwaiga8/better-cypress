import { inventoryPage } from "../../locators/inventory/inventory";

export class InventoryPage {

  get cartIcon() {
    return cy.get(inventoryPage.cartIcon);
  }

  get burgerMenu() {
    return cy.get(inventoryPage.cartIcon);
  }

  get header() {
    return cy.get(inventoryPage.header);
  }


  isVisible() {
    this.cartIcon.isVisible();
    this.header.isVisible().should('have.text', 'Products');
    this.burgerMenu.isVisible();
  }


}