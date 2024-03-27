Cypress.Commands.add("login", (user, password) => {
    cy.visit("https://tasks.evalartapp.com/automatization/");
    cy.get('[name="username"]').type(user);
    cy.get('[name="password"]').type(password);
    cy.get('.mx-auto').contains("Enviar").click();
  });
