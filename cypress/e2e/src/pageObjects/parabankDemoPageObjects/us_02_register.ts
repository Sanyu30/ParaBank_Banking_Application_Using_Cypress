export interface RegistrationData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    ssn: string;
}

class RegisterPage {

    firstName = '[id="customer.firstName"]';
    lastName = '[id="customer.lastName"]';
    address = '[id="customer.address.street"]';
    city = '[id="customer.address.city"]';
    state = '[id="customer.address.state"]';
    zipCode = '[id="customer.address.zipCode"]';
    phoneNumber = '[id="customer.phoneNumber"]';
    ssn = '[id="customer.ssn"]';
    username = '[id="customer.username"]';
    invaildUserName = '[id="customer.username.errors"]';
    password = '[id="customer.password"]';
    confirmPassword = '[id="repeatedPassword"]';
    registerButton = 'input[value="Register"]';
    emptryFieldError = '[id="customer.firstName.errors"]';


    verifyRegistrationPage() {
        cy.contains('Signing up is easy!').should('be.visible');
    }

    openRegistrationPage() {
        cy.contains("Register").click();
    }

    enterFirstName(firstName: string) {
        cy.get(this.firstName).type(firstName);
    }

    enterLastName(lastName: string) {
        cy.get(this.lastName).type(lastName);
    }

    enterAddress(address: string) {
        cy.get(this.address).type(address);
    }

    enterCity(city: string) {
        cy.get(this.city).type(city);
    }

    enterState(state: string) {
        cy.get(this.state).type(state);
    }

    enterZipCode(zipCode: string) {
        cy.get(this.zipCode).type(zipCode);
    }

    enterPhone(phoneNumber: string) {
        cy.get(this.phoneNumber).type(phoneNumber);
    }

    enterSSN(ssn: string) {
        cy.get(this.ssn).type(ssn);
    }

    enterUsername(username: string) {
        cy.get(this.username).type(username);
    }

    enterPassword(password: string) {
        cy.get(this.password).type(password, { log: false }).then(() => {
            Cypress.log({ name: 'type', message: '********' });
        });
    }

    enterConfirmPassword(confirmPassword: string) {
        cy.get(this.confirmPassword).type(confirmPassword, { log: false }).then(() => {
            Cypress.log({ name: 'type', message: '********' });
        });
    }

    clickRegister() {
        cy.get(this.registerButton).click();
    }

    verifyPassword(password: string) {
        cy.get(this.confirmPassword).should('have.value', password, { log: false }).then(() => {
            Cypress.log({ name: 'type', message: '********' });
        });
    }

    verifyExistingUsernameError() {
        cy.get(this.invaildUserName).should('be.visible').and('contain.text', 'This username already exists.');
    }
    welcome(username: string) {
        cy.get("#rightPanel h1.title").should("be.visible").and("contain", `Welcome ${username}`);
    }

    successfully() {
        cy.get("#rightPanel > p").should("contain", "successfully").and("be.visible");
    }
    emptyFieldError() {
        cy.get(this.emptryFieldError).should("be.visible");
    }

    completeRegistration(registerData: RegistrationData, username: string, password: string) {
        this.verifyRegistrationPage();

        this.enterFirstName(registerData.firstName);
        this.enterLastName(registerData.lastName);
        this.enterAddress(registerData.address);
        this.enterCity(registerData.city);
        this.enterState(registerData.state);
        this.enterZipCode(registerData.zipCode);
        this.enterPhone(registerData.phoneNumber);
        this.enterSSN(registerData.ssn);

        this.enterUsername(username);
        this.enterPassword(password);
        this.enterConfirmPassword(password);
        this.verifyPassword(password);
        this.clickRegister();


        cy.writeFile('cypress/fixtures/login.json', {
            username: username,
            password: password
        });
    }
}

export default new RegisterPage();