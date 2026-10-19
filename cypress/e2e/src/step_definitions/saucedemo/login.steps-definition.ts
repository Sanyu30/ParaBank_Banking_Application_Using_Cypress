import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageObjects/sauceDemoPageObjects/LoginPage";

Given("I navigate to the saucedemo", function () {
    cy.visit("https://www.saucedemo.com/");
});

When("I enter username {string} and password {string}", (username: string, password: string) => {
    LoginPage.enterUserName(username);
    LoginPage.enterPassword(password);
});

When("I click on login", function () {
    LoginPage.clickLoginIn();
});
Then("I should be logged in successfully", function () {
    LoginPage.assertLoginSuccessful();
});

Then("I should see the error message {string}", (errorMessage: string) => {
    LoginPage.assertErrorMsg(errorMessage);
});

Then("I click on logout", () => {
    LoginPage.clickLogOut();
});

Then("I should be logged out successfully", () => {
    LoginPage.assertLogOutSuccessful();
});
