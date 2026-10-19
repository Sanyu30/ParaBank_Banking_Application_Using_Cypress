
import RegisterPage from "../pageObjects/parabankDemoPageObjects/us_02_register"

describe("Parabank Register Feature", () => {

    let registerData: any;
    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const username = `San${uniqueId}`;
    const password = `Ban${uniqueId}`;

    before(() => {
        cy.fixture("register").then((data) => {
            registerData = data;
        });
    });

    beforeEach(() => {
        cy.visit("/index.htm");
        RegisterPage.openRegistrationPage();
        RegisterPage.verifyRegistrationPage();

    });

    it("Register feature with new credentials from the register fixture", () => {

        RegisterPage.completeRegistration(registerData, username, password);

        RegisterPage.welcome(username);
        RegisterPage.successfully();
    });

    it("Register with existing login credentials and register fixture data", () => {

        cy.readFile("cypress/fixtures/login.json").then((loginData) => {
            RegisterPage.completeRegistration(
                registerData,
                loginData.username,
                loginData.password
            );

            RegisterPage.verifyExistingUsernameError();
        });
    });

    it("Validation errors shown when form is submitted empty", () => {


    });
});


