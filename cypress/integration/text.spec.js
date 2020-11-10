//user should be able to type in text box and verify they were typing correctly
describe('auth.register', () => {
    beforeEach(() => {
        cy.loginByForm()
    });

    it('home', () => {
        cy.contains('You are a')
    });


});