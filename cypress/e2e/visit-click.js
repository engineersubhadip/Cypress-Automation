/// <reference types="cypress"/>

describe('Visit and click Module', () => {
	it('Successfull submission of a contact us form', () => {
		cy.visit('https://webdriveruniversity.com/index.html')
		cy.get('#contact-us', {timeout: 5000}).invoke('removeAttr','target').click()
		cy.url().should('contain','/contactus.html')
		cy.wait(200)
		cy.get('[name="first_name"]', {timeout: 5000}).should('be.visible').type('Subhadip', {delay:500})
		cy.wait(200)
		cy.get('[name="last_name"]', {timeout: 5000}).should('be.visible').type('Das')
		cy.wait(200)
		cy.get('[name="email"]', {timeout: 5000}).should('be.visible').type('dummy@email.com')
		cy.wait(200)
		cy.get('[name="message"]', {timeout: 5000}).should('be.visible').type('General Enquiry')
		cy.wait(200)
		cy.get('[value="SUBMIT"]', {timeout: 5000}).should('be.visible').click()
		cy.get('#contact_reply > h1', {timeout: 5000}).should('be.visible').then((ele) => {
			const receivedText = ele.text()
			expect(receivedText).to.deep.equal('Thank You for your Message!')
		})
	})

	it('Un-Successfull submission of a contact us form', () => {
		cy.visit('https://webdriveruniversity.com/index.html')
		cy.get('#contact-us', {timeout: 5000}).invoke('removeAttr','target').click()
		cy.url().should('contain','/contactus.html')
		cy.wait(200)
		cy.get('[name="first_name"]', {timeout: 5000}).should('be.visible').type('Subhadip', {delay:500})
		cy.wait(200)
		cy.get('[name="last_name"]', {timeout: 5000}).should('be.visible').type('Das')
		cy.wait(200)
		cy.get('[name="message"]', {timeout: 5000}).should('be.visible').type('General Enquiry')
		cy.wait(200)
		cy.get('[value="SUBMIT"]', {timeout: 5000}).should('be.visible').click()
		cy.get('body', {timeout: 5000}).should('be.visible').then((ele) => {
			const receivedText = ele.text();
			expect(receivedText).to.deep.equal('\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n')
		})
	})
})