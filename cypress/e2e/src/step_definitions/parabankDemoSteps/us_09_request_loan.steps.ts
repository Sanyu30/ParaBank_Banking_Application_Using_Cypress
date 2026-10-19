
import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import RequestForLoan from "../../pageObjects/parabankDemoPageObjects/us_09_request_loan";

import {
    getAccountNumber
} from "../../../../support/utils/account_overview_utils";

let accountDetails: any;
let loanAmount: number;
let downPayment: number;
const accountType = "LOAN";

Given("the user loads the account details", () => {
    cy.fixture("accountDetails.json").then((data) => {
        accountDetails = data;
    });
});

When("the user navigates to Request Loan", () => {
    RequestForLoan.requestForLoan();
});

When("the Apply for a Loan page is displayed", () => {
    RequestForLoan.verifyLoanPage();
});

When("the user enters a random loan amount and down payment", () => {
    loanAmount = Math.floor(Math.random() * 100);
    downPayment = Math.floor(Math.random() * 100);

    RequestForLoan.enterLoanAmount(loanAmount);
    RequestForLoan.enterDownPayment(downPayment);
});

When("the user selects the source account for the loan", () => {
    RequestForLoan.selectFromAccount();
});

When("the user submits the loan application", () => {
    RequestForLoan.clickApply();
});

Then("the loan should be approved", () => {
    RequestForLoan.verifyLoanApproved();
});

Then("the new loan account number should be saved and verified", () => {
    RequestForLoan.getNewAccountNumber().then((newLoanAccountNo) => {
        cy.log(`Your new account number: ${newLoanAccountNo}`);

        cy.readFile("cypress/fixtures/login.json").then((login) => {
            cy.writeFile("cypress/fixtures/login.json", {
                ...login,
                newLoanAccountNo
            });
        });

        RequestForLoan.clickNewAccountNumber();

        getAccountNumber().then((actualAccountNumber) => {
            cy.log(`Actual account number: ${actualAccountNumber}`);
            cy.log(`Expected account number: ${newLoanAccountNo}`);

            expect(actualAccountNumber).to.equal(newLoanAccountNo);
        });
    });
});

Then("the loan account type should be verified", () => {
    RequestForLoan.verifyAccountType(accountType).then((type) => {
        cy.log(`Account Type: ${type}`);
    });
});
