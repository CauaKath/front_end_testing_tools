const { Before, After } = require("cucumber");
const { Capabilities, Builder } = require('selenium-webdriver');

Before(async function(scenario) {
  console.info("Before hook");

  const capabilities = Capabilities.chrome().set('chromeOptions', { "w3c": false });
  const driver = await new Builder().withCapabilities(capabilities).build();

  this.driver = driver;

  await this.driver.manage().setTimeouts({ implicit: 2000 });
});

After(async function(scenario) {
  console.info("After hook");

  await this.driver.takeScreenshot().then(
    function(image, err) {
      require('fs').writeFile('tests/results/out.png', image, 'base64', function(err) {
        console.error(err);
      });
    }
  );
  
  this.driver.quit();
});