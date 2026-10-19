
class OpenNewAccount {
    openAccountLink = 'a[href*="openaccount"]';
    pageTitle = '#openAccountForm h1.title';
    accountType = '#type';
    fromAccountId = '#fromAccountId';
    openAccountButton = 'input[value="Open New Account"]';
    newAccountId = '#newAccountId';

    clickOpenAccount(): void {
        cy.get(this.openAccountLink).should('be.visible').click();
    }

    verifyOpenAccountPage(): void {
        cy.get(this.pageTitle)
            .should('be.visible')
            .and('have.text', 'Open New Account');
    }

    selectAccountType(accountType: string): void {
        cy.get(this.accountType)
            .should('be.visible')
            .select(accountType);
    }

    selectFromAccount(): void {
        cy.selectFromAccount(this.fromAccountId);
    }

    clickOpenNewAccount(): void {
        cy.get(this.openAccountButton).should('be.visible').click();
    }

    verifyAccountOpened(): void {
        cy.contains('Account Opened!').should('be.visible');
    }

    getNewAccountNumber() {
        return cy.get(this.newAccountId)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const newAccountNo = text.trim();
                expect(newAccountNo).not.to.be.empty;
                return newAccountNo;
            });
    }

    clickNewAccountNumber(): void {
        cy.get(this.newAccountId).click();
    }
}

export default new OpenNewAccount();
