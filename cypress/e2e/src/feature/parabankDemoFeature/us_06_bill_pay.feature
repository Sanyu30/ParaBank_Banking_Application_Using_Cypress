
Feature: Bill Payment Service

  Background:
    Given the user opens the ParaBank application
    And the user logs in to ParaBank

  Scenario: Pay a bill successfully
    When the user clicks on Bill Pay
    And the Bill Payment Service page is displayed
    And the user enters random payee details
    And the user enters a random payment amount
    And the user selects the source account for payment
    And the user submits the bill payment
