import RBAC from "./pages/permissoes"

describe("Permissões (RBAC)", () => {

    beforeEach(() => {
        RBAC.visitarPagina()
    })

    it("CT-AUTH-01: Admin vê todos os menus", () => {
        RBAC.adminMenuCompleto()
    })

    it("CT-AUTH-02: Coordenador não vê Professores e Disciplinas", () => {
        RBAC.coordenadorNaoVeProfessoresEDisciplinas()
    })

    it("CT-AUTH-03: Professor vê apenas os menus permitidos", () => {
        RBAC.professorVeApenasMenusPermitidos()
    })

})
