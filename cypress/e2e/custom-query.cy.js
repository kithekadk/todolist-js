/// <reference types ="Cypress"/>

describe('Select an element', ()=>{
    it ('should navigate to and back', ()=>{
        cy.visit('/index.html');
        // cy.get('[data-cy="loginurl"]').click()
        cy.getElByID('loginurl').click()
        cy.location('pathname').should('equal', '/login.html');
        
        // cy.get('[data-cy="homeurl"]').click()
        cy.getElByID('homeurl').click()
        cy.location('pathname').should('equal', '/index.html');

        // cy.get('[data-cy="loginurl"]').click();
        cy.getElByID('loginurl').click();
        cy.location('pathname').should('equal', '/login.html');
        cy.go('back');
        cy.location('pathname').should('equal', '/index.html');
    })
})