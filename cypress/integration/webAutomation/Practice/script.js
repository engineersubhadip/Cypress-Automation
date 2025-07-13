
describe("Suite", () => {
    it ("Static Dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.title().should("eq", "Practice Page");
        let promise = cy.get("input[name='enter-name']");   
        cy.wait(1200); 
        promise.then((data) => {
            cy.wrap(data).type("Ursula is coming for you.").should("have.value","Ursula is coming for you.");
        });   
    });
})