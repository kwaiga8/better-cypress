import {  InventoryPage } from "../support/views/inventory/inventory";
import { LoginPage } from "../support/views/login/loginPage";

describe("User can add and remove items to the card", () => {
  let loginPage: LoginPage = new LoginPage();
  let inventoryPage: InventoryPage = new InventoryPage();

  before(()=>{
    loginPage.login();
    inventoryPage.isVisible();
  })

  it("is possible to add items to the cart", () => {
    inventoryPage.addBabyBody();
    inventoryPage.cartItemCounter.isVisible();
    inventoryPage.cartItemCounterShowsValue(1);
    inventoryPage.addJacket();
    inventoryPage.cartItemCounterShowsValue(2);
    inventoryPage.addBag();
    inventoryPage.cartItemCounterShowsValue(3);
  });

  it("is possible to remove  items to the cart", () => {
     inventoryPage.removeBabyBody();
     inventoryPage.cartItemCounterShowsValue(2);
  });

  });