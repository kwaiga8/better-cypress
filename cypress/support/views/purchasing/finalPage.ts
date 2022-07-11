import { AppPage } from '../../views/common/appPage'
import { finalPage } from '../../locators/purchasing/finalPage'

export class FinalPage extends AppPage {
  public title: string = 'Checkout: Complete!'
  public url: string = '/checkout-complete.html'

  get headerBanner() {
    return cy.get(finalPage.headerBanner)
  }

  get noticeForClient() {
    return cy.get(finalPage.finalInfo)
  }

  get finialImage() {
    return cy.get(finalPage.ponyImage)
  }

  isCorrectlyLoaded() {
    super.isCorrectlyLoaded()
    this.finialImage.isVisible()
  }
}
