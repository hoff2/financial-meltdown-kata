/// <reference types="Cypress" />
import Chance from 'chance';

const chance = new Chance();

context('Financed Items', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should display persisted items when page is refreshed', () => {
        const itemName0 = chance.string();
        const itemName2 = chance.string();

        cy.get('.itemName>input')
            .first()
            .type('{selectall}{del}')
            .type(itemName0)
            .should('have.value', itemName0);

        cy.get('.addItem>button').click();

        cy.get('.itemName>input')
            .last()
            .type('{selectall}{del}')
            .type(itemName2)
            .should('have.value', itemName2);

        cy.get('.persist-financed-items>button').click();

        cy.visit('/');

        cy.get('.itemName>input').first().should('have.value', itemName0);
        cy.get('.itemName>input').last().should('have.value', itemName2);
    });
});
