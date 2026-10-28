const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://se-primer-2.ai.studio",
    viewportWidth: 390,
    viewportHeight: 844,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false,
  },
});
