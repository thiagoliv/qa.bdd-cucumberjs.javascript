
# Desafio BDD - Cucumber.js

Este projeto implementa um sistema de validação de idade utilizando BDD (Behavior-Driven Development) com o framework Cucumber.js. O objetivo é validar se uma pessoa pode ou não consumir bebida alcoólica com base na sua idade.

## Pergunta

1. **Com base no vídeo [BDD não é automação de teste](https://www.youtube.com/watch?v=O_FiotmX0R4) de uma das grandes referências da nossa área de qualidade 'Elias Nogueira', explique com suas palavras o que é o BDD e como aplicá-lo da maneira correta no ciclo de desenvolvimento de software?**

   **Resposta:** BDD, ou Behavior-Driven Development, é uma metodologia ágil que se concentra na definição de comportamentos esperados para o sistema, em uma linguagem que todos os envolvidos no projeto possam entender, como os requisitos escritos em Gherkin. Diferente de outras metodologias focadas apenas no código, o BDD promove a colaboração entre desenvolvedores, QAs e stakeholders, garantindo que todos compreendam as funcionalidades esperadas. Para aplicá-lo corretamente, os cenários de teste devem ser escritos antes do desenvolvimento, servindo como uma especificação funcional que orienta o desenvolvimento e facilita a validação dos requisitos. Esses cenários são depois automatizados, mas o foco permanece na descrição do comportamento esperado e não na automação em si.

## Requisitos Funcionais

- **RF001**: Pessoas maiores de 17 anos podem consumir bebida alcoólica.
- **RF002**: Pessoas menores de 17 anos não podem consumir bebida alcoólica.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
qa.bdd-cucumberjs.javascript/
├── .github/workflows/ci.yml   # Pipeline para execução dos testes no GitHub Actions
├── features/
│   └── pessoa.feature         # Cenários de BDD em Gherkin
├── src/
│   └── Pessoa.js              # Classe Pessoa com o método ehMaiorDeIdade
├── step_definitions/
│   └── pessoa.steps.js        # Implementação dos passos dos cenários em Gherkin
├── package.json               # Configurações do projeto e dependências
└── README.md                  # Instruções e documentação do projeto
```

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js (versão 12 ou superior) instalado em seu ambiente.
- **npm**: O Node Package Manager (npm) deve estar disponível junto com o Node.js.

## Instalação

1. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/seu-usuario/qa.bdd-cucumberjs.javascript.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd qa.bdd-cucumberjs.javascript
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Configurações Necessárias

Este projeto usa o `@cucumber/cucumber` para definir e executar testes unitarios. As principais dependências estão listadas no `package.json`, e os passos dos testes foram implementados no arquivo `pessoa.steps.js` na pasta `step_definitions`.

### Dependências

- `@cucumber/cucumber`: Framework para testes BDD com sintaxe Gherkin.
- `assert`: Biblioteca nativa do Node.js para asserções, usada para verificar os resultados dos testes.
  
O arquivo `ci.yml` configura o pipeline de integração contínua no GitHub Actions para garantir que todos os testes sejam executados automaticamente em cada commit.

## Executando o Projeto Manualmente

1. Certifique-se de que as dependências foram instaladas.
2. Execute o seguinte comando para rodar os testes:
   ```bash
   npm test
   ```

Esse comando irá executar todos os cenários definidos no arquivo `pessoa.feature` e verificar se o sistema se comporta conforme o esperado.

### Exemplo de Saída Esperada

Se todos os testes passarem, você verá uma saída similar a esta:

```
> qa.bdd-cucumberjs.javascript@1.0.0 test
> cucumber-js

..

2 scenarios (2 passed)
6 steps (6 passed)
0m00.003s
```

Se algum teste falhar, a saída mostrará detalhes do cenário e do passo onde ocorreu a falha.

---
