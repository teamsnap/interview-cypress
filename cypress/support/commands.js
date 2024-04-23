// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * login command to login to the teamsnap website
 * cy.session is used to store the email and password in the session storage
 * @param {string} email - email address to login with
 * @param {string} password - password to login with
 */
Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('https://go.teamsnap.com/login/signin');
    cy.get(':nth-child(2) > #login').type(email);
    cy.get('#password').type(password);
    cy.get('.btn').click();
    cy.url().should('include', '/team/dashboard');
  })
});
