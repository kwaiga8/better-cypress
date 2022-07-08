import { LoginPage } from "../../support/views/login/loginPage";
import { MainShopPage } from "../../support/views/inventory/inventory";
import { Item } from "../../support/locators/inventory/inventory";
import { CartPage } from "../../support/views/inventory/cartPage";
import { CheckoutPage } from "../../support/views/purchasing/checkoutPage";

describe("User can buy products from page", () => {
  const loginPage: LoginPage = new LoginPage();
  const shopPage: MainShopPage = new MainShopPage();
  const cartPage: CartPage = new CartPage();
  const checkoutPage: CheckoutPage = new CheckoutPage();

  before(()=>{
    loginPage.login();
    shopPage.isVisible();
  })

  it("is possible to add items to a cart and finalize purchasing ", () => {
    shopPage.addItem(Item.bag);
    shopPage.addItem(Item.blackTshirt);
    shopPage.addItem(Item.jacket);
    shopPage.cart.open();
    cartPage.isVisible();
    cartPage.hasNumberOfItems(3);
    cartPage.goToCheckout();
    checkoutPage.isVisible();
  });

});