import { LoginPage } from '../../support/views/login/loginPage'
import { MainShopPage } from '../../support/views/inventory/inventory'
import { Item } from '../../support/locators/inventory/inventory'
import { CartPage } from '../../support/views/inventory/cartPage'
import { CheckoutPage } from '../../support/views/purchasing/checkoutPage'
import { OverviewPage } from '../../support/views/purchasing/overviewPage'
import { FinishPage } from '../../support/views/purchasing/finishPage'

describe('User can buy products from page, simplest happy path end to end scenario', () => {
  const loginPage: LoginPage = new LoginPage()
  const shopPage: MainShopPage = new MainShopPage()
  const cartPage: CartPage = new CartPage()
  const checkoutPage: CheckoutPage = new CheckoutPage()
  const overviewPage: OverviewPage = new OverviewPage()
  const finishPage: FinishPage = new FinishPage()

  before(() => {
    loginPage.login()
    shopPage.isCorrectlyLoaded()
  })

  it('is possible to add item to a cart and finalize purchasing ', () => {
    shopPage.addItem(Item.blackTshirt)
    shopPage.cart.open()
    cartPage.isCorrectlyLoaded()
    cartPage.hasNumberOfItems(1)
    cartPage.goToCheckout()
    checkoutPage.isCorrectlyLoaded()
    checkoutPage.fillOutCorrectlyForm()
    overviewPage.isCorrectlyLoaded()
    overviewPage.finishShopping()
    finishPage.isCorrectlyLoaded()
    finishPage.headerBanner.isVisible().withInfo('THANK YOU FOR YOUR ORDER')
    finishPage.noticeForClient
      .isVisible()
      .withInfo(
        'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
      )
  })
})
