
Feature: Request Loan

  Background:
    Given the user opens the ParaBank application
    And the user logs in to ParaBank

  Scenario: Apply for a loan successfully
    Given the user loads the account details
    When the user navigates to Request Loan
    And the Apply for a Loan page is displayed
    And the user enters a random loan amount and down payment
    And the user selects the source account for the loan
    And the user submits the loan application
    Then the loan should be approved
    And the new loan account number should be saved and verified
    And the loan account type should be verified
