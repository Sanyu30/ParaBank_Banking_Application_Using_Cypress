
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AccountsOverview from "../../pageObjects/parabankDemoPageObjects/us_03_account_overview";

Given("the user opens the ParaBank application", () => {
    cy.visit("/index.htm");
});

When("the user logs in to ParaBank", () => {
    cy.login();
});

Then("the Accounts Overview page should be displayed", () => {
    AccountsOverview.verifyOverviewTitle();
});

Then("the account details should be saved and verified", () => {
    AccountsOverview.verifyAccountDetails();
});
