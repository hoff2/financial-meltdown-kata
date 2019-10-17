/// <reference types="Cypress" />
import Chance from 'chance';

const chance = new Chance();

context('Financed Items', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should display persisted items w/ minimumPayment and rate when page is refreshed', () => {
        const itemNameExisting = chance.string();
        const itemNameNew = chance.string();

        cy.get('.itemName>input')
            .first()
            .type('{selectall}{del}')
            .type(itemNameExisting)
            .should('have.value', itemNameExisting);

        cy.get('.addItem>button').click();

        cy.get('.itemName>input')
            .last()
            .type('{selectall}{del}')
            .type(itemNameNew)
            .should('have.value', itemNameNew);

        cy.get('.persist-financed-items>button').click();

        cy.visit('/');

        cy.get('.financedItem')
            .each(($li, index, $lis) => {
                expect($li.find('.minimum-payment').valueOf()).to.not.be.null;
                expect($li.find('.rate').valueOf()).to.not.be.null;
            });
    });
});
