import { getAccountDetails, getAccountNumber } from "../../../../support/utils/account_overview_utils";

class AccountsOverview {

    overviewTitle = '#showOverview h1.title';
    accountLinks = '#accountTable tbody tr a';

    verifyOverviewTitle() {
        cy.get(this.overviewTitle).should('be.visible').and('contain.text', 'Accounts Overview');
    }

    verifyAccountDetails() {

        getAccountDetails().then((account) => {
            // cy.log(JSON.stringify(account));
            expect(account).to.have.length.greaterThan(0);
            const expectedAccountNumber = account[0].account;
            cy.writeFile("cypress/fixtures/accountDetails.json", {
                account
            });

            cy.get(this.accountLinks).first().click();
            cy.contains('Account Details').should('be.visible');

            getAccountNumber().then((accountNumber) => {
                cy.log(accountNumber);
                expect(accountNumber).to.equal(expectedAccountNumber);
            });
        });
    }
}

export default new AccountsOverview();