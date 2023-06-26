const { Given, When, Then } = require('cucumber');
const And = Then
const Login = require('../pages/Login');
const Home = require('../pages/Home');

let login;

Given('I am on the login page', async function () {
  login = new Login(this.driver);
  
  await this.driver.get('https://simplificamais.portaldocliente.online/');
});

When('I fill the email field with {string}', async function (email) {
  await login.fillEmail(email);
});

And('I press the Continuar button', async function () {
  await login.clickContinueButton();
});

When('I fill the password field with {string}', async function (password) {
  await login.fillPassword(password);
});

And('I press the Continuar button again', async function () {
  await login.clickContinueButton();
});

Then('I should be logged in', async function () {
  const home = new Home(this.driver);

  await home.isPageLoaded();

  console.info("I'm logged in");
});