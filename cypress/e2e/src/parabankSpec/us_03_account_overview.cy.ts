import AccountsOverview from "../pageObjects/parabankDemoPageObjects/us_03_account_overview";

describe("Accounts Overview", () => {

    it("Accounts Overview", () => {
        cy.visit('/index.htm');
        cy.login();
        AccountsOverview.verifyOverviewTitle();
        AccountsOverview.verifyAccountDetails();
    });
});