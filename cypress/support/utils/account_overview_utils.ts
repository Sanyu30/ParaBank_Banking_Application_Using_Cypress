export function getAccountDetails() {
    const accountDetails: {
        account: string;
        balance: string;
        availableAmount: string;
    }[] = [];
    return cy.get("#accountTable tbody tr:has(a)").should('have.length.greaterThan', 0)
        .each(($row) => {
            accountDetails.push({
                account: $row.find('td').eq(0).text().trim(),
                balance: $row.find('td').eq(1).text().trim(),
                availableAmount: $row.find('td').eq(2).text().trim()
            });
        }).then(() => accountDetails);
}


export function getAccountNumber() {

    return cy.get('#accountId').should('be.visible').and('not.be.empty').invoke('text').then((text) => {
        const accountNumber = text.trim();
        expect(accountNumber).not.to.be.empty;
        return accountNumber;

    })
}

export function getTransactionDetails() {
    const transactionDetails = {};

    return cy.get('#rightPanel').contains('h1.title', 'Transaction Details').should('be.visible').then(() => {
        return cy.get('#rightPanel table tbody tr').each(($row) => {
            const key = $row.find('td').eq(0).text().replace(':', '').trim().replace(/\s+/g, '');
            let value = $row.find('td').eq(1).text().trim();

            if (key === 'Amount') {
                value = value.replace('$', '');
            }

            transactionDetails[key] = value;
        });
    })
        .then(() => transactionDetails);
}