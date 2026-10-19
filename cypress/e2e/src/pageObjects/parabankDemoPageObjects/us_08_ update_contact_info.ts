class UpdateContactInfo {

    updateContInfo = "a[href*='updateprofile']";
    firstName = '[id="customer.firstName"]';
    lastName = '[id="customer.lastName"]';
    address = '[id="customer.address.street"]';
    city = '[id="customer.address.city"]';
    state = '[id="customer.address.state"]';
    zipCode = '[id="customer.address.zipCode"]';
    phoneNumber = '[id="customer.phoneNumber"]';
    updateButton = "input[value='Update Profile']";
    welcomeUpdate = 'p.smallText'

    updateContact() {
        cy.get(this.updateContInfo).should('be.visible').click();
    }
    enterFirstName(firstName: string) {
        cy.get(this.firstName).should('be.visible').clear().type(firstName);
    }
    enterLastName(lastName: string) {
        cy.get(this.lastName).should('be.visible').type(lastName);
    }

    enterAddress(address: string) {
        cy.get(this.address).should('be.visible').clear().type(address, { delay: 100 });
    }

    enterCity(city: string) {
        cy.get(this.city).should('be.visible').clear().type(city, { delay: 100 });
    }

    enterState(state: string) {
        cy.get(this.state).should('be.visible').type(state);
    }

    enterZipCode(zipCode: string) {
        cy.get(this.zipCode).should('be.visible').type(zipCode);
    }

    enterPhone(phoneNumber: string) {
        cy.get(this.phoneNumber).should('be.visible').clear().type(phoneNumber, { delay: 100 });
    }

    clickUpdateProfile() {
        cy.get(this.updateButton).should('be.visible').click();
    }

    verifyProfileUpdated() {
        cy.contains('Profile Updated').should('be.visible')
    }
    
}

export default new UpdateContactInfo();