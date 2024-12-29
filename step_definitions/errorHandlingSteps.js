const { defineFeature, loadFeature } = require('jest-cucumber');
const apiClient = require('../utils/apiClient');

const feature = loadFeature('./features/errorHandling.feature');

defineFeature(feature, (test) => {
  let response;

  test('Scenario 7: Verify 404 Not Found response', ({ given, then, and }) => {
    given(/^I send a GET request to "(.*)"$/, async (endpoint) => {
        try {
            response = await apiClient.get(endpoint);
        } catch (error) {
            if (error.response) {
                response = error.response;
            } else {
                throw error;
            }
        }
    });

    then(/^the response status code should be (\d+)$/, (statusCode) => {
        expect(response.status).toBe(Number(statusCode));
      });

    and(/^the error object should have properties "(.*)" and "(.*)"$/, async (property1, property2) => {
        errorResponse = response.data.error
        expect(errorResponse[property1]).toBeDefined();
        expect(errorResponse[property2]).toBeDefined();

    });
  });
});
