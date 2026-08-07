import Disc from "./pages/disciplinas"

describe("Disciplinas", ()=> {

        beforeEach(()=> {
        Disc.visitarPagina()
        Disc.loginAdm()

    })

    it('CT-DISC-01: Criar nova disciplina', ()=> {
        Disc.criarNewDisc()

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

    it('CT-DISC-04: Excluir uma disciplina com sucesso', ()=> {
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
    
    it.skip('CT-DISC-07: Formulário de edição continua ativo após excluir a disciplina em edição', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('História')
        cy.get('[data-testid="disc-carga"]').type('60')
        cy.get('[data-testid="btn-salvar-disc"]').click()

        cy.contains('tr', 'História').find('button').contains('Editar').click()
        cy.contains('tr', 'História').find('button').contains('Excluir').click()
        cy.get('[data-testid="modal-confirm"]').click()

        cy.get('[data-testid="disc-carga"]').clear().type('99')
        cy.get('[data-testid="btn-salvar-disc"]').click()

    })

    it('CT-DISC-08: Cadastro com carga horária igual a zero', ()=> {
       cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Quimica')
        cy.get('[data-testid="disc-carga"]').type('0')
        cy.get('[data-testid="btn-salvar-disc"]').click()

        cy.contains('Carga horária numérica maior que 0.').should('be.visible')

    })

    it('CT-DISC-09: Cadastro com carga horária negativa', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Quimica')
        cy.get('[data-testid="disc-carga"]').type('-25')
        cy.get('[data-testid="btn-salvar-disc"]').click()

        cy.contains('Carga horária numérica maior que 0.').should('be.visible')

    } )

    it('CT-DISC-10: Cadastro com letras na carga horária', ()=> {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Quimica')
        cy.get('[data-testid="disc-carga"]').type('1a2')
        cy.get('[data-testid="btn-salvar-disc"]').click()

        cy.contains('Carga horária numérica maior que 0.').should('be.visible')
    })
    
    it('CT-DISC-11: Cadastro com carga horária decimal', () => {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Quimica')
        cy.get('[data-testid="disc-carga"]').type('70.5')
        cy.get('[data-testid="btn-salvar-disc"]').click()


})

    it('CT-DISC-12: Cadastro com caractere especial no nome', () => {
        cy.get('[data-testid="nav-disciplinas"]').click()
        cy.get('[data-testid="disc-nome"]').type('Qu%mica')
        cy.get('[data-testid="disc-carga"]').type('50')
        cy.get('[data-testid="btn-salvar-disc"]').click()

})

    it.skip('CT-DISC-13: Excluir disciplina vinculada a um professor', ()=> {
        cy.get('[data-testid="nav-professores"]').click()
        cy.get('[data-testid="prof-nome"]').type('Teste A')
        cy.get('[data-testid="prof-email"]').type('testea@escolanotas.com')
        cy.contains('label', 'Matemática').find('input').check()
        cy.get('[data-testid="btn-salvar-prof"]').click()

        cy.get('[data-testid="nav-disciplinas"]').click()

        cy.contains('tr', 'Matemática').find('button').contains('Excluir').click()
        cy.get('[data-testid="modal-confirm"]').click()

        cy.get('[data-testid="nav-professores"]').click()
        cy.get('[data-testid="prof-tbody"]').contains('tr', 'Teste A').should('contain', 'Matemática')


    })

})