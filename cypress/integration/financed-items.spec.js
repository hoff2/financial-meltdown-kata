/// <reference types="Cypress" />
import Chance from 'chance';

const chance = new Chance();

context('Financed Items', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should add an empty financed item when add item button is clicked', () => {
        cy.get('.financedItem').should('have.length', 2);

        cy.get('.addItem>button').click();

        cy.get('.financedItem').should('have.length', 3);
    });

    it('should display persisted items when page is refreshed', () => {
        const itemName0 = chance.string();
        const itemName2 = chance.string();

        cy.get('.financedItem').should('have.length', 2);

        cy.get('.itemName>input')
            .eq(0)
            .type('{selectall}{del}')
            .type(itemName0)
            .should('have.value', itemName0);

        cy.get('.addItem>button').click();

        cy.get('.itemName>input')
            .eq(2)
            .type('{selectall}{del}')
            .type(itemName2)
            .should('have.value', itemName2);

        cy.get('.persist-financed-items>button').click();

        cy.visit('/');

        cy.get('.financedItem').should('have.length', 3);
    });
});
