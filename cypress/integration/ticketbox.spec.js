describe('Ticketbox', () => {
    beforeEach(()=> cy.visit('index.html'))

    it('Check for the initial state', () => {
        cy.percySnapshot()
    })
})