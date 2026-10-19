import RequestForLoan from "../pageObjects/parabankDemoPageObjects/us_09_request_loan";
import { getAccountDetails, getAccountNumber } from "../../../support/utils/account_overview_utils";

describe("Request Loan", () => {

    it("Apply for a Loan", () => {
        cy.visit('/index.htm');
        cy.login();
        cy.fixture('accountDetails.json').then((data) => {
            const downPayment = Math.floor(Math.random() * 100);
            const loanAmount = Math.floor(Math.random() * 100);
            const accountType = 'LOAN'
            const accountNumber = data.account[0].account
            RequestForLoan.requestForLoan();
            RequestForLoan.verifyLoanPage();
            RequestForLoan.enterLoanAmount(loanAmount);
            RequestForLoan.enterDownPayment(downPayment);
            RequestForLoan.selectFromAccount();
            RequestForLoan.clickApply();
            RequestForLoan.verifyLoanApproved()
            //RequestForLoan.verifyLoanDenied()
            RequestForLoan.getNewAccountNumber().then((newLoanAccountNo) => {
                cy.log(`Your new account number: ${newLoanAccountNo}`);
                cy.readFile('cypress/fixtures/login.json').then((login) => {
                    cy.writeFile('cypress/fixtures/login.json', {
                        ...login,
                        newLoanAccountNo
                    });
                });
                RequestForLoan.clickNewAccountNumber();
                RequestForLoan.verifyAccountType(accountType).then((type) => {
                    cy.log(`Success Message: ${type}`);
                });;
                getAccountNumber().then((accountNumber) => {
                    cy.log(`Actual account number: ${accountNumber}`);
                    cy.log(`Expected account number: ${newLoanAccountNo}`);

                    expect(accountNumber).to.eq(newLoanAccountNo);
                })
            });
        });
    });
});
