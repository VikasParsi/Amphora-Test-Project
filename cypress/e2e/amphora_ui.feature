Feature: Amphora UI Testing

  Scenario: Verify the functionality for signup for Newsletter
    When I sign up for the newsletter under the Resources dropdown and validating the message

  Scenario: Check all Products
    Given I visit the Amphora site
    When I click on all products from the Products dropdown
    Then I click on "Symphony CTRM" from the Products dropdown
    Then I click on "Alchemy CTRM" from the Products dropdown
    Then I click on "VaR Module" from the Products dropdown
    Then I click on "Trade confirmations manager" from the Products dropdown
    Then I click on "Freight manager" from the Products dropdown
    Then I click on "Claims manager" from the Products dropdown
    Then I click on "Symphony Credit" from the Products dropdown
