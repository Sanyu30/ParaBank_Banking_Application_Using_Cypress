import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import loginAccount from "../../pageObjects/parabankDemoPageObjects/us_01_login";
import RegisterPage from "../../pageObjects/parabankDemoPageObjects/us_02_register";


Given("the user is on the Parabank home page", function () {
    cy.visit("/index.htm");
});

When("the user enters valid credentials", function () {
    const username = `San${Math.floor(Math.random() * 1000)}`;
    const password = `Ban${Math.floor(Math.random() * 1000)}`;

    cy.contains("Register").click();
    cy.fixture("register").then((registerData) => {
        RegisterPage.completeRegistration(registerData, username, password);

    });

    cy.contains("Log Out").click();
    cy.login();

});

When("the user enters invalid credentials", function () {
    cy.inVaildLogin()

});
When("the user enters {string} and {string}", (username: string, password: string) => {
    loginAccount.enterUserName(username);
    loginAccount.enterPassword(password);
});

When("the user enters below credentials and validate error message", function (dataTable: DataTable) {
    dataTable.hashes().forEach((row: any) => {
        loginAccount.enterUserName(row.username);
        loginAccount.enterPassword(row.password);
        loginAccount.clickLoginIn();
        loginAccount.inVaildCredention();
    });
});

When("clicks the login button", () => {
    loginAccount.clickLoginIn();
});

Then("the user should be logged in successfully", () => {
    cy.url().should("include", "/overview.htm");
});

Then("the user should see an error message", () => {
    loginAccount.inVaildCredention();
});

Then("I validate {string} in the home page", (homeMenu: string) => {
    loginAccount.assertHomeMenu(homeMenu);
});

When("the user validates the following menus on the home page", (dataTable: DataTable) => {
    dataTable.hashes().forEach((row: any) => {
        loginAccount.assertHomeMenu(row.homeMenu);
    });
});