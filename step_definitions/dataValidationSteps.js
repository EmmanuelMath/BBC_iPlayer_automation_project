const { defineFeature, loadFeature } = require('jest-cucumber');
const apiClient = require('../utils/apiClient');
const { validateField, validateDateOrder } = require('../utils/commonSteps')

const feature = loadFeature('./features/dataValidation.feature');

defineFeature(feature, (test) => {
  let response;
  let scheduleData;
  test('Scenario 2: Verify data integrity of id and type in episodes', ({ given, then, and }) => {
    given(/^I send a GET request to "(.*)"$/, async (endpoint) => {

      try {
        response = (await apiClient.get(endpoint));
      } catch (error) {
        throw new Error(`API request failed: ${error.message}`);
      };

      scheduleData = response.data.schedule.elements
    });

    then(/^all "(.*)" fields in the data array should not be null or empty$/, async (key) => {
      validateField(scheduleData, key)
    })


    and(/^the type in episode for every item should be "(.*)"$/, (key) => {
      scheduleData.forEach((item) => {
        episode_type = item.episode?.type
        expect(episode_type).toBeDefined();
        expect(episode_type).toBe(key);
      });
    });
  });

  test('Scenario 3: Verify title field is not null or empty in episodes', ({ given, then }) => {
    given(/^I send a GET request to "(.*)"$/, async (endpoint) => {
      try {
        response = (await apiClient.get(endpoint));
      } catch (error) {
        throw new Error(`API request failed: ${error.message}`);
      };
      scheduleData = response.data.schedule.elements
    });

    then(/^all "(.*)" fields in episode for every schedule item should not be null or empty$/, async (key) => {
      scheduleData.forEach((item) => {
        const title = item.episode[key];
        expect(title).toBeDefined();
        expect(title).not.toBeNull();
        expect(title).not.toBe('');
      });
    });
  });

  test('Scenario 4: Verify only one live episode exists', ({ given, then }) => {
    given(/^I send a GET request to "(.*)"$/, async (endpoint) => {
      response = (await apiClient.get(endpoint));
      scheduleData = response.data.schedule.elements
    });

    then(/^exactly one episode in the list should have the live field set to true$/, async () => {
      count = 0
      scheduleData.forEach((item) => {
        episodeLiveKey = item.episode.live
        if (episodeLiveKey == true) {
          count += 1
        };
      });
      expect(count).toEqual(1)

    })
  });

  test('Scenario 5: Verify transmission dates', ({ given, then }) => {
    given(/^I send a GET request to "(.*)"$/, async (endpoint) => {
      response = (await apiClient.get(endpoint));
      scheduleData = response.data.schedule.elements
    });

    then(/^the transmission_start date should be before the transmission_end date for all episodes$/, async () => {
      scheduleData.forEach((item) => {
        validateDateOrder(item.transmission_start, item.transmission_end)
      });
    })
  });

});
