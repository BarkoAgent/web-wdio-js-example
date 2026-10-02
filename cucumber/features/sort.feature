Feature: Sort Products
  Background: Open the shop
    Given I open the "home" page
    And I am on the Home page

  Scenario: Sort the products by Price (Low - High)
    When Sort the products by "Price (Low - High)"
    Then I see that products are sorted by price in ascending way