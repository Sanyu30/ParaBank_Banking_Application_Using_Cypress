
import {
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import TransferFunds from "../../pageObjects/parabankDemoPageObjects/us_05_transfer_funds";

When("the user clicks on Transfer Funds", () => {
    TransferFunds.clickTransferFunds();
});

When("the Transfer Funds page is displayed", () => {
    TransferFunds.verifyTransferFundsPage();
});

When("the user enters a random transfer amount", () => {
    const amount = Math.floor(Math.random() * 1000);
    TransferFunds.enterAmount(amount);
});

When("the user selects the source account for transfer", () => {
    TransferFunds.selectFromAccount();
});

When("the user selects the destination account for transfer", () => {
    TransferFunds.selectToAccount();
});

When("the user submits the transfer", () => {
    TransferFunds.clickTransfer();
});

Then("the transfer should be completed successfully", () => {
    TransferFunds.transferComplete().then((success) => {
        cy.log(`Success Message: ${success}`);
    });
});
