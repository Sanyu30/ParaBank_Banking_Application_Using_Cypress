
import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import FindTransactions from "../../pageObjects/parabankDemoPageObjects/us_07_find_transactions";

let transactionDetail: any;

Given("the transaction details are loaded from the fixture", () => {
    cy.readFile("cypress/fixtures/transactionDetails.json").then((data) => {
        transactionDetail = data;
    });
});

Given("the user opens the Find Transactions page", () => {
    FindTransactions.openFindTransactionsPage();
    FindTransactions.openFindTransactionsTitle();
});

When("the user searches using the transaction ID", () => {
    FindTransactions.tranSactionIdInput(transactionDetail.TransactionID);
    FindTransactions.findByIdButtonClick();
});

Then("the transaction result should contain the expected amount", () => {
    FindTransactions.tranSactionBody()
        .should("be.visible")
        .and("contain.text", String(transactionDetail.Amount));
});

When("the user searches using the transaction date", () => {
    FindTransactions.tranSactionDateInput(transactionDetail.Date);
    FindTransactions.findByDateButtonClick();
});

Then("the transaction result should contain the expected date", () => {
    FindTransactions.tranSactionBody()
        .should("be.visible")
        .and("contain.text", String(transactionDetail.Date));
});

When("the user searches using the transaction date range", () => {
    FindTransactions.tranSactionFromDateInput(transactionDetail.Date);
    FindTransactions.tranSactionToDateInput(transactionDetail.Date);
    FindTransactions.findByDateRangeButtonClick();
});

When("the user searches using the transaction amount", () => {
    FindTransactions.tranSactionAmountInput(transactionDetail.Amount);
    FindTransactions.findByAmountButtonClick();
});
