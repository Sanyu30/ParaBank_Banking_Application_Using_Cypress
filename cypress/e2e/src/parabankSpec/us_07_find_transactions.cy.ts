import FindTransactions from "../pageObjects/parabankDemoPageObjects/us_07_find_transactions";

describe("Find Transactions", () => {

    let transactionDetail: any;

    beforeEach(() => {
        // Reset to the account overview before each test so the Find Transactions link is available.
        cy.visit('/index.htm');
        cy.login();
        cy.readFile('cypress/fixtures/transactionDetails.json').then((data) => {
            transactionDetail = data;
        })
        FindTransactions.openFindTransactionsPage();
        FindTransactions.openFindTransactionsTitle();
    })

    it("Find Transactions by using ID", () => {

        FindTransactions.tranSactionIdInput(transactionDetail.TransactionID);
        FindTransactions.findByIdButtonClick();
        // The transaction result is a table row, so verify its rendered text rather than an input value.
        FindTransactions.tranSactionBody().should('be.visible').and('contain.text', String(transactionDetail.Amount));

    });
    it("Find Transactions by using Date", () => {

        FindTransactions.tranSactionDateInput(transactionDetail.Date);
        FindTransactions.findByDateButtonClick();
        FindTransactions.tranSactionBody().should('be.visible').and('contain.text', String(transactionDetail.Date));

    });
    it("Find Transactions by using DateRange", () => {

        FindTransactions.tranSactionFromDateInput(transactionDetail.Date);
        FindTransactions.tranSactionToDateInput(transactionDetail.Date);
        FindTransactions.findByDateRangeButtonClick();
        FindTransactions.tranSactionBody().should('be.visible').and('contain.text', transactionDetail.Date);

    });
    it("Find Transactions by using Amount", () => {

        FindTransactions.tranSactionAmountInput(transactionDetail.Amount);
        FindTransactions.findByAmountButtonClick();
        FindTransactions.tranSactionBody().should('be.visible').and('contain.text', transactionDetail.Amount);

    });

});
