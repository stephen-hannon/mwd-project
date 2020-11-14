//User should be able to see updated leaderboard if placed in the top 10
describe('leaderboard', () => {
    beforeEach(() => {
        cy.loginByForm()
        //
    });

    it('check leaderboard', () => {
        cy.wait(1000)
        cy.visit('#!/leaderboard')
        cy.contains('User name').should('be.visible')
        cy.contains('Sentence').should('be.visible')
        cy.contains('Speed').should('be.visible')
        cy.get('.leader').find('tr').should('have.length', 11)
        //take 3rd column in row to array and compare to sorted array

        var initial = 0
        for (var i = 1; i < 11; i++) {
            // cy.get('.leader').find('tr').eq(i).find('td').eq(2).invoke('text').should('be.gt',initial)
            //initial=cy.get('.leader').find('tr').eq(i).find('td').eq(2).text()
            cy.get('.leader').find('tr').eq(i).find('td').eq(2).then(($txt) => { 
                var number = parseFloat($txt.text())
                expect(number).not.be.lessThan(initial)
                initial = number
            })
        }
    })

});