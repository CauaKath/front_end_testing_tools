class Base {
  /**
   * 
   * @param {String} selector 
   */
  constructor(selector) {
    this.selector = selector
  }

  exists() {
    return cy.get(this.selector).should('exist')
  }
}

module.exports = Base