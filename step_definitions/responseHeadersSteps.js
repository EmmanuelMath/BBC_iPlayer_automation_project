const { defineFeature, loadFeature } = require('jest-cucumber');
const apiClient = require('../utils/apiClient');

const feature = loadFeature('./features/responseHeaders.feature');

defineFeature(feature, (test) => {
  let response;

  test('Scenario 6: Verify presence of Date header', ({ given, then }) => {
    given(/^I send a GET request to "(.*)"$/, async (endpoint) => {
      try {
        response = (await apiClient.get(endpoint));
      } catch (error) {
        throw new Error(`API request failed: ${error.message}`);
      };
    });

    then(/^the response headers should contain a "(.*)" field$/, async (date) => {
      const isFieldInHeaderResponse = date in response.headers;
      expect(isFieldInHeaderResponse).toBeTruthy()
      expect(response.headers[date]).toBeDefined();
      expect(response.headers[date]).not.toBeNull();
      expect(response.headers[date]).not.toBe('');
    });
  });
});
