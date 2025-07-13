
describe("Automation Suite", () => {
    it("Test case 1", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.wait(1200);
        cy.get("#checkBoxOption1").should("be.visible");
        cy.get("#checkBoxOption1").check().should("be.checked").should("have.value","option1");
        cy.wait(1200);
        cy.get("#checkBoxOption1").should("be.visible");
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    });
});