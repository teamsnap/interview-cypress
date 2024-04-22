const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  blockHosts: ['a.clarity.ms*', 'gum.criteo*', '*privacymanager*', '*googletagmanager*'], // improves page load speed
  viewportHeight: 900,
  viewportWidth: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
