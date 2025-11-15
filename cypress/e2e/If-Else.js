///<reference types="Cypress"/>
describe('Module 2', () => {
    it('Scenario 1', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        let value = true
        if (value) {
            cy.log('Inside IF Block')
        } else {
            cy.log('Inside Else block')
        }
    })
})