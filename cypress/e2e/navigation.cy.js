/// <reference types ="Cypress"/>

describe('more assertions and navigation', ()=>{
    it ('should navigate to and back', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('[data-cy="loginurl"]').click()
        cy.location('pathname').should('equal', '/login.html');
        
        cy.get('[data-cy="homeurl"]').click()
        cy.location('pathname').should('equal', '/index.html');

        cy.get('[data-cy="loginurl"]').click();
        cy.location('pathname').should('equal', '/login.html');
        cy.go('back');
        cy.location('pathname').should('equal', '/index.html');
    })
})