// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (usuario, password) => {
  cy.visit("https://pruebasorion.infokairos.com.co");
  cy.get("#usuario").type(usuario); /*1017155609*/
  cy.get("#password").type(password);
  cy.get('input[type = "submit"]').click();
  cy.url().should("include", "/admin");
});

Cypress.Commands.add("loginPolarix", (usuario, password) => {
  cy.visit("https://pruebas.kairosplus.com.co/user/login");
  cy.get("#identity").type(usuario); /*1017155609*/
  cy.get("#credential").type(password);
  cy.get('button[type = "submit"]').click();
  cy.url().should("include", "/clientes");
});

const token = { Number: "85910400611434" };
