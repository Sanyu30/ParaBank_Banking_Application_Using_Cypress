class FindTransactionsPage {
    findTransactionsLink = 'a[href*="findtrans"]';
    findTransactionsTitle = '#formContainer h1.title';
    transactionIdInput = '#transactionId';
    findByIdButton = '#findById';
    transactionDateInput = '#transactionDate';
    findByDateButton = '#findByDate';
    fromDateInput = '#fromDate';
    toDateInput = '#toDate';
    findByDateRangeButton = '#findByDateRange';
    findByAmountButton = '#findByAmount';
    amountInput = '#amount';
    transactionBody = '#transactionBody tr';

    openFindTransactionsPage() {
        cy.get(this.findTransactionsLink).should('be.visible').click();
    }
    openFindTransactionsTitle() {
        cy.get(this.findTransactionsTitle).should('be.visible').and('contain', 'Find Transactions');
    }
    tranSactionBody() {
        return cy.get(this.transactionBody);
    }
    transactionLink() {
        return cy.get('#transactionBody tr a');
    }
    tranSactionIdInput(transactionIdInput: any) {
        cy.get(this.transactionIdInput).type(String(transactionIdInput)).should('not.have.value', '');
    }

    findByIdButtonClick() {
        cy.get(this.findByIdButton).click();
    }

    tranSactionDateInput(transactionDateInput: any) {
        cy.get(this.transactionDateInput).type(String(transactionDateInput)).should('not.have.value', '');
    }

    findByDateButtonClick() {
        cy.get(this.findByDateButton).click();
    }

    tranSactionFromDateInput(fromDateInput: any) {
        cy.get(this.fromDateInput).type(String(fromDateInput)).should('not.have.value', '');
    }

    tranSactionToDateInput(toDateInput: any) {
        cy.get(this.toDateInput).type(String(toDateInput)).should('not.have.value', '');
    }
    findByDateRangeButtonClick() {
        cy.get(this.findByDateRangeButton).click();
    }

    tranSactionAmountInput(amountInput: any) {
        cy.get(this.amountInput).type(String(amountInput)).should('not.have.value', '');
    }
    findByAmountButtonClick() {
        cy.get(this.findByAmountButton).click();
    }

}









export default new FindTransactionsPage();