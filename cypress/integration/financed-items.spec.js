/// <reference types="Cypress" />

context('Financed Items', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should add an empty financed item when add item button is clicked', () => {
        cy.get('.financedItem').should('have.length', 2);

        cy.get('.addItem>button').click();

        cy.get('.financedItem').should('have.length', 3);
    });
});
