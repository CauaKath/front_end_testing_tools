const { By, WebDriver } = require('selenium-webdriver');

class Base {
  /**
   * 
   * @param {WebDriver} driver 
   * @param {String} selector 
   */
  constructor(driver, selector = '') {
    this.driver = driver;
    this.selector = selector;
  }

  async findElement() {
    const elements = await this.driver.findElements(By.css(this.selector));
    return elements[0];
  }

  async findElementByCss(selector) {
    const elements = await this.driver.findElements(By.css(selector));
    return elements[0];
  }

  async exists() {
    const driver = this.driver;
    const selector = this.selector;

    const element = await driver.wait(function () {
      return driver.findElement(By.css(selector)).isDisplayed();
    }, 3000);

    return !!element;
  }
}

module.exports = Base;