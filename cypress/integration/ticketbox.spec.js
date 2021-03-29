/// <reference types = "Cypress" />

describe('Ticketbox', () => {
    beforeEach(()=> cy.visit('index.html'))

    it('Verificar o estado inicial', () => {
        cy.percySnapshot()
    })
    
    it('Verificar email invalido', () => {
        cy.get('#email').type('erisson-breno.com')
        cy.percySnapshot()
    })
    
    it('Habilita campo de submissao apos todos os campos obrigatorios serem preenchidos', () => {
        cy.preencheOsCamposObrigatorios()
        cy.percySnapshot()
    })
    
    it('Muda o agreement baseado no nome completo, quantidade de tickets e tipo', () => {
        cy.get('#first-name').type('Erisson')
        cy.get('#last-name').type('Batista')
        cy.get('#ticket-quantity').select('4')
        cy.get('#vip').check()
        cy.percySnapshot()
    })
    
    const exibeMensagemDeSucesso = 'Exibe uma mensagem de sucesso apos a submissao do formulario'
    it(exibeMensagemDeSucesso, () => {
        cy.preencheOsCamposObrigatorios()
        cy.contains('Confirm Tickets').click()
        cy.percySnapshot(
            exibeMensagemDeSucesso,
            {
                percyCSS: `.success span { display: none}`
            }
        )
    })
})