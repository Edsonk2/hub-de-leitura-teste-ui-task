import { faker } from '@faker-js/faker';

describe("Testes End To End do fluxo de cadastro e login", () => {

  it("Deve fazer o cadastro e validar o login com o usuário cadastrado", () => {

    const email = faker.internet.email();
    const senha = "qa1234";

    // Cadastro
    cy.visit("http://localhost:3000/register.html");

    cy.get("#name").type("Edson QA");
    cy.get("#email").type(email);
    cy.get("#phone").type("2456785");
    cy.get("#password").type(senha);
    cy.get("#confirm-password").type(senha);
    cy.get("#terms-agreement").click();
    cy.get("#register-btn").click();

    // Validação do cadastro
    cy.contains("Conta criada com sucesso! Fazendo login...")
      .should("be.visible");

    // Login
    cy.visit("http://localhost:3000/login.html");

    cy.login(email, senha);
  });

});