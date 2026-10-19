
Feature: Update Contact Information

  Scenario: Update customer phone number and address
    Given the user opens the ParaBank application
    And the user logs in to ParaBank
    And the user loads the registration details
    When the user opens Update Contact Info
    And the existing phone number and zip code are verified
    And the user updates the contact information
    And the user saves the updated contact information
    Then the profile should be updated successfully
    And the updated contact details should be saved in the fixture
