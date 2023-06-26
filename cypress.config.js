const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: 'http://127.0.0.1:5502',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
