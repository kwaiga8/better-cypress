import { inventoryPage } from "../../locators/inventory/inventory";

export class Cart {

  get cartIcon() {
    return cy.get(inventoryPage.cartIcon);
  }
  get itemCounter(){
    return cy.get(inventoryPage.cartItemCounter);
  }

   showsValue(itemCount: number){
    this.itemCounter.should('have.text', itemCount);
  }

  isEmpty(){
    cy.get(inventoryPage.cartItemCounter).should('not.exist');
  }

}
