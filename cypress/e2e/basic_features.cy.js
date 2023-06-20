/// <reference types="Cypress"/>

describe ('Utilising basic features', ()=>{
    it('uses contains', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('TODO LIST APP');

        cy.get('h2').contains('TOD')
    })

    it('simulate click event', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('#btn-create-todo').click();
        cy.get('form').should('exist');
        cy.get('.inputs').get('#btnclose').click();
    })

    it('simulates typing actions', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('#btn-create-todo').click();
        cy.get('form').should('exist');
        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-12-30')
        cy.get('#btnsubmit').click();
        cy.get('.inputs').get('#btnclose').click();
        cy.get('.taskitem').should('have.length', 1)
    })

    it('selects a value in dropdown', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('#btn-create-todo').click();
        cy.get('form').should('exist');
        cy.get('#select-action').select('cancel');
    })
})