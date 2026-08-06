# 🧪 Portfólio de QA — Sistema EscolaNotas

[![Testes E2E](https://github.com/luizonclara/clara-qa-lab/actions/workflows/e2e.yml/badge.svg)](https://github.com/luizonclara/clara-qa-lab/actions/workflows/e2e.yml)

Portfólio de **Quality Assurance** de **Clara de Oliveira Luizon**.

Aqui eu documento o processo completo de teste de um sistema de gestão escolar: planejamento, criação e execução de casos de teste, testes automatizados e registro de defeitos — do jeito que um QA faz no dia a dia.

> 🔗 **[Abrir o sistema EscolaNotas](https://luizonclara.github.io/clara-qa-lab/Sistema-EscolaNotas.html)**

---

## ⚠️ Sobre a autoria

O **sistema EscolaNotas** (a aplicação `Sistema-EscolaNotas.html`) foi disponibilizado apenas como **alvo de testes** (Sistema Sob Teste). O foco deste portfólio — e o trabalho que é inteiramente meu — é a **atividade de QA**: o plano de teste, os casos de teste, os testes exploratórios, a automação e o registro de defeitos.

---

## 📋 Conteúdo do repositório

| Arquivo | O que é |
|---|---|
| `PLANO-DE-TESTE.md` | Escopo, estratégia, riscos e critérios de entrada/saída |
| `Casos-de-Teste-EscolaNotas.xlsx` | Matriz com 42 casos de teste — funcionais, negativos, RBAC e exploratórios. Traz aba de resumo, aba de defeitos e legenda. Também disponível no [Google Sheets](https://docs.google.com/spreadsheets/d/1JWYZHjidW-xUY-GNLFvotRnCuKOV8zJCH9BROBfryvA) |
| `Sistema-EscolaNotas.html` | Sistema sob teste — abra no navegador para testar |
| `cypress/e2e/` | Testes automatizados com Cypress |
| `.github/workflows/e2e.yml` | Pipeline que roda a suíte a cada push na `main` |

---

## ▶️ Como rodar os testes automatizados

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
# 1. clonar e instalar as dependências
git clone https://github.com/luizonclara/clara-qa-lab.git
cd clara-qa-lab
npm install

# 2a. abrir o Cypress em modo interativo (assistir os testes rodando)
npm run cy:open

# 2b. ou rodar a suíte inteira em modo headless
npm run cy:run
```

Por padrão a suíte roda contra a versão publicada no GitHub Pages, então funciona sem precisar subir servidor nenhum.

Para testar a cópia local do sistema, suba um servidor estático na raiz do projeto e aponte a `baseUrl` para ele:

```bash
python3 -m http.server 8080
npx cypress run --config baseUrl=http://localhost:8080
```

**Resultado esperado:** 25 testes, 25 passando.

```
✔  aluno.cy.js        13 passing
✔  disc.cy.js           6 passing
✔  login.cy.js          3 passing
✔  permissoes.cy.js     3 passing
```

---

## 🏗️ Organização da automação

Os testes seguem o padrão **Page Object Model**, separando *o que* é testado de *como* a página é acessada:

```
cypress/e2e/
├── aluno.cy.js            # CT-ALUNO-01 a 13
├── disc.cy.js             # CT-DISC-01 a 06
├── login.cy.js            # CT-LOGIN-01 a 03
├── permissoes.cy.js       # CT-AUTH-01 a 03
└── pages/
    ├── alunos/
    │   ├── elements.js    # seletores
    │   └── index.js       # ações da página
    ├── login/
    └── permissoes/
```

- **`elements.js`** — centraliza os seletores, todos ancorados em `data-testid` em vez de classe CSS, para que mudança de layout não quebre o teste.
- **`index.js`** — expõe ações de negócio (`cadastrarAluno`, `editar`, `excluir`), deixando os specs legíveis e sem duplicação.
- Cada `it()` carrega o **ID do caso de teste** correspondente à matriz, ligando a automação à documentação.

---

## 🧪 Tipos de teste cobertos

- **Funcional** — caminho feliz para cada funcionalidade
- **Negativo** — validações de campo, dados duplicados, formatos inválidos
- **Permissão / Controle de acesso (RBAC)** — o que cada perfil pode acessar
- **Exploratório** — investigação além dos requisitos documentados
- **Automatizado** — regressão dos fluxos críticos com Cypress

## 🔧 Técnicas e práticas aplicadas

- **Partição de equivalência** — agrupar entradas com comportamento igual
- **Análise de valor limite** — notas `0`/`10`, média `4,0`/`7,0`, frequência `75%`
- **Tabela de decisão** — situação por disciplina (frequência × faixa de média)
- Documentação de casos com pré-condições, passos, dados de teste e resultado esperado
- Relatórios de defeito com passos para reprodução, esperado × obtido, evidência, severidade e prioridade

---

## 📊 Resumo de cobertura

| Requisito | Descrição | Casos escritos | Automatizado (Cypress) |
|---|---|---|---|
| RF01 | Login e perfis (RBAC) | ✅ 8 casos | ✅ 6 testes |
| RF02 | Cadastro de alunos | ✅ 14 casos | ✅ 13 testes |
| RF03 | Disciplinas e professores | ✅ 20 casos | 🟡 6 testes (só disciplinas) |
| RF04 | Turmas | ⬜ Sem casos escritos | ⬜ Não automatizado |
| RF05 | Lançamento de notas | ⬜ Sem casos escritos | ⬜ Não automatizado |
| RF06 | Situação por disciplina | ⬜ Sem casos escritos | ⬜ Não automatizado |
| RF07 | Situação geral do aluno | ⬜ Sem casos escritos | ⬜ Não automatizado |
| RF08 | Boletim e relatórios | ⬜ Sem casos escritos | ⬜ Não automatizado |

**Casos escritos** = documentados na matriz de casos de teste e executados manualmente.
**Automatizado** = coberto pela suíte Cypress que roda no CI a cada push.

A matriz manual é maior que a suíte automatizada de propósito: automatiza-se o que é repetitivo e estável, não tudo. Dos 42 casos, 25 já estão automatizados — a coluna **Automatizado** da planilha aponta o arquivo de cada um.

Próximos passos: escrever os casos de RF04 e, na sequência, as regras de cálculo (RF05–RF07) — as de maior risco, por envolverem valores limite (notas `0`/`10`, médias `4,0`/`7,0` e frequência `75%`).

---

## 🐞 Defeitos encontrados

Três defeitos confirmados durante a execução, documentados na aba **Defeitos** da matriz com passos para reprodução, esperado × obtido, severidade e análise de impacto.

| ID | Defeito | Caso | Severidade |
|---|---|---|---|
| BUG-01 | Aluno que já vem cadastrado sem e-mail não pode ter nenhum dado editado, porque a validação exige e-mail. Os dados iniciais violam a regra que o próprio sistema aplica. | CT-ALUNO-14 | Média |
| BUG-02 | Ao excluir uma disciplina que está aberta em edição, o formulário continua preenchido. Salvar não grava nada e não exibe erro — falha silenciosa. | CT-DISC-07 | Média |
| BUG-03 | Excluir uma disciplina não remove o vínculo com o professor. O professor fica exibindo `—` e sem nenhuma disciplina válida, violando o RF03. | CT-DISC-13 | Alta |

---

## ▶️ Como abrir o sistema sob teste

Abra o arquivo `Sistema-EscolaNotas.html` em qualquer navegador, ou acesse pelo link do GitHub Pages no topo desta página.

**Credenciais de teste:**

| Perfil | Usuário | Senha | Acesso |
|---|---|---|---|
| Administrador | `admin` | `admin123` | Tudo |
| Coordenador | `coordenador` | `coord123` | Dashboard, Alunos, Turmas, Notas, Boletim, Relatórios |
| Professor | `professor` | `prof123` | Dashboard, Lançar Notas, Boletim |

---

**Contato:** Clara de Oliveira Luizon · luizonclara@gmail.com
