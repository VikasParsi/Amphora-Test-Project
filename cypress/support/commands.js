import locators from "./Locaters";
import AlertMessages from '../fixtures/AlertMessages.json'
Cypress.Commands.add("verifyProductNavigation", (expectedTitle) => {
  cy.get(locators.EachProductLink).contains(expectedTitle).click({ force: true });
  cy.get(locators.EachProductTitle).should("be.visible").and("contain", expectedTitle);
  cy.log(`Navigated to: ${expectedTitle}`);
  cy.get(locators.EachProductTitle).then(($title) => {
    expect($title.text().trim()).to.eq(expectedTitle);
  });
});

Cypress.Commands.add("verifyNewsletterSignup", () => {
  cy.contains("Resources").trigger("mouseover"); 
  cy.get(locators.EachProductLink).contains("Newsletter sign-up").click({ force: true }); 
  cy.get(locators.EmailInput).should("be.visible").type("test123@gmail.com");
  cy.get(locators.FirstName).should("be.visible").type("test"); 
  cy.get(locators.LastName).scrollIntoView().should("be.visible").type("Amphora"); 
  cy.get(locators.Signin).scrollIntoView().click();
  cy.get(locators.ThankYouMessage).should("be.visible")
    .and("contain", AlertMessages.signupThankYouMsg);
});
