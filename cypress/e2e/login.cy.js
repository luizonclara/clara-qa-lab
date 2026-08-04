import Login from "./pages/login"

describe("Login", () => {

  beforeEach(() => {
    Login.visitarPagina()
  })

  it("CT-LOGIN-01: Login com sucesso", () => {
    Login.fazerLogin({
      usuario: 'admin',
      senha: 'admin123'
    })
    Login.validarLoginComSucesso('Administrador', 'Administrador')
  })

  it("CT-LOGIN-02: Login com senha inválida", () => {
    Login.fazerLogin({
      usuario: 'admin',
      senha: 'admin12'
    })
    cy.contains('Usuário ou senha inválidos.').should('be.visible')
  })

  it("CT-LOGIN-03: Login com campo vazio", () => {
    Login.fazerLogin({
      usuario: 'admin'
    })
    cy.contains('Preencha a senha.').should('be.visible')
  })

})
