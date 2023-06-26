/// <reference types="Cypress"/>

describe('Explains local configuration', {
    defaultCommandTimeout: 10000,
    execTimeout: 5000,
    taskTimeout: 5000
},()=>{

    it('should visit a page', {
        browser: 'firefox',
        execTimeout : 6000
    }, ()=>{
        cy.visit('index.html')
    })

})