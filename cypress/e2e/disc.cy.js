describe("Disciplinas", ()=> {

    beforeEach(()=> {
        cy.visit("/Sistema-EscolaNotas.html")
        cy.get('[data-testid="login-user"]').type('admin')
        cy.get('[data-testid="login-pass"]').type('admin123')
        cy.get('[data-testid="btn-login"]').click()

    })

    it('CT-DSIC-01: Criar nova disciplina', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Geografia')
        cy.get('[data-testid="disc-carga"]').type('60')
        cy.get('[data-testid="btn-salvar-disc"]').click()

    })

    it('CT-DISC-02: Cadastro de disciplina com o nome vazio', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]')
        cy.get('[data-testid="disc-carga"]').type('60')
        cy.get('[data-testid="btn-salvar-disc"]').click()
        cy.contains('Nome obrigatório').should('be.visible')
    })

    it('CT-DISC-03: Editar disciplina com sucesso', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Geografia')
        cy.get('[data-testid="disc-carga"]').type('60')
        cy.get('[data-testid="btn-salvar-disc"]').click()

        cy.contains('tr', 'Geografia').find('button').contains('Editar').click()
        cy.get('[data-testid="disc-carga"]').clear().type('50')
        cy.get('[data-testid="btn-salvar-disc"]').click()
    })

    it('CT-DISC-04:Excluir uma disciplina com sucesso', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Espanhol')
        cy.get('[data-testid="disc-carga"]').type('40')
        cy.get('[data-testid="btn-salvar-disc"]').click()


        cy.contains('tr', 'Espanhol').find('button').contains('Excluir').click()
        cy.get('[data-testid="modal-confirm"]').click()
        cy.get('[data-testid="disc-tbody"]').should('not.contain', 'Espanhol')
    })

    it('CT-DISC-05: Cadastro com carga horária vazia', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Geografia')
        cy.get('[data-testid="disc-carga"]')
        cy.get('[data-testid="btn-salvar-disc"]').click()
        cy.contains('Carga horária numérica maior que 0').should('be.visible')
    })

    it('CT-DISC-06: Cadastro de nova disciplina com números no nome', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Qu1mica')
        cy.get('[data-testid="disc-carga"]').type('45')
        cy.get('[data-testid="btn-salvar-disc"]').click()



    })
    


})