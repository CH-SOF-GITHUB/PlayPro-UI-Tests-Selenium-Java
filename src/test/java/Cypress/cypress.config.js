const {defineConfig} = require("cypress");


module.exports = defineConfig({
    e2e: {
        // Désactivez allowCypressEnv si nécessaire : Ajoutez cette option dans votre configuration pour éviter l'avertissement lié à Cypress.env()
        AllowCypressEnv: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
            const {plugin: cypressGrepPlugin} = require('@cypress/grep/plugin');
            cypressGrepPlugin(config);
            return config;
        },
        baseUrl: "https://chakerqa.playpro.fr",
        specPattern: "cypress/e2e/**/*.cy.js",
        supportFile: false
    },
});
