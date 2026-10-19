import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../../pageObjects/parabankDemoPageObjects/us_02_register";


Given("the user is on the registration home page", () => {
    cy.visit("/index.htm");
});

When("the user opens the registration form", () => {
    RegisterPage.openRegistrationPage();
    RegisterPage.verifyRegistrationPage();
});

When("the user registers with new credentials from the register fixture", () => {
    cy.fixture("register").then((registerData) => {
        const uniqueId = `${Math.floor(Math.random() * 1000)}`;
        const username = `San${uniqueId}`;
        const password = `Ban${uniqueId}`;

        RegisterPage.completeRegistration(registerData, username, password);
    });
});

Then("the new customer registration succeeds", () => {
    cy.readFile("cypress/fixtures/login.json").then((loginData) => {
        RegisterPage.welcome(loginData.username);
        RegisterPage.successfully();
    });
});

When("the user registers with existing login credentials and register fixture data", () => {
    cy.fixture("register").then((registerData) => {
        cy.readFile("cypress/fixtures/login.json").then((loginData) => {
            RegisterPage.completeRegistration(registerData, loginData.username, loginData.password);
        });
    });
});

Then("the existing username error is displayed", () => {
    RegisterPage.verifyExistingUsernameError();
});


When('the user clicks the "Register" button without filling any fields', () => {
    RegisterPage.openRegistrationPage();
    RegisterPage.verifyRegistrationPage();
    RegisterPage.clickRegister();
});

Then("validation error messages are displayed for each required field", () => {
    RegisterPage.emptyFieldError();

});
