/// <reference types="Cypress" />
import Chance from 'chance';

const chance = new Chance();

context('Customer Details', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should update the first name', () => {
        // https://on.cypress.io/type
        cy.get('.first-name>input')
            .type('{selectall}{del}')
            .type('newCustomerFirstName').should('have.value', 'newCustomerFirstName')

        // .type() with special character sequences
            .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
            .type('{del}{selectall}{backspace}')

            // .type() with key modifiers
            .type('{alt}{option}') //these are equivalent
            .type('{ctrl}{control}') //these are equivalent
            .type('{meta}{command}{cmd}') //these are equivalent
            .type('{shift}')

            // Delay each keypress by 0.1 sec
            .type('slowCustomerFirstName', { delay: 100 })
            .should('have.value', 'slowCustomerFirstName')
    });

    it('should update the last name', () => {
        // https://on.cypress.io/type
        cy.get('.last-name>input')
            .type('{selectall}{del}')
            .type('newCustomerLastName').should('have.value', 'newCustomerLastName')

        // .type() with special character sequences
            .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
            .type('{del}{selectall}{backspace}')

            // .type() with key modifiers
            .type('{alt}{option}') //these are equivalent
            .type('{ctrl}{control}') //these are equivalent
            .type('{meta}{command}{cmd}') //these are equivalent
            .type('{shift}')

            // Delay each keypress by 0.1 sec
            .type('slowCustomerLastName', { delay: 100 })
            .should('have.value', 'slowCustomerLastName')
    });

    it('should retrieve last updated customer details when page refreshed', () => {
        const expectedFirstName = chance.string();
        cy.get('.first-name>input')
            .type('{selectall}{del}')
            .type(expectedFirstName).should('have.value', expectedFirstName);

        cy.get('.update-customer-details>button').click();

        cy.visit('/');

        cy.get('.first-name>input').should('have.value', expectedFirstName);
    });
});
