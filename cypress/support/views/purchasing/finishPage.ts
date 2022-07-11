import { AppPage } from '../../views/common/appPage'
import { finishPage } from '../../locators/purchasing/finishPage'

export class FinishPage extends AppPage {
  public title: string = 'Checkout: Complete!'
  public url: string = '/checkout-complete.html'

  get headerBanner() {
    return cy.get(finishPage.headerBanner)
  }

  get noticeForClient() {
    return cy.get(finishPage.finalInfo)
  }

  get finialImage() {
    return cy.get(finishPage.ponyImage)
  }

  isCorrectlyLoaded() {
    super.isCorrectlyLoaded()
    this.finialImage.isVisible()
  }
}
