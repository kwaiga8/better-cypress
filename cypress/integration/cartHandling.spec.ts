import {  InventoryPage } from "../support/views/inventory/inventory";
import { LoginPage } from "../support/views/login/loginPage";
import { Item } from "../support/locators/inventory/inventory";

describe("User can add and remove items to the card", () => {
  let loginPage: LoginPage = new LoginPage();
  let inventoryPage: InventoryPage = new InventoryPage();

  before(()=>{
    loginPage.login();
    inventoryPage.isVisible();
  })

  it("is possible to add and remove items to the cart", () => {
    //--add
    inventoryPage.addItem(Item.babyBody);
    inventoryPage.cart.showsValue(1);
    inventoryPage.addItem(Item.jacket);
    inventoryPage.cart.showsValue(2);
    inventoryPage.addItem(Item.bag);
    inventoryPage.cart.showsValue(3);
    //-remove
    inventoryPage.removeItem(Item.babyBody)
    inventoryPage.cart.showsValue(2);
    inventoryPage.removeAllItems();
    inventoryPage.cart.isEmpty();
  });

  });