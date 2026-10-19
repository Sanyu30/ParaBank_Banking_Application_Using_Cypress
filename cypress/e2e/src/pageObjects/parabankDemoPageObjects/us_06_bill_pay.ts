class BillPayService {

    payeeName = '[name="payee.name"]';
    address = '[name="payee.address.street"]';
    city = '[name="payee.address.city"]';
    state = '[name="payee.address.state"]';
    zipCode = '[name="payee.address.zipCode"]';
    phoneNumber = '[name="payee.phoneNumber"]';
    accountNumber = '[name="payee.accountNumber"]';
    verifyAccount = '[name="verifyAccount"]';
    amount = '[name="amount"]';
    sendPaymentButton = '#billpayForm input.button[value="Send Payment"]';
    fromAccountId = 'select[name = "fromAccountId"]'


    clickBillPay() {
        cy.contains('Bill Pay').should('be.visible').click();
    }
    verifyBillPaymentPage() {
        cy.get('#billpayForm h1.title').should('be.visible').and('have.text', 'Bill Payment Service');
    }

    enterPayeeName(payeeName: string): void {
        cy.get(this.payeeName).type(payeeName);
    }

    enterAddress(address: string): void {
        cy.get(this.address).type(address);
    }

    enterCity(city: string): void {
        cy.get(this.city).type(city);
    }

    enterState(state: string): void {
        cy.get(this.state).type(state);
    }

    enterZipCode(zipCode: string): void {
        cy.get(this.zipCode).type(zipCode);
    }

    enterPhoneNumber(phoneNumber: string): void {
        cy.get(this.phoneNumber).type(phoneNumber);
    }

    enterAccountNumber(accountNumber: string): void {
        cy.get(this.accountNumber).type(accountNumber);
    }

    enterVerifyAccount(verifyAccount: string): void {
        cy.get(this.verifyAccount).type(verifyAccount);
    }

    enterAmount(amount: number): void {
        cy.get(this.amount).type(String(amount));
    }
    clickSendPayment(): void {
        cy.get(this.sendPaymentButton).should('be.visible').click();
    }
    selectFromAccount() {
        cy.selectFromAccount(this.fromAccountId);
    }

}

export default new BillPayService();