
Feature: Find Transactions

  Background:
    Given the user opens the ParaBank application
    And the user logs in to ParaBank
    And the transaction details are loaded from the fixture
    And the user opens the Find Transactions page

  Scenario: Find transaction by ID
    When the user searches using the transaction ID
    Then the transaction result should contain the expected amount

  Scenario: Find transaction by date
    When the user searches using the transaction date
    Then the transaction result should contain the expected date

  Scenario: Find transactions by date range
    When the user searches using the transaction date range
    Then the transaction result should contain the expected date

  Scenario: Find transaction by amount
    When the user searches using the transaction amount
    Then the transaction result should contain the expected amount
