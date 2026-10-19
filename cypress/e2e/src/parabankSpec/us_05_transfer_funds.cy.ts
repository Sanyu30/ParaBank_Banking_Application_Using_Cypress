import TransferFunds from "../pageObjects/parabankDemoPageObjects/us_05_transfer_funds"

describe("Transfer Funds", () => {

    before(() => {
        cy.visit('/index.htm');
        cy.login();
    });

    it("Transfer Funds", () => {

        cy.fixture('accountDetails.json').then((data) => {

            const amount = Math.floor(Math.random() * 1000);
            TransferFunds.clickTransferFunds();
            TransferFunds.verifyTransferFundsPage();
            TransferFunds.enterAmount(amount);
            TransferFunds.selectFromAccount();
            TransferFunds.selectToAccount();
            TransferFunds.clickTransfer();
            TransferFunds.transferComplete().then((success) => {
                cy.log(`Success Message: ${success}`);
            });

        });

    });
});
