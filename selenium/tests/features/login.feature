Feature: Do Login
  Do Login in Simplificamais website

  Scenario:
    Given I am on the login page
    When I fill the email field with "email"
    And I press the Continuar button
    When I fill the password field with "password"
    And I press the Continuar button again
    Then I should be logged in
