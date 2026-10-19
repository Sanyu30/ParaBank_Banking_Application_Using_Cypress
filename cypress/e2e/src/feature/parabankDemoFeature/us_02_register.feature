Feature: Parabank customer registration

    Background:
        Given the user is on the registration home page
        When the user opens the registration form

    @SuccessfulRegistration
    Scenario: Register a new customer successfully
        And the user registers with new credentials from the register fixture
        Then the new customer registration succeeds

    @ExistingUsername
    Scenario: Register with existing login credentials
        And the user registers with existing login credentials and register fixture data
        Then the existing username error is displayed

    @EmptyRegistration
    Scenario: Validation errors shown when form is submitted empty
        And the user clicks the "Register" button without filling any fields
        Then validation error messages are displayed for each required field