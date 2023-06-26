/// <reference types ="Cypress"/>

after(()=>{
    cy.visit('/location.html')
})

describe ('Tests create todo flow', ()=>{

    beforeEach(()=>{
        cy.visit('/index.html')
    })

    it('uses method chaining', ()=>{
        cy.get('#btn-create-todo').click()
        cy.get("#btnsubmit").should('not.be.disabled')

        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-12-30')

        cy.get('#btnsubmit').click().should('contain', 'Sending...')

    })

    it('uses alias and value variable', ()=>{

        cy.get('#btn-create-todo').click()

        cy.get('#txttaskname').type('Task 1')
        cy.get('#txttaskdesc').type('This is my first task')
        cy.get('#txtdeadline').type('2023-12-30')

        cy.get('#btnsubmit').as('submitbtn')
        cy.get('@submitbtn').click()

    })

    it('uses then function', ()=>{
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