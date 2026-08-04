import Alunos from "./pages/alunos"
import { elements as el } from "./pages/alunos/elements"

describe("Alunos", () => {

    beforeEach(() => {
        Alunos.visitarPagina()
        Alunos.loginAdm()
    })

    it("CT-ALUNO-01: Cadastro de aluno com sucesso", () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Teste Aluno',
            matricula: '123456',
            cpf: '999.999.999-99',
            nasc: '2010-05-05',
            turma: '1A',
            resp: 'Mãe Teste',
            tel: '11999999999',
            email: 'teste@teste.com',
            status: 'Ativo'
        })
        cy.contains(el.listaAlunos, 'Teste Aluno').should('be.visible')
    })

    it("CT-ALUNO-02: Cadastro de aluno com matrícula duplicada", () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Aluno A',
            matricula: '140325',
            cpf: '99999999999',
            nasc: '2007-02-06',
            turma: '1A',
            resp: 'Resp A',
            tel: '11999999999',
            email: 'testea@test.com',
            status: 'Ativo'
        })
        cy.contains(el.listaAlunos, 'Aluno A').should('be.visible')

        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Aluno B',
            matricula: '140325',
            cpf: '12345678910',
            nasc: '2006-10-08',
            turma: '2B',
            resp: 'Resp B',
            tel: '11987456123',
            email: 'testeb@test.com',
            status: 'Ativo'
        })

        cy.contains('Matrícula numérica e única.').should('be.visible')
    })

    it("CT-ALUNO-03: Cadastro de aluno com número no nome", () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'C12',
            matricula: '140325',
            cpf: '99999999999',
            nasc: '2007-02-06',
            turma: '1A',
            resp: 'Teste A',
            tel: '11999999999',
            email: 'testea@test.com',
            status: 'Ativo'
        })
        cy.contains(el.listaAlunos, 'C12').should('be.visible')
    })

    it('CT-ALUNO-04: Cadastro de aluno com nome com menos de 3 caracteres', () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Cl',
            matricula: '33333',
            cpf: '99999999999',
            nasc: '2005-08-19',
            turma: '1A',
            resp: 'Teste A',
            tel: '11999999999',
            email: 'testea@test.com',
            status: 'Ativo'
        })
        cy.contains('Nome com pelo menos 3 caracteres.').should('be.visible')
    })

    it('CT-ALUNO-05: Cadastro com letras na matrícula', () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Teste Cinco',
            matricula: '24AB6',
            cpf: '99999999999',
            nasc: '2007-06-30',
            turma: '2B',
            resp: 'Teste Fiv',
            tel: '11912548637',
            email: 'testea@testando.com',
            status: 'Ativo'
        })
        cy.contains('Matrícula numérica e única.').should('be.visible')
    })

    it('CT-ALUNO-06: Cadastro com CPF incompleto', () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Teste Seis',
            matricula: '16543',
            cpf: '5987463571',
            nasc: '2008-12-05',
            turma: '2B',
            resp: 'Teste Six',
            tel: '11987456248',
            email: 'testea@testando.com',
            status: 'Ativo'
        })
        cy.contains('CPF no formato 000.000.000-00.').should('be.visible')
    })

    it('CT-ALUNO-07: Cadastro com e-mail inválido', () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Teste Sete',
            matricula: '12433',
            cpf: '59874635713',
            nasc: '2008-02-08',
            turma: '2B',
            resp: 'Teste Seven',
            tel: '11987456248',
            email: 'teste%testando.com',
            status: 'Ativo'
        })
        cy.contains('E-mail obrigatório e válido.').should('be.visible')
    })

    it('CT-ALUNO-08: Cadastro com telefone vazio', () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Teste Oito',
            matricula: '12433',
            cpf: '59874635713',
            nasc: '2008-08-08',
            turma: '2B',
            resp: 'Teste Eight',
            tel: ' ',
            email: 'testea@testando.com',
            status: 'Ativo'
        })
        cy.contains('Telefone obrigatório no formato (00) 00000-0000.').should('be.visible')
    })

    it('CT-ALUNO-09: Cadastro com todos os campos vazios', () => {
        Alunos.abrirNovoAluno()
        Alunos.salvar()
        cy.contains('Corrija os campos destacados.').should('be.visible')
    })

    it('CT-ALUNO-10: Cadastro com turma não selecionada', () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Teste Dez',
            matricula: '12433',
            cpf: '59874635713',
            nasc: '2008-08-08',
            turma: '',
            resp: 'Teste Ten',
            tel: '11954691234',
            email: 'teste@testando.com',
            status: 'Ativo'
        })
        cy.contains('Selecione uma turma.').should('be.visible')
    })

    it('CT-ALUNO-11: Cadastro com responsável em branco', () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Teste Onze',
            matricula: '12433',
            cpf: '59874635713',
            nasc: '2008-08-08',
            turma: '1A',
            resp: '',
            tel: '11954691234',
            email: 'teste@testando.com',
            status: 'Ativo'
        })
        cy.contains('Informe o responsável.').should('be.visible')
    })

    it('CT-ALUNO-12: Editar cadastro de aluno com sucesso', () => {
        Alunos.abrirListaAlunos()
        Alunos.editar('2026001')
        cy.get(el.telAluno).clear().type('11988887777')
        Alunos.salvar()

        Alunos.editar('2026001')
        cy.get(el.telAluno).should('have.value', '(11) 98888-7777')
    })

    it('CT-ALUNO-13: Excluir um cadastro de aluno com sucesso', () => {
        Alunos.abrirNovoAluno()
        Alunos.cadastrarAluno({
            nome: 'Bianca Gomes',
            matricula: '1456',
            cpf: '68723987456',
            nasc: '2006-06-06',
            turma: '1A',
            resp: 'Mãe Bianca',
            tel: '11999990001',
            email: 'teste@testando.com',
            status: 'Ativo'
        })
        cy.contains(el.listaAlunos, 'Bianca Gomes').should('be.visible')

        Alunos.excluir('1456')
        cy.get(el.listaAlunos).should('not.contain', 'Bianca Gomes')
    })

})
