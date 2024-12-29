Feature: API Status and Performance

  Scenario: Scenario 1: Verify successful response and performance
    Given I send a GET request to "/ibltest"
    Then the response status code should be 200
    And the response time should be below 1000 milliseconds
