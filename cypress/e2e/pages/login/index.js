import { elements as el } from "./elements"

class Login {

    visitarPagina() {
        cy.visit("/Sistema-EscolaNotas.html")
    }

    fazerLogin(dados) {
        if (dados.usuario) {
            cy.get(el.username).type(dados.usuario)
        }
        if (dados.senha) {
            cy.get(el.password).type(dados.senha)
        }
        cy.get(el.loginButton).click()
    }

    validarLoginComSucesso(nome, perfil) {
        cy.get(el.navDashboard).should("be.visible")
        cy.get(el.whoName).should("have.text", nome)
        cy.get(el.whoRole).should("have.text", perfil)
    }

}

export default new Login()
