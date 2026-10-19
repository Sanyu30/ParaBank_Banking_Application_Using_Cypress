
Feature: Open New Account

    Background:
        Given the user opens the ParaBank application
        And the user logs in to ParaBank

    Scenario: Open a savings account successfully
        When the user clicks on Open New Account
        And the user verifies the Open New Account page
        And the user selects account type "SAVINGS"
        And the user selects the source account
        And the user submits the new account request
        Then the account should be opened successfully
        And the new account number should be saved and verified
        And the transaction details should be saved
