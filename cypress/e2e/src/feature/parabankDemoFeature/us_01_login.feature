Feature: Parabank customer login

    Background:
        Given the user is on the Parabank home page

    @ValidLogin
    Scenario: Customer logs in with valid credentials
        When the user enters valid credentials
        Then the user should be logged in successfully

    @InvalidLoginFile
    Scenario: Customer logs in with invalid credentials using data file
        When the user enters invalid credentials
        And clicks the login button
        Then the user should see an error message


    @InvalidLoginTable
    Scenario: Customer logs in with invalid credentials and validates home page menus
        When the user enters below credentials and validate error message
            | username     | password     |
            | invalidUser1 | invalidPass1 |
            | invalidUser2 | invalidPass2 |
        And the user validates the following menus on the home page
            | homeMenu   |
            | About Us   |
            | Services   |
            | Admin Page |
            | Products   |
            | Locations  |


    @InvalidLoginOutline
    Scenario Outline: Customer logs in with invalid credentials and validates home page menus
        When the user enters "<username>" and "<password>"
        And clicks the login button
        Then the user should see an error message
        And I validate "<homeMenu>" in the home page

        Examples:
            | username     | password     | homeMenu   |
            | invalidUser1 | invalidPass1 | About Us   |
            | invalidUser2 | invalidPass2 | Services   |
            | invalidUser3 | invalidPass3 | Admin Page |
            | invalidUser1 | invalidPass1 | Products   |
            | invalidUser2 | invalidPass2 | Locations  |


    @InvalidLoginHomwePage
    Scenario Outline: Customer logs in with invalid credentials using outline
        When the user enters "invalidUser1" and "invalidPass1"
        And clicks the login button
        Then the user should see an error message
        Then I validate "About Us" in the home page
        Then I validate "Services" in the home page
        Then I validate "Admin Page" in the home page




