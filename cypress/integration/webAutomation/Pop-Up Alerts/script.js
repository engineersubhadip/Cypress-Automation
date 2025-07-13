describe("Suite", () => {
    it ("Static Dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.title().should("eq", "Practice Page");
        // cy.get("#alertbtn").click();  
        cy.on("window:alert", (string) => {
            expect(str).to.equal('This is a test alert');
        });
    });
})