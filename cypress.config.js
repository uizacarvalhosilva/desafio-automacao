const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: process.env.BASE_URL,
      usuario: process.env.USUARIO,
      senha: process.env.SENHA,
      usuario_incorreto: process.env.USUARIO_INCORRETO,
      senha_incorreta: process.env.SENHA_INCORRETA,
    },
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  screenshotOnRunFailure: false,
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
  },
});
