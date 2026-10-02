Feature: View Cart
  Background: Login
    Given a registered customer exists
    And I open the "login" page
    And I log in as the registered customer
    And I am on the My account page

  Scenario: Add product to the cart
    When I open the "home" page
    And I am on the Home page
    And I select "Combination Pliers" product
    And I add to cart
    And I navigate to "Cart" page
    Then I see the cart contains the product and correct quantity:
      | Product            | Quantity |
      | Combination Pliers | 1        |
    And the cart price matches the product page price