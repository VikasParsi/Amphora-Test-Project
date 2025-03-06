import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let createdPetId;
let initialPetData;

Given('I create a new pet', () => {

  initialPetData = {
    id: 3310,
    name: `TestPet-${Math.random().toString(36).substring(7)}`,
    status: 'available',
    category: {
      id: 1,
      name: 'Dog'
    },
    tags: [
      {
        id: 1,
        name: 'Friendly'
      }
    ]
  };

  cy.request({
    method: 'POST',
    url: 'https://petstore.swagger.io/v2/pet',
    body: initialPetData,
    failOnStatusCode: true
  }).then((response) => {
    expect(response.status).to.eq(200);
    createdPetId = response.body.id;
  });
});

Then('I should get the pet created response', () => {
  cy.request({
    method: 'GET',
    url: `https://petstore.swagger.io/v2/pet/${createdPetId}`,
    failOnStatusCode: false
  }).then((response) => {

    cy.log('Get Pet Response', response);
    if (response.status === 404) {
      throw new Error(`Pet with ID ${createdPetId} not found`);
    }
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('id', createdPetId);
  });
});

When('I update the pet with new details', () => {
  const updatedPetData = {
    ...initialPetData,
    name: `UpdatedPet-${Math.random().toString(36).substring(7)}`,
    status: 'pending'
  };
  cy.request({
    method: 'PUT',
    url: 'https://petstore.swagger.io/v2/pet',
    body: updatedPetData,
    failOnStatusCode: true
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then('I should get the pet updated response', () => {

  cy.request({
    method: 'GET',
    url: `https://petstore.swagger.io/v2/pet/${createdPetId}`,
    failOnStatusCode: false
  }).then((response) => {
    cy.log('Updated Pet Response', response);

    if (response.status === 404) {
      throw new Error(`Updated pet with ID ${createdPetId} not found`);
    }

    expect(response.status).to.eq(200);
  });
});

When('I delete the pet', () => {
  cy.request({
    method: 'DELETE',
    url: `https://petstore.swagger.io/v2/pet/${createdPetId}`,
    failOnStatusCode: true
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Then('I should get the pet deleted response', () => {
  cy.request({
    method: 'GET',
    url: `https://petstore.swagger.io/v2/pet/${createdPetId}`,
    failOnStatusCode: false
  }).then((response) => {
    cy.log('Deleted Pet Response', response);
  });
});