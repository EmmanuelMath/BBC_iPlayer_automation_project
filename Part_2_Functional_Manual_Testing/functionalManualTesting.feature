Feature: Scheduled Broadcast Timing
    Scenario: Ensure the broadcast starts and ends at the scheduled times
        Given id is "p0g9q57c" 
        And the scheduled_start is "2023-09-11T10:15:00.000Z"
        And the scheduled_end is "2023-09-11T11:15:00.000Z"
        When I fetch the transmission_start and transmission_end
        Then the transmission_start should not be earlier than the scheduled_start
        And the transmission_end should not exceed the scheduled_end

Feature: Episode Metadata Validation
    Scenario: Verify the episode details
        Given the episode_id is "m0019mkj"
        When I retrieve the episode data
        Then the title should be "Homes Under the Hammer"
        And the subtitle should be "Series 25: Episode 35"
        And the large synopsis should contain "A terraced cottage in Kent"

Feature: Master Brand Attribution
    Scenario: Validate that the episode is always attributed to the correct master brand
        Given an episode belongs to the "BBC One" master brand
        When I retrieve the "master_brand" details
        Then the "titles.large", "titles.medium", and "titles.small" fields should always display "BBC One"
        And the "ident_id" should be "p06g87jc"
        And the "attribution" should be "bbc_one"