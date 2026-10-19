
import {
    When
} from "@badeball/cypress-cucumber-preprocessor";

import BillPayService from "../../pageObjects/parabankDemoPageObjects/us_06_bill_pay";

When("the user clicks on Bill Pay", () => {
    BillPayService.clickBillPay();
});

When("the Bill Payment Service page is displayed", () => {
    BillPayService.verifyBillPaymentPage();
});

When("the user enters random payee details", () => {
    const randomNumber = Math.floor(Math.random() * 10000000);

    const payee = {
        name: `Tester${randomNumber}`,
        address: `London Street ${randomNumber}`,
        city: `Leeds ${randomNumber}`,
        state: `State ${randomNumber}`,
        zipCode: `${randomNumber}`,
        phoneNumber: `07 ${Math.floor(Math.random() * 10000000000)}`,
        accountNumber: `${randomNumber}`,
        verifyAccount: `${randomNumber}`
    };

    BillPayService.enterPayeeName(payee.name);
    BillPayService.enterAddress(payee.address);
    BillPayService.enterCity(payee.city);
    BillPayService.enterState(payee.state);
    BillPayService.enterZipCode(payee.zipCode);
    BillPayService.enterPhoneNumber(payee.phoneNumber);
    BillPayService.enterAccountNumber(payee.accountNumber);
    BillPayService.enterVerifyAccount(payee.verifyAccount);
});

When("the user enters a random payment amount", () => {
    const amount = Math.floor(Math.random() * 100);
    BillPayService.enterAmount(amount);
});

When("the user selects the source account for payment", () => {
    BillPayService.selectFromAccount();
});

When("the user submits the bill payment", () => {
    BillPayService.clickSendPayment();
});
