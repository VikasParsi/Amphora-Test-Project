Feature: Petstore API Testing
  Scenario: Perform CRUD Operations on a Pet
    Given I create a new pet
    Then I should get the pet created response
    When I update the pet with new details
    Then I should get the pet updated response
    When I delete the pet
    Then I should get the pet deleted response
