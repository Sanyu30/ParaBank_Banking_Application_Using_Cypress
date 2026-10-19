// import loginAccount from "../../support/pageObjectModule/us_01_login";
// import RegisterPage from "../../support/pageObjectModule/us_02_register";

describe("Parabank Customer Login with valid credentials", () => {
    beforeEach(() => {
        cy.visit("/index.htm");
    });

    it("Parabank Customer Login with Valid Credentials", () => {
        cy.login();

    });

    it("Parabank Customer Login with invalid Credentials", () => {
        cy.inVaildLogin()

    });
});

