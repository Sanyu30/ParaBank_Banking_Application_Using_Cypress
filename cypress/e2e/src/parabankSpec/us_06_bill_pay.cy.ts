import BillPayService from "../pageObjects/parabankDemoPageObjects/us_06_bill_pay";


describe('Bill Payment Service', () => {

    before(() => {
        cy.visit('/index.htm');
        cy.login();
    });

    it('Bill Payment Service', () => {


        const randomNumber = Math.floor(Math.random() * 10000000);
        const amount = Math.floor(Math.random() * 100);

        const payee = {
            name: `Tester${randomNumber}`,
            address: `London Street ${randomNumber}`,
            city: `Leeds ${randomNumber}`,
            state: `State ${randomNumber}`,
            zipCode: `${randomNumber}`,
            phoneNumber: `07 ${Math.floor(Math.random() * 10000000000)}`,
            accountNumber: `${randomNumber}`,
            verifyAccount: `${randomNumber}`,

        };

        BillPayService.clickBillPay()
        BillPayService.verifyBillPaymentPage()
        BillPayService.enterPayeeName(payee.name);
        BillPayService.enterAddress(payee.address);
        BillPayService.enterCity(payee.city);
        BillPayService.enterState(payee.state);
        BillPayService.enterZipCode(payee.zipCode);
        BillPayService.enterPhoneNumber(payee.phoneNumber);
        BillPayService.enterAccountNumber(payee.accountNumber);
        BillPayService.enterVerifyAccount(payee.verifyAccount);
        BillPayService.enterAmount(amount);
        BillPayService.selectFromAccount();
        BillPayService.clickSendPayment();

    });

});
