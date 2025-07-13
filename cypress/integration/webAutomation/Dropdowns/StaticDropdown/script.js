
describe("Suite", () => {
    it ("Static Dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.title().should("eq", "Practice Page");
        cy.get("#dropdown-class-example").select("option3").should("have.value","option3"); // * Assertion on "value" attribute
        
    });
})