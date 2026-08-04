const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://luizonclara.github.io/clara-qa-lab",
        specPattern: "cypress/e2e/*.cy.js",
        supportFile: false,
        setupNodeEvents(on, config) { },
    },
});
