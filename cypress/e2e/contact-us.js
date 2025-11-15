/// <reference types="Cypress"/>

describe('Contact Us Form', () => {
  
	it('Successfull submission', () => {
		cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
		cy.log('Going 1')
		cy.wait(9000)
		cy.get('#contact_form > [name="first_name"]', {timeout: 10000}).then(() => {
			cy.log('Inside the first call-back and waiting for 5s')
			cy.wait(5000)
			cy.get('#contact_form > [name="last_name"]', {timeout: 10000}).then(() => {
				expect(true).to.eql(false)
			})
		})
		cy.log('At last')
  })
})