const Base = require("./Base")

const PAGE_IDENTIFIER = '.container'

const EMAIL_INPUT_SELECTOR = 'input[type="email"]'
const PASSWORD_INPUT_SELECTOR = 'input[type="password"]'
const CONTINUE_BUTTON_SELECTOR = '.btn-primary'

class Login extends Base {
  URL = 'https://simplificamais.portaldocliente.online/'

  constructor() {
    super(PAGE_IDENTIFIER)
  }

  open() {
    cy.visit(this.URL)
  }

  fillEmail(email) {
    cy.get(EMAIL_INPUT_SELECTOR).should('be.visible').type(email)
  }

  checkEmailFilled(email) {
    cy.get(EMAIL_INPUT_SELECTOR).should('have.value', email)
  }

  fillPassword(password) {
    cy.get(PASSWORD_INPUT_SELECTOR).should('be.visible').type(password)
  }

  clickContinueButton() {
    cy.get(CONTINUE_BUTTON_SELECTOR).should('be.visible').click()
  }

}

module.exports = Login