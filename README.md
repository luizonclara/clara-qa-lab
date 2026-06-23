# 🧪 Portfólio de QA — Sistema de Gestão Escolar (EscolaNotas)

Portfólio de **Quality Assurance** de **Clara de Oliveira Luizon**.

Neste repositório eu documento o processo de teste de um sistema de gestão escolar: planejamento, criação e execução de casos de teste, e registro de defeitos — do jeito que um QA faz no dia a dia.

---

## ⚠️ Sobre a autoria

O **sistema EscolaNotas** (a aplicação `Sistema-EscolaNotas.html`) foi disponibilizado apenas como **alvo de testes** (Sistema Sob Teste). Ele **não** é um projeto de desenvolvimento de minha autoria. O foco deste portfólio — e o trabalho que é meu — é a **atividade de QA**: o plano de teste, os casos de teste, os testes exploratórios e o registro de defeitos.

---

## 📋 Conteúdo do repositório

| Arquivo | O que é |
|---|---|
| `PLANO-DE-TESTE.md` | Escopo, estratégia, riscos e critérios de entrada/saída. |
| `Casos-de-Teste-EscolaNotas.xlsx` | Matriz de casos de teste (funcionais, negativos, permissão/RBAC e exploratórios). |
| `Sistema-EscolaNotas.html` | Sistema sob teste (aplicação de prática). |

---

## 🧪 Tipos de teste cobertos

- **Funcional** (caminho feliz)
- **Negativo** (validações de campo, dados duplicados, formatos inválidos)
- **Permissão / Controle de acesso (RBAC)** — o que cada perfil pode acessar
- **Exploratório** — investigação além dos requisitos

## 🔧 Técnicas e práticas aplicadas

Partição de equivalência, análise de valor limite e tabela de decisão. Documentação de casos com pré-condições, passos, dados de teste e resultado esperado, além de relatórios de defeito (passos para reprodução, esperado x obtido, evidência, severidade e prioridade).

---

## ▶️ Como abrir o sistema sob teste

Abra o arquivo `Sistema-EscolaNotas.html` em qualquer navegador. Credenciais de teste:

- **admin / admin123** — acesso total
- **coordenador / coord123** — sem acesso a Professores e Disciplinas
- **professor / prof123** — apenas Dashboard, Notas e Boletim

> 💡 Opcional: publicar via **GitHub Pages** (Settings → Pages) para que qualquer pessoa rode o sistema direto pelo navegador, sem baixar nada.

---

**Contato:** Clara de Oliveira Luizon · luizonclara@gmail.com
