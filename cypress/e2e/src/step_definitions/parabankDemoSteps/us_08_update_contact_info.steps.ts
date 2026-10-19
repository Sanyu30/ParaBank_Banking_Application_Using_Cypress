
import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import UpdateContactInfo from "../../pageObjects/parabankDemoPageObjects/us_08_ update_contact_info";

let register: any;
let newPhone: string;
let newAddress: string;
let newCity: string;
let updatedFirstName: string;

Given("the user loads the registration details", () => {
    cy.fixture("register").then((data) => {
        register = data;
    });
});

When("the user opens Update Contact Info", () => {
    UpdateContactInfo.updateContact();
});

When("the existing phone number and zip code are verified", () => {
    cy.get('[id="customer.phoneNumber"]')
        .should("be.visible")
        .and("not.have.value", "");

    cy.get('[id="customer.address.zipCode"]')
        .should("be.visible");
});

When("the user updates the contact information", () => {
    newPhone = `07${Math.floor(Math.random() * 100000000000)}`;
    newAddress = `London street${Math.floor(Math.random() * 10000)}`;
    newCity = `Read${Math.floor(Math.random() * 1000)}`;

    updatedFirstName = register.firstName + " Seema";

    UpdateContactInfo.enterFirstName(updatedFirstName);
    UpdateContactInfo.enterAddress(newAddress);
    UpdateContactInfo.enterCity(newCity);
    UpdateContactInfo.enterPhone(newPhone);
});

When("the user saves the updated contact information", () => {
    UpdateContactInfo.clickUpdateProfile();
});

Then("the profile should be updated successfully", () => {
    UpdateContactInfo.verifyProfileUpdated();
});

Then("the updated contact details should be saved in the fixture", () => {
    cy.writeFile("cypress/fixtures/register.json", {
        ...register,
        updatedAddress: newAddress,
        updatedCity: newCity,
        updatedPhone: newPhone,
        updatedFirstName: updatedFirstName
    });
});
