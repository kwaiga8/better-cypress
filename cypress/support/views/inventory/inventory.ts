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

  get babyBodyAddBtn(){
    return cy.getBy(inventoryPage.items.babyBody.addBtn);
  }

  get babyBodyRemoveBtn(){
    return cy.getBy(inventoryPage.items.babyBody.removeBtn);
  }

  get jacketAddBtn(){
    return cy.getBy(inventoryPage.items.jacket.addBtn);
  }

  get bagAddBtn(){
    return cy.getBy(inventoryPage.items.bag.addBtn);
  }

  get cartItemCounter(){
    return cy.get(inventoryPage.cartItemCounter);
  }

  addBabyBody() {
     this.babyBodyAddBtn.scrollIntoView().click();
  }

  removeBabyBody(){
    this.babyBodyRemoveBtn.scrollIntoView().click();
  }

  addJacket() {
    this.jacketAddBtn.scrollIntoView().click();
  }

  addBag() {
    this.bagAddBtn.scrollIntoView().click();
  }
  cartItemCounterShowsValue(itemCount: number){
    this.cartItemCounter.should('have.text', itemCount);
  }




  isVisible() {
    this.cartIcon.isVisible();
    this.header.isVisible().should('have.text', 'Products');
    this.burgerMenu.isVisible();
  }


}