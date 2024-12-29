const { defineFeature, loadFeature } = require('jest-cucumber');
const apiClient = require('../utils/apiClient');

const feature = loadFeature('./features/apiStatus.feature');

defineFeature(feature, (test) => {
  let response;

  test('Scenario 1: Verify successful response and performance', ({ given, then, and }) => {
    given(/^I send a GET request to "(.*)"$/, async (endpoint) => {
      startTime = performance.now();
      response = await apiClient.get(endpoint);
      duration = performance.now() - startTime
    });

    then(/^the response status code should be (\d+)$/, (statusCode) => {
      expect(response.status).toBe(Number(statusCode));
    });

    and(/^the response time should be below (\d+) milliseconds$/, (timeLimit) => {
      expect(duration).toBeLessThan(Number(timeLimit));
    });
  });
});
