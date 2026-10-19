Feature:  Login functionality

    Background:
        Given I navigate to the saucedemo

    Scenario: User login in with empty fields
        Given I navigate to the saucedemo
        When I enter username "" and password ""
        And I click on login
        Then I should see the error message "Epic sadface: Username is required"


    Scenario Outline: User login in with valid credentials
        When I enter username "<username>" and password "secret_sauce"
        And  I click on login
        Then I should be logged in successfully
        When I click on logout
        Then I should be logged out successfully


        Examples:
            | username                |
            | standard_user           |
            | performance_glitch_user |
            | problem_user            |
            | error_user              |
            | visual_user             |


    Scenario: User login in with invalid credentials
        When I enter username "standard_user" and password "passwordInvaild"
        And  I click on login
        Then  I should see the error message "Epic sadface: Username and password do not match any user in this service"