/// <reference types ="Cypress"/>

describe ('Tests create todo flow', ()=>{
    it('uses method chaining', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('#btn-create-todo').click()
        cy.get("#btnsubmit").should('not.be.disabled')

        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-12-30')

        cy.get('#btnsubmit').click().should('contain', 'Sending...')
        // cy.get("#btnsubmit").should('not.be.disabled')
    })

    it('uses alias and value variable', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('#btn-create-todo').click()

        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-12-30')

        // const submitbtn = cy.get('#btnsubmit')
        // submitbtn.click();

        cy.get('#btnsubmit').as('submitbtn')
        cy.get('@submitbtn').click()

    })

    it('uses then function', ()=>{
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('#btn-create-todo').click()

        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-12-30')

        cy.get('#btnsubmit').as('submitbtn')
        
        cy.get('@submitbtn').click().then((el)=>{
            expect(el.attr('disabled')).to.exist
            expect(el.val()).to.equal('Sending...')
            expect(el.val()).to.contain('Sending...')
        })
    })
})