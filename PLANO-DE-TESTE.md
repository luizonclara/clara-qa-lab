# Plano de Teste — Sistema EscolaNotas

**Autora:** Clara de Oliveira Luizon
**Sistema sob teste:** EscolaNotas (sistema de gestão escolar — web)

---

## 1. Objetivo

Validar as funcionalidades de login, controle de acesso por perfil, cadastro de alunos e regras de cálculo de notas do sistema EscolaNotas, garantindo que as regras de negócio (RF01–RF08) funcionem corretamente antes da liberação.

## 2. Escopo — o que SERÁ testado

- Login e mensagens de erro (RF01)
- Permissões por perfil — Administrador, Coordenador e Professor (RF01)
- Cadastro de alunos e suas validações (RF02)
- Lançamento de notas e validações de campo (RF05)
- Cálculo da situação por disciplina e situação geral (RF06–RF07)
- Boletim e relatórios (RF08)

## 3. Fora de escopo — o que NÃO será testado

Desempenho/carga, segurança (ex.: injeção de código), compatibilidade entre navegadores e responsividade mobile. Definir o que fica de fora evita expectativas erradas sobre a cobertura.

## 4. Estratégia / abordagem

Testes funcionais manuais, em nível de sistema, na visão do usuário. Cobertura de **caminho feliz**, **cenários negativos**, **permissão (RBAC)** e **exploratórios**.

Técnicas de design de teste aplicadas:

- **Partição de equivalência** — agrupar entradas que se comportam igual.
- **Análise de valor limite** — notas `0`/`10`, média `4,0`/`7,0`, frequência `75%`.
- **Tabela de decisão** — situação por disciplina (frequência × faixa de média).

## 5. Ambiente e ferramentas

Sistema executado localmente no navegador (Chrome). Casos de teste documentados em planilha (`Casos-de-Teste-EscolaNotas.xlsx`); organização e acompanhamento em Jira.

## 6. Critérios de entrada (quando posso começar a testar)

Sistema acessível, requisitos disponíveis (aba Requisitos) e casos de teste escritos e revisados.

## 7. Critérios de saída (quando o teste é concluído)

- 100% dos casos de prioridade Alta executados.
- Nenhum defeito crítico ou de alta severidade em aberto.
- Defeitos de baixa severidade documentados e aceitos.

## 8. Riscos

- Regras de borda mal interpretadas (ex.: arredondamento da média).
- Requisitos omissos sobre comportamentos específicos (tratados via testes exploratórios e dúvidas ao PO).
- Prazo curto — mitigado priorizando os casos de prioridade Alta.

## 9. Entregáveis

Matriz de casos de teste, registro de execução (passou/falhou) e relatórios de defeito.
