class loginAccount {

    username = 'input[name="username"]';
    password = 'input[name="password"]';
    inVaildLogin = '#rightPanel h1.title';



    enterUserName(username: string) {
        cy.get(this.username).clear().type(username)
    }

    enterPassword(password: string) {
        cy.get(this.password).clear().type(password, { log: false }).then(() => {
            Cypress.log({ name: 'type', message: '*******' })
        })
    }

    inVaildCredention() {
        cy.get(this.inVaildLogin).should('contain.text', 'Error!');
    }

    clickLoginIn() {
        cy.get('input[value="Log In"]').click();
    }

    homeMenuMap = {
        "About Us": "about.htm",
        "Services": "services.htm",
        "Admin Page": "admin.htm",
        "Products": "products.jsp",
        "Locations": "contacts.jsp",

    };

    assertHomeMenu(homeMenu: string) {
        const menuIteam = this.homeMenuMap[homeMenu];
        cy.get(`a[href*="${menuIteam}"]`).should('contain.text', homeMenu);

    }

}

export default new loginAccount();