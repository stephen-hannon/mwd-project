describe('base', () => {
    it('redirects / to the login screen', () => {
        cy.visit('/');
        cy.url().should('eq', Cypress.config().baseUrl + '/#!/auth/login')
    })
});