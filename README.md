# 🧪 Portfólio de QA — Sistema EscolaNotas

Portfólio de **Quality Assurance** de **Clara de Oliveira Luizon**.

Aqui eu documento o processo completo de teste de um sistema de gestão escolar: planejamento, criação e execução de casos de teste, e registro de defeitos — do jeito que um QA faz no dia a dia.

> 🔗 **[Abrir o sistema EscolaNotas](https://luizonclara.github.io/clara-qa-lab/Sistema-EscolaNotas.html)**

---

## ⚠️ Sobre a autoria

O **sistema EscolaNotas** (`Sistema-EscolaNotas.html`) foi criado com o auxílio do Claude (Anthropic): eu tive a ideia do sistema e usei a IA para construí-lo, assim como uso IA como ferramenta no meu dia a dia de trabalho.

O foco principal deste portfólio é a **atividade de QA**: o plano de teste, os casos de teste, os testes exploratórios e o registro de defeitos — esse trabalho é inteiramente meu.

---

## 📋 Conteúdo do repositório

| Arquivo | O que é |
|---|---|
| `PLANO-DE-TESTE.md` | Escopo, estratégia, riscos e critérios de entrada/saída |
| [Casos-de-Teste-EscolaNotas](https://docs.google.com/spreadsheets/d/1JWYZHjidW-xUY-GNLFvotRnCuKOV8zJCH9BROBfryvA) | Matriz completa de casos de teste (funcionais, negativos, RBAC e exploratórios) |
| `Sistema-EscolaNotas.html` | Sistema sob teste — abra no navegador para testar |

---

## 🧪 Tipos de teste cobertos

- **Funcional** — caminho feliz para cada funcionalidade
- **Negativo** — validações de campo, dados duplicados, formatos inválidos
- **Permissão / Controle de acesso (RBAC)** — o que cada perfil pode acessar
- **Exploratório** — investigação além dos requisitos documentados

## 🔧 Técnicas e práticas aplicadas

- **Partição de equivalência** — agrupar entradas com comportamento igual
- **Análise de valor limite** — notas `0`/`10`, média `4,0`/`7,0`, frequência `75%`
- **Tabela de decisão** — situação por disciplina (frequência × faixa de média)
- Documentação de casos com pré-condições, passos, dados de teste e resultado esperado
- Relatórios de defeito com passos para reprodução, esperado × obtido, evidência, severidade e prioridade

---

## 📊 Resumo de cobertura

| Requisito | Descrição | Casos escritos |
|---|---|---|
| RF01 | Login e perfis (RBAC) | ✅ Completo |
| RF02 | Cadastro de alunos | ✅ Completo |
| RF03 | Disciplinas e professores | ✅ Completo |
| RF04 | Turmas | ✅ Completo |
| RF05 | Lançamento de notas | ✅ Completo |
| RF06 | Situação por disciplina | ✅ Completo |
| RF07 | Situação geral do aluno | ✅ Completo |
| RF08 | Boletim e relatórios | ✅ Completo |

---

## ▶️ Como abrir o sistema sob teste

Abra o arquivo `Sistema-EscolaNotas.html` em qualquer navegador. Credenciais de teste:

| Perfil | Usuário | Senha | Acesso |
|---|---|---|---|
| Administrador | `admin` | `admin123` | Tudo |
| Coordenador | `coordenador` | `coord123` | Dashboard, Alunos, Turmas, Notas, Boletim, Relatórios |
| Professor | `professor` | `prof123` | Dashboard, Lançar Notas, Boletim |

> 💡 Você também pode usar o link do GitHub Pages no topo desta página para abrir o sistema direto no navegador, sem baixar nada.

---

## 🚀 Como ativar o GitHub Pages

1. No repositório, vá em **Settings → Pages**
2. Em *Source*, selecione **Deploy from a branch**
3. Escolha a branch `main` e a pasta `/ (root)`
4. Clique em **Save**
5. Aguarde alguns minutos e acesse a URL gerada

---

**Contato:** Clara de Oliveira Luizon · luizonclara@gmail.com
