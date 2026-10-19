class RequestForLoan {

    requestlink = "a[href*=requestloan]";
    loanAmount = 'input[id="amount"]';
    downPayment = 'input[id="downPayment"]';
    fromAccountId = 'select[id="fromAccountId"]';
    applyButton = 'input[value="Apply Now"]';
    newAccountId = '#newAccountId';
    accountType = '#accountType';
    loanApprovedMessage = '#loanRequestApproved p:nth-child(1)';
    loanDenied = '#loanRequestDenied p:nth-child(1)'



    requestForLoan() {
        cy.get(this.requestlink).should('be.visible').click();
    }
    verifyLoanPage(): void {
        cy.contains('h1.title', 'Apply for a Loan').should('be.visible');
    }
    enterLoanAmount(loanAmount: number): void {
        cy.get(this.loanAmount).should('be.visible').type(String(loanAmount));
    }

    enterDownPayment(downPayment: number): void {
        cy.get(this.downPayment).should('be.visible').type(String(downPayment));
    }
    verifyAccountType(accountType: string) {
        return cy.get(this.accountType).should('be.visible').and('have.text', accountType).invoke('text');
    }
    // selectFromAccount(): void {
    //     cy.readFile('cypress/fixtures/accountDetails.json').then((data) => {
    //         const accountNum = data.account[0].account;
    //         cy.get(this.fromAccountId).should('be.visible').find('option').should('contain', accountNum);
    //         cy.get(this.fromAccountId).select(accountNum).should('have.value', accountNum);

    //     });
    // }
    selectFromAccount() {
        cy.selectFromAccount(this.fromAccountId);
    }
    clickApply(): void {
        cy.get(this.applyButton).should('be.visible').click();
    }
    clickNewAccountNumber(): void {
        cy.get(this.newAccountId).click();
    }
    getNewAccountNumber() {
        return cy.get(this.newAccountId).should('be.visible').invoke('text')
            .then((text) => {
                const newLoanAccountNo = text.trim();
                expect(newLoanAccountNo).not.to.be.empty;
                return newLoanAccountNo;
            });
    }
    verifyLoanApproved(): void {
        cy.get(this.loanApprovedMessage).should('be.visible').and('have.text', 'Congratulations, your loan has been approved.');
    }
    // verifyLoanDenied(): void {
    //     cy.get(this.loanDenied).should('be.visible').and('have.text', 'You do not have sufficient funds for the given down payment.');
    // }


}


export default new RequestForLoan();