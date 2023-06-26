const Base = require('./Base');
const { By, WebDriver } = require('selenium-webdriver');

const PAGE_IDENTIFIER = '.container';

class Login extends Base {
  /**
   * 
   * @param {WebDriver} driver 
   */
  constructor(driver) {
    super(driver, PAGE_IDENTIFIER);
  }

  async isPageLoaded() {
    return await this.exists();
  }

  async fillEmail(email) {
    const emailField = await this.findElementByCss('[name="email"]');

    await emailField.sendKeys(email);
  }

  async fillPassword(password) {
    const driver = this.driver;

    await driver.wait(function () {
      return driver.findElement(By.css('[name="password"]')).isDisplayed();
    }, 3000);

    const passwordField = await this.findElementByCss('[name="password"]');
    await passwordField.sendKeys(password);
  }

  async clickContinueButton() {
    const continueButton = await this.findElementByCss('.btn');

    await continueButton.click();
  }
}

module.exports = Login;