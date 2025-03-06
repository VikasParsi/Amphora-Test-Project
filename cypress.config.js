const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.amphora.net",
    
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      
      on("file:preprocessor", 
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );

      return config;
    },
  },
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Amphora UI Test Report',
    embeddedScreenshots: true,
    inlineAssets: true
  }
});