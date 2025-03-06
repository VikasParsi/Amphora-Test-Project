import { Given, When, Then, defineStep } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../support/Locaters";

Given("I visit the Amphora site", () => {
  cy.visit('/');
});

defineStep("I click on all products from the Products dropdown", () => {
  cy.viewport(1280, 720)
  cy.contains('Products').trigger('mouseover').click();
  cy.get(locators.Submenu).first().should('exist')
});
defineStep("I click on {string} from the Products dropdown", (expectedTitle) => {
  cy.verifyProductNavigation(expectedTitle);

});
defineStep("I sign up for the newsletter under the Resources dropdown and validating the message", () => {
  cy.visit('/');
  cy.viewport(1280, 720)
  cy.verifyNewsletterSignup("testuser@example.com");
});

