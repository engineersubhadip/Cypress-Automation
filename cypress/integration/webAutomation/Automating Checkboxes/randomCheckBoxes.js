
describe("Automation Suite", () => {
    it("Test case 1", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.wait(1200);
        cy.get("#checkbox-example label > input").check(["option1", "option3"]);
    });
});