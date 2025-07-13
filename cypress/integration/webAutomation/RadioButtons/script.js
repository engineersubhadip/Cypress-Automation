
describe ("Suite 1", () => {
    it ("Check Visibility", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.title().should("eq","Practice Page");
        cy.get("input.radioButton").check("radio2").should("be.checked");
        cy.wait(1200);
        cy.get("input.radioButton").check("radio3").should("be.checked");
        cy.wait(1200);
        cy.get("input.radioButton[value='radio2']").should("not.be.checked");
    });
});

// input.radioButton[value='radio2']