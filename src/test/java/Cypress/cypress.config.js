const {defineConfig} = require("cypress");
// Charge le fichier .env depuis le dossier de ressources Maven
require('dotenv').config({path: '../../resources/.env'});

module.exports = defineConfig({
    video: true, // generate videos for builds
    reporter: 'mocha-junit-reporter', // generate junit reports
    reporterOptions: {
        mochaFile: 'cypress/results/results-[hash].xml', // output file for junit reports
        toConsole: true, // output to console
    },
    // Autorise l'ancienne syntaxe Cypress.env() synchrone sans erreur
    allowCypressEnv: true,

    e2e: {
        // Désactivez allowCypressEnv si nécessaire : Ajoutez cette option dans votre configuration pour éviter l'avertissement lié à Cypress.env()
        // allowCypressEnv: false,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
            const {plugin: cypressGrepPlugin} = require('@cypress/grep/plugin');
            cypressGrepPlugin(config);
            // On associe la variable du fichier .env à l'environnement Cypress
            config.env.PAYMENT_AUTH_TOKEN = process.env.PAYMENT_AUTH_TOKEN;
            return config;
        },
        baseUrl: "https://chakerqa.playpro.fr/",
        pageLoadTimeout: 60000,
        specPattern: "cypress/e2e/**/*.cy.js",
        supportFile: false
    },
});
