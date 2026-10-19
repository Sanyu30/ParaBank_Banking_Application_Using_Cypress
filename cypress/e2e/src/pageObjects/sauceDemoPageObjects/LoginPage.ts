const usernameInput = '#user-name';
const passwordInput = '#password';
const loginButton = '#login-button';
const errorMsgText = '[data-test="error"]';
const swagLabsLogo = '.app_logo';
const logOut = '#logout_sidebar_link';
const menuOptions = '#react-burger-menu-btn'

class LoginPage {

    enterUserName(username: string) {
        cy.get(usernameInput).clear();
        if (username) cy.get(usernameInput).type(username);
    }

    enterPassword(password: string) {
        cy.get(passwordInput).clear();
        if (password) cy.get(passwordInput).type(password);
    }

    assertErrorMsg(errorMessage: string) {
        cy.get(errorMsgText).should('be.visible').and('contain.text', errorMessage);
    }

    assertLoginSuccessful() {
        cy.url().should("include", "inventory.html");
        cy.get(swagLabsLogo).should('be.visible')

    }
    clickLoginIn() {
        cy.get(loginButton).click();
    }
    clickLogOut() {
        cy.get(menuOptions).should('be.visible').click();
        cy.get(logOut).should('be.visible').click();
    }
    assertLogOutSuccessful() {
        cy.url().should("include", "saucedemo.com");
    }

}

export default new LoginPage();
