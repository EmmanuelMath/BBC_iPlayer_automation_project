Feature: Data Structure Validation

Scenario: Scenario 2: Verify data integrity of id and type in episodes
  Given I send a GET request to "/ibltest"
  Then all "id" fields in the data array should not be null or empty
  And the type in episode for every item should be "episode"

Scenario: Scenario 3: Verify title field is not null or empty in episodes
  Given I send a GET request to "/ibltest"
  Then all "title" fields in episode for every schedule item should not be null or empty

Scenario: Scenario 4: Verify only one live episode exists
  Given I send a GET request to "/ibltest"
  Then exactly one episode in the list should have the live field set to true

Scenario: Scenario 5: Verify transmission dates
  Given I send a GET request to "/ibltest"
  Then the transmission_start date should be before the transmission_end date for all episodes