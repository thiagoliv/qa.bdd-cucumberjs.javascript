Feature: Verificação de maioridade para consumo de bebida alcoólica

  Scenario: Pessoa maior de idade
    Given que a pessoa tem 18 anos ou mais
    When verifico se ela pode consumir bebida alcoólica
    Then a resposta deve ser que pode consumir bebida alcoólica

  Scenario: Pessoa menor de idade
    Given que a pessoa tem menos de 17 anos
    When verifico se ela pode consumir bebida alcoólica
    Then a resposta deve ser que não pode consumir bebida alcoólica
