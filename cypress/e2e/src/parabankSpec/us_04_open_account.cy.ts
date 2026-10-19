import { getAccountDetails, getAccountNumber, getTransactionDetails } from "../../../support/utils/account_overview_utils";
import OpenNewAccount from "../pageObjects/parabankDemoPageObjects/us_04_open_account";

describe('Open New Account', () => {

    before(() => {
        cy.visit('/index.htm');
        cy.login();
    });

    it('Open New Account', () => {

        let newAccountNo: string;
        cy.fixture('accountDetails.json').then((data) => {

            const accountType = 'SAVINGS'

            OpenNewAccount.clickOpenAccount();
            OpenNewAccount.verifyOpenAccountPage();
            OpenNewAccount.selectAccountType(accountType);
            OpenNewAccount.selectFromAccount();
            OpenNewAccount.clickOpenNewAccount();
            OpenNewAccount.verifyAccountOpened();
            OpenNewAccount.getNewAccountNumber().then((accountNo) => {
                newAccountNo = accountNo.trim();

                cy.log(`New account number: ${newAccountNo}`);
                cy.fixture('login.json').then((login) => {
                    cy.writeFile('cypress/fixtures/login.json', {
                        ...login,
                        newAccountNo
                    });
                });
                OpenNewAccount.clickNewAccountNumber();
                getAccountNumber().then((accountNumber) => {
                    cy.log(`Actual account number: ${accountNumber}`);
                    cy.log(`Expected account number: ${newAccountNo}`);

                    expect(accountNumber).to.eq(newAccountNo);
                })
            });

        });
        cy.get('#transactionTable tbody tr:has(a)').first().find('a').should('have.text', 'Funds Transfer Received').click();

        getTransactionDetails().then((transactionDetails) => {
            cy.writeFile(
                'cypress/fixtures/transactionDetails.json',
                transactionDetails
            );
        });
    })
})
