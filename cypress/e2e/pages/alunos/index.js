import { elements as el } from "./elements"
import Login from "../login"

class Alunos {

    visitarPagina() {
        cy.visit("/Sistema-EscolaNotas.html")
    }

    loginAdm() {
        Login.fazerLogin({ usuario: 'admin', senha: 'admin123' })
        cy.get(el.navDashboard).should("be.visible")
    }

    abrirListaAlunos() {
        cy.get(el.navAlunos).click()
        cy.get(el.listaAlunos).should("be.visible")
    }

    abrirNovoAluno() {
        this.abrirListaAlunos()
        cy.get(el.novoAlunoButton).click()
    }

    preencherFormulario(aluno) {
        if (aluno.nome) cy.get(el.nomeAluno).type(aluno.nome)
        if (aluno.matricula) cy.get(el.matriculaAluno).type(aluno.matricula)
        if (aluno.cpf) cy.get(el.cpfAluno).type(aluno.cpf)
        if (aluno.nasc) cy.get(el.nascAluno).type(aluno.nasc)
        if (aluno.turma) cy.get(el.turmaAluno).select(aluno.turma)
        if (aluno.resp) cy.get(el.respAluno).type(aluno.resp)
        if (aluno.tel) cy.get(el.telAluno).type(aluno.tel)
        if (aluno.email) cy.get(el.emailAluno).type(aluno.email)
        if (aluno.status) cy.get(el.statusAluno).select(aluno.status)
    }

    salvar() {
        cy.get(el.salvarAlunoButton).click()
    }

    cadastrarAluno(aluno) {
        this.preencherFormulario(aluno)
        this.salvar()
    }

    editar(matricula) {
        cy.get(el.editarAluno(matricula)).click()
    }

    excluir(matricula) {
        cy.get(el.excluirAluno(matricula)).click()
        cy.get(el.modalConfirmar).click()
    }

}

export default new Alunos()
