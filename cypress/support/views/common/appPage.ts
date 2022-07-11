import { page } from '../../locators/page.common'

export interface IAppPage {
  title: string
  url: string
}

export abstract class AppPage implements IAppPage {
  public title: string
  public url: string

  get header() {
    return cy.get(page.header)
  }

  isCorrectlyLoaded(): void {
    this.header.isVisible().should('have.text', this.title)
    cy.url().should('contain', this.url)
  }
}
