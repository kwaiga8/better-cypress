import { AppPage } from '../common/appPage'
import { overviewPage } from '../../locators/purchasing/overviewPage'

export class OverviewPage extends AppPage {
  public title: string = 'Checkout: Overview'
  public url: string = '/checkout-step-two.html'

  get finishBtn() {
    return cy.getBy(overviewPage.finishBtn)
  }

  finishShopping() {
    this.finishBtn.click()
  }
}
