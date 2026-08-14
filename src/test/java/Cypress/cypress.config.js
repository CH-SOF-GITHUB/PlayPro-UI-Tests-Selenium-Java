const {defineConfig} = require("cypress");


module.exports = defineConfig({
    video: true, // generate videos for builds
    reporter: 'mocha-junit-reporter', // generate junit reports
    reporterOptions: {
        mochaFile: 'cypress/results/results-[hash].xml', // output file for junit reports
        toConsole: true, // output to console
    },
    e2e: {
        // Désactivez allowCypressEnv si nécessaire : Ajoutez cette option dans votre configuration pour éviter l'avertissement lié à Cypress.env()
        AllowCypressEnv: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
            const {plugin: cypressGrepPlugin} = require('@cypress/grep/plugin');
            cypressGrepPlugin(config);
            return config;
        },
        chromeWebSecurity: false,
        baseUrl: "https://chakerqa.playpro.fr/",
        pageLoadTimeout: 60000,
        specPattern: "cypress/e2e/**/*.cy.js",
        supportFile: false
    },
});
