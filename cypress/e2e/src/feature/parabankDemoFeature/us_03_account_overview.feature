
Feature: Accounts Overview

    Background:
        Given the user opens the ParaBank application

    Scenario: Verify account overview and account details
        When the user logs in to ParaBank
        Then the Accounts Overview page should be displayed
        And the account details should be saved and verified
