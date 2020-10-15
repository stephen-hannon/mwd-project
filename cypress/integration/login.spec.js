describe('auth.login', () => {
    beforeEach(() => {
        cy.visit('/#!/auth/login');
    });

    it('greets with Sign in', () => {
        cy.contains('h1', 'Log in').should('exist');
    });

    it('links to auth/register', () => {
        cy.contains('Don\'t have an account?').should('have.attr', 'ui.sref', 'auth.register')
    });

    it('requires email', () => {
        cy.get('form').contains('Log in').click();
        cy.get('.error-messages').should('contain', 'Email can\'t be blank');
    });

    it('requires password', () => {
        cy.get('[data-test-email]').type('test{enter}');
        cy.get('.error-messages').should('contain', 'Password can\'t be blank');
    });

    it('requires valid username and password', () => {
        cy.get('[data-test-email]').type('test');
        cy.get('[data-test-password]').type('invalid{enter}');
        cy.get('.error-messages').should('contain', 'Invalid username/password');
    });

    it('navigates to home on successful login', () => {
        cy.get('[data-test-email]').type('test');
        cy.get('[data-test-password]').type('correctpassword{enter}');
        cy.hash().should('eq', '#!/');
    });
});