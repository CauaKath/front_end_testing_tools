const Login = require('../../src/pages/Login')
const Home = require('../../src/pages/Home')

const { email, password } = require('../../src/credentials/login.json')

describe('do login', () => {
  it('open', () => {
    const loginPage = new Login()

    loginPage.open()

    loginPage.fillEmail(email)

    loginPage.checkEmailFilled(email)

    loginPage.clickContinueButton()

    loginPage.fillPassword(password)

    loginPage.clickContinueButton()

    const homePage = new Home()

    homePage.exists()
  })
})