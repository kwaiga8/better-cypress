import {  MainShopPage } from "../support/views/inventory/inventory";
import { LoginPage } from "../support/views/login/loginPage";
import { Item } from "../support/locators/inventory/inventory";

describe("User can add and remove items to the card on the shop inventory page", () => {
  const loginPage: LoginPage = new LoginPage();
  const shopPage: MainShopPage = new MainShopPage();

  before(()=>{
    loginPage.login();
    shopPage.isVisible();
  })

  it("is possible to add and remove items to the cart", () => {
    //--add
    shopPage.addItem(Item.babyBody);
    shopPage.cart.showsValue(1);
    shopPage.addItem(Item.jacket);
    shopPage.cart.showsValue(2);
    shopPage.addItem(Item.bag);
    shopPage.cart.showsValue(3);
    //-remove
    shopPage.removeItem(Item.babyBody)
    shopPage.cart.showsValue(2);
    shopPage.removeAllItems();
    shopPage.cart.isEmpty();
  });

  });