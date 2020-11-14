//user should be able to type in text box and verify they were typing correctly
describe('auth.login', () => {
    beforeEach(() => {
        cy.loginByForm()
    });

    it('can check if text typing correct text', function () {
        //get text to be typed
        cy.get('.txt').then(($txt) => { 
            const txt = $txt.text()
            cy.get('.tbox').type(txt).clear()
            cy.get('.txt').then(($txt) => { 
                var txt = $txt.text()
                txt=txt.concat('{enter}')
                //type text
                cy.get('.tbox').type(txt)
                //check if correct
                cy.contains('You typed it correctly! Try again!').should('be.visible')
            })
        })
    })

    //type incorrect sentence
    it('typing incorrect sentence fails', function () {
        cy.get('.tbox').type('This is a super important test{enter}')
        cy.contains('You are a miserable failure:(').should('be.visible')
    });

});