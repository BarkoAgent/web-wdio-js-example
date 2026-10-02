Feature: View account, Sign out
  Background: Login
    Given a registered customer exists
    And I open the "login" page
    And I log in as the registered customer

  Scenario: View account and sign out
    Then I am on the My account page
    And I see my name in the header menu
    When I sign out
    Then I am logged out