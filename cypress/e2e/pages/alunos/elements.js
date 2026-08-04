export const elements = {
    navDashboard: '[data-testid="nav-dashboard"]',
    navAlunos: '[data-testid="nav-alunos"]',
    novoAlunoButton: '[data-testid="btn-novo-aluno"]',
    nomeAluno: '[data-testid="aluno-nome"]',
    matriculaAluno: '[data-testid="aluno-matricula"]',
    cpfAluno: '[data-testid="aluno-cpf"]',
    nascAluno: '[data-testid="aluno-nasc"]',
    turmaAluno: '[data-testid="aluno-turma"]',
    respAluno: '[data-testid="aluno-resp"]',
    telAluno: '[data-testid="aluno-tel"]',
    emailAluno: '[data-testid="aluno-email"]',
    statusAluno: '[data-testid="aluno-status"]',
    salvarAlunoButton: '[data-testid="btn-salvar-aluno"]',
    listaAlunos: '[data-testid="alunos-tbody"]',
    modalConfirmar: '[data-testid="modal-confirm"]',
    editarAluno: (matricula) => `[data-testid="edit-${matricula}"]`,
    excluirAluno: (matricula) => `[data-testid="del-${matricula}"]`
}
