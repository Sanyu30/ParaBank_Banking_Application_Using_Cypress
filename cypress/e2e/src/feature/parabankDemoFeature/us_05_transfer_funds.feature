
Feature: Transfer Funds

  Background:
    Given the user opens the ParaBank application
    And the user logs in to ParaBank

  Scenario: Transfer funds successfully
    When the user clicks on Transfer Funds
    And the Transfer Funds page is displayed
    And the user enters a random transfer amount
    And the user selects the source account for transfer
    And the user selects the destination account for transfer
    And the user submits the transfer
    Then the transfer should be completed successfully
