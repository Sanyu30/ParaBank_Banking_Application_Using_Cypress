class TransferFunds {

    transferFundLink = 'a[href*="transfer"]';
    transferPageTitle = '#showForm h1.title';
    amount = '#amount';
    fromAccount = 'select[id="fromAccountId"]';
    toAccount = 'select[id="toAccountId"]';
    clickOnTransfer = 'input[type="submit"]';
    successfullyTransComplete = '#showResult h1.title'

    clickTransferFunds(): void {
        cy.get(this.transferFundLink).should('be.visible').click();
    }

    verifyTransferFundsPage(): void {
        cy.get(this.transferPageTitle).should('be.visible').and('contain', 'Transfer Funds');
    }

    enterAmount(amount: number): void {
        cy.get(this.amount).should('be.visible').clear().type(String(amount));
    }

    selectFromAccount() {
        cy.selectFromAccount(this.fromAccount);
    }

    selectToAccount() {
        cy.selectFromAccount(this.toAccount);
    }
    clickTransfer(): void {
        cy.get(this.clickOnTransfer).click();
    }

    transferComplete() {
        return cy.get(this.successfullyTransComplete).should('be.visible').and('have.text', 'Transfer Complete!').invoke('text');
    }
}

export default new TransferFunds();