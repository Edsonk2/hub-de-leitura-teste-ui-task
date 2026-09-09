Feature: Login no Hub de Leitura

  Scenario: Login com credenciais válidas
    Given que estou na página de login
    When informo um email e uma senha válidos
    And clico no botão de login
    Then devo ser direcionado para a página inicial

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When informo um email ou senha inválidos
    And clico no botão de login
    Then devo visualizar uma mensagem de erro