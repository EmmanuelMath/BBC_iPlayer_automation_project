Feature: Error Handling

Scenario: Scenario 7: Verify 404 Not Found response
  Given I send a GET request to "/ibltest/2023-09-11"
  Then the response status code should be 404
  And the error object should have properties "details" and "http_response_code"