const puppeteer = require('puppeteer')
const { email, password } = require('../credentials/login.json')

describe('do login', () => {
  const URL = 'https://simplificamais.portaldocliente.online/'

  const EMAIL_INPUT_SELECTOR = 'input[type="email"]'
  const PASSWORD_INPUT_SELECTOR = 'input[type="password"]'
  const BUTTON_SELECTOR = 'button.btn-primary'
  const HOME_MODAL_SELECTOR = '#modalDashboard'

  async function fillEmailInput(page, email) {
    await page.waitForSelector(EMAIL_INPUT_SELECTOR, { visible: true })

    await page.type(EMAIL_INPUT_SELECTOR, email, {
      delay: 100,
    })
  }

  async function fillPasswordInput(page, password) {
    await page.waitForSelector(PASSWORD_INPUT_SELECTOR, { visible: true })

    await page.type(PASSWORD_INPUT_SELECTOR, password, {
      delay: 100,
    })
  }

  async function clickContinueButton(page) {
    await page.click(BUTTON_SELECTOR, { timeout: 1000 })
  }

  let browser

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
    })
  })
  
  it('should login with valid credentials', async () => {
    const [page] = await browser.pages()

    await page.goto(URL, { waitUntil: 'networkidle2' })

    await fillEmailInput(page, email)

    await clickContinueButton(page)

    await fillPasswordInput(page, password)

    await clickContinueButton(page)

    await page.waitForSelector(HOME_MODAL_SELECTOR, { visible: true })
  }, 15000)

  afterAll(async () => {
    await browser.close()
  })
})