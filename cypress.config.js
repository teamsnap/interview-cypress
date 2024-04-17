const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  blockHosts: ['a.clarity.ms*', 'gum.criteo*'], // improves page load speed
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
