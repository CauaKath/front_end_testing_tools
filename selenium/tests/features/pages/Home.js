const Base = require('./Base');

const PAGE_IDENTIFIER = '#modalDashboard';

class Home extends Base {
  constructor(driver) {
    super(driver, PAGE_IDENTIFIER);
  }

  async isPageLoaded() {
    return await this.exists();
  }
}

module.exports = Home;