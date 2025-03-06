
import './commands'
import '@badeball/cypress-cucumber-preprocessor';
import 'cypress-mochawesome-reporter/register';


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});