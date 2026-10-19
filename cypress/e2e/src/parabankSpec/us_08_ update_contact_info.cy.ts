import UpdateContactInfo from "../pageObjects/parabankDemoPageObjects/us_08_ update_contact_info";

describe("Update Contact Info", () => {

    const newPhone = `07${Math.floor(Math.random() * 100000000000)}`;
    const newAddress = `London street${Math.floor(Math.random() * 10000)}`;
    const newCity = `Read${Math.floor(Math.random() * 1000)}`;

    it("Update customer phone and address", () => {

        cy.fixture("register").then((register) => {
            cy.visit("/index.htm");
            cy.login();
            UpdateContactInfo.updateContact();
            cy.get('[id="customer.phoneNumber"]').should('be.visible').and('not.have.value', "");
            cy.get('[id="customer.address.zipCode"]').should('be.visible');
            const updatedFirstName = register.firstName + " Seema";
            UpdateContactInfo.enterFirstName(updatedFirstName);
            UpdateContactInfo.enterAddress(newAddress);
            UpdateContactInfo.enterCity(newCity);
            UpdateContactInfo.enterPhone(newPhone);
            UpdateContactInfo.clickUpdateProfile();
            UpdateContactInfo.verifyProfileUpdated();
            cy.writeFile("cypress/fixtures/register.json", {
                ...register,
                updatedAddress: newAddress,
                updatedCity: newCity,
                updatedPhone: newPhone,
                updatedFirstName: updatedFirstName
            });
        });
    });
});