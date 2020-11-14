//User should be able to see updated leaderboard if placed in the top 10
describe('leaderboard', () => {
    beforeEach(() => {
        cy.loginByForm()
    });

    it('check leaderboard', () => {
        cy.wait(1000)
        //Check on 3 columns
        cy.visit('#!/leaderboard')
        cy.contains('User name').should('be.visible')
        cy.contains('Sentence').should('be.visible')
        cy.contains('Speed').should('be.visible')
        //check number of rows
        cy.get('.leader').find('tr').should('have.length', 11)
        //loop through third column and compare values to check ordering
        var initial = 0
        for (var i = 1; i < 11; i++) {
            cy.get('.leader').find('tr').eq(i).find('td').eq(2).then(($txt) => { 
                var number = parseFloat($txt.text())
                expect(number).not.be.lessThan(initial)
                initial = number
            })
        }
    })

});