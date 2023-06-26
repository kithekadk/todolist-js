/// <reference types ="Cypress"/>

describe('submit form', ()=>{
    before(()=>{
        cy.visit('/index.html')
    })

    it('submit the create task form', ()=>{
        cy.get('#btn-create-todo').click();

        cy.createTask();
    })
})