//register account and login
describe('auth.register', () => {
    beforeEach(() => {
        cy.visit('/#!/auth/register');
    });
    //register account
    it('registers account', () => {
        cy.get('.username').type('faker').should('have.value', 'faker');
        cy.get('.email').type('faker@gmail.com').should('have.value', 'faker@gmail.com');
        cy.get('.password').type('faked').should('have.value', 'faked');
        //cy.get('.logButton').click()
    });

});

describe('auth.login', () => {
    beforeEach(() => {
        cy.visit('/#!/auth/login');
    });

    //follow register link
    it('links to auth/register', () => {
        cy.contains('Don\'t have an account? Create one.').should('have.attr', 'ui-sref', 'auth.register')
        cy.get('.register-link').click()
    });
    
    it('logs in', () => {
        cy.get('.username').type('cole').should('have.value', 'cole');
        cy.get('.password').type('password{enter}');
        //cy.get('.error-messages').should('contain', 'Email can\'t be blank');
    });

    //try make sure it doesnt accept blank fields
    it('won\'t login if blank', () => {
        cy.get('.password').type('{enter}');
        //cy.get('.error-messages').should('contain', 'Email can\'t be blank');
    });


    /*
    it('requires valid username and password', () => {
        cy.get('[data-test-email]').type('test');
        cy.get('[data-test-password]').type('invalid{enter}');
        cy.get('.error-messages').should('contain', 'Invalid username/password');
    });

    it('navigates to home on successful login', () => {
        cy.get('[data-test-email]').type('test');
        cy.get('[data-test-password]').type('correctpassword{enter}');
        cy.hash().should('eq', '#!/');
    });*/
});
