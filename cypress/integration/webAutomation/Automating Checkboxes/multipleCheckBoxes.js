
describe("Automation Suite", () => {
    it("Test case 1", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.wait(1200);
        let start = 1;
        cy.get("#checkbox-example label").each(($el, index, $list) => {
            cy.wait(1200);
            if (start % 2 == 1) {
                cy.wrap($el).find("input").check();
            }
            start ++;
        });
    });
});