Feature: Response Headers

Scenario: Scenario 6: Verify presence of Date header
  Given I send a GET request to "/ibltest"
  Then the response headers should contain a "date" field