/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import loginAccount from "../e2e/src/pageObjects/parabankDemoPageObjects/us_01_login";
declare global {
    namespace Cypress {
        interface Chainable {
            login(): Chainable<void>;
            inVaildLogin(): Chainable<void>;

        }
    }
}

Cypress.Commands.add("login", () => {
    cy.readFile("cypress/fixtures/login.json").then((loginData) => {
        loginAccount.enterUserName(loginData.username);
        loginAccount.enterPassword(loginData.password);
        loginAccount.clickLoginIn();
        cy.url().should("include", "/overview.htm");
    });
});

Cypress.Commands.add('inVaildLogin', () => {
    cy.fixture("login").then((loginData) => {
        loginAccount.enterUserName(loginData.username);
        loginAccount.enterPassword(`invalid-${loginData.password}`);
        loginAccount.clickLoginIn();
        cy.url().should('include', '/login.htm');
    });

})


declare global {
    namespace Cypress {
        interface Chainable {
            selectFromAccount(accountSelector: string): Chainable;
        }
    }
}

Cypress.Commands.add('selectFromAccount', (accountSelector: string) => {
    // return cy.readFile('cypress/fixtures/accountDetails.json').then((data) => {
    //    const accountNumber = data.account[0].account;

    cy.get(accountSelector).should('be.visible').find('option').first().invoke('val')
        .then((firstOptionValue) => {
            expect(firstOptionValue).to.not.be.empty;

            return cy.get(accountSelector).select(String(firstOptionValue)).should('have.value', String(firstOptionValue));
        });
});
//});


