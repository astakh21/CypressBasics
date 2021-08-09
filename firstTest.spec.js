/// <reference types="cypress" />

describe('', () => {
  const userName = 'userNameSome' + Math.floor(Math.random() * 1000);
  const userEmail = 'somedetemail' + Math.floor(Math.random() * 1000) + '@mail.com';
  before('', () => {
      cy.visit('https://react-redux.realworld.io/#/');
  });
 it('', () => {
  cy.get(':nth-child(3) > .nav-link').click();
  cy.get(':nth-child(1) > .form-control').type(userName);
  cy.get(':nth-child(2) > .form-control').type(userEmail);
  cy.get(':nth-child(3) > .form-control').type('123Qwerty!');
  cy.get('.btn').click();
  cy.wait(40000);
  cy.get(':nth-child(4) > .nav-link').should('contain', userName);
  cy.wait(40000);
  });
}); 