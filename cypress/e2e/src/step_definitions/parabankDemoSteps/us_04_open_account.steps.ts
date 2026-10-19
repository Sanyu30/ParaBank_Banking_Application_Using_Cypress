
import {
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import OpenNewAccount from "../../pageObjects/parabankDemoPageObjects/us_04_open_account";

import {
    getAccountNumber,
    getTransactionDetails
} from "../../../../support/utils/account_overview_utils";


When("the user clicks on Open New Account", () => {
    OpenNewAccount.clickOpenAccount();
});

When("the user verifies the Open New Account page", () => {
    OpenNewAccount.verifyOpenAccountPage();
});

When("the user selects account type {string}", (accountType: string) => {
    OpenNewAccount.selectAccountType(accountType);
});

When("the user selects the source account", () => {
    OpenNewAccount.selectFromAccount();
});

When("the user submits the new account request", () => {
    OpenNewAccount.clickOpenNewAccount();
});

Then("the account should be opened successfully", () => {
    OpenNewAccount.verifyAccountOpened();
});

Then("the new account number should be saved and verified", () => {
    OpenNewAccount.getNewAccountNumber().then((accountNo) => {
        const newAccountNo = accountNo.trim();

        cy.log(`New account number: ${newAccountNo}`);

        cy.fixture("login.json").then((login) => {
            cy.writeFile("cypress/fixtures/login.json", {
                ...login,
                newAccountNo
            });
        });

        OpenNewAccount.clickNewAccountNumber();

        getAccountNumber().then((accountNumber) => {
            cy.log(`Actual account number: ${accountNumber}`);
            cy.log(`Expected account number: ${newAccountNo}`);

            expect(accountNumber).to.equal(newAccountNo);
        });
    });
});

Then("the transaction details should be saved", () => {
    cy.get("#transactionTable tbody tr:has(a)")
        .first()
        .find("a")
        .should("have.text", "Funds Transfer Received")
        .click();

    getTransactionDetails().then((transactionDetails) => {
        cy.writeFile(
            "cypress/fixtures/transactionDetails.json",
            transactionDetails
        );
    });
});
