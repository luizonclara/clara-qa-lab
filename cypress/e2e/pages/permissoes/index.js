import { elements as el } from "./elements"

class RBAC {

    visitarPagina() {
        cy.visit("/Sistema-EscolaNotas.html")
    }

    logar(usuario, senha) {
        cy.get(el.username).type(usuario)
        cy.get(el.password).type(senha)
        cy.get(el.loginButton).click()
    }

    adminMenuCompleto() {
        this.logar('admin', 'admin123')

        const menusEsperados = [
            'Dashboard', 'Alunos', 'Professores', 'Disciplinas', 'Turmas',
            'Lançar Notas', 'Boletim', 'Relatórios', 'Requisitos'
        ]

        menusEsperados.forEach((menu) => {
            cy.get(el.menuLateral).contains(menu).should('be.visible')
        })
    }

    coordenadorNaoVeProfessoresEDisciplinas() {
        this.logar('coordenador', 'coord123')

        cy.get(el.whoRole).should('have.text', 'Coordenador')
        cy.get(el.menuLateral).should('not.contain', 'Professores')
        cy.get(el.menuLateral).should('not.contain', 'Disciplinas')
    }

    professorVeApenasMenusPermitidos() {
        this.logar('professor', 'prof123')

        cy.get(el.whoName).should('have.text', 'Professor')
        cy.get(el.whoRole).should('have.text', 'Professor')

        const menusPermitidos = ['Dashboard', 'Lançar Notas', 'Boletim', 'Requisitos']
        menusPermitidos.forEach((menu) => {
            cy.get(el.menuLateral).contains(menu).should('be.visible')
        })

        const menusBloqueados = ['Alunos', 'Professores', 'Disciplinas', 'Turmas', 'Relatórios']
        menusBloqueados.forEach((menu) => {
            cy.get(el.menuLateral).should('not.contain', menu)
        })
    }

}

export default new RBAC()
