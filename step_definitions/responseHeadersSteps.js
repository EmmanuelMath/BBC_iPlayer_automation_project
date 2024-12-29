const { defineFeature, loadFeature } = require('jest-cucumber');
const apiClient = require('../utils/apiClient');

const feature = loadFeature('./features/responseHeaders.feature');

defineFeature(feature, (test) => {
  let response;

  test('Scenario 6: Verify presence of Date header', ({ given, then }) => {
    given(/^I send a GET request to "(.*)"$/, async (endpoint) => {
      response = await apiClient.get(endpoint);
    });

    then(/^the response headers should contain a "(.*)" field$/, async (date) => {
      expect(response.headers[date]).toBeDefined();
    });
  });
});
