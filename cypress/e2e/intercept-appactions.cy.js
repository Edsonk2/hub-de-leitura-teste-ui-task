describe("Testes com Intercept e AppActions", () => {
  it("Deve carregar as reservas com sucesso", () => {
    cy.intercept("GET", "**/api/reservations", {
      statusCode: 200,
    }).as("getReservations");

    cy.visit("/login.html");

    cy.login("usuario@teste.com", "user123");

    cy.wait("@getReservations");
  });

  it("Deve tratar erro ao carregar as reservas", () => {
    cy.intercept("GET", "**/api/reservations", {
      statusCode: 500,
      body: {
        error: "Erro interno do servidor",
      },
    }).as("getReservationsError");

    cy.visit("/login.html");

    cy.login("usuario@teste.com", "user123");

    cy.wait("@getReservationsError");
  });

  it("Deve realizar login usando AppAction", () => {
    cy.visit("/login.html");
    cy.login("usuario@teste.com", "user123");
    cy.url().should("include", "dashboard");
  });
});
