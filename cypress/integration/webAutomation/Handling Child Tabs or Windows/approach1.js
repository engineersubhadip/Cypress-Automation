// const { describe } = require("mocha");

describe("Approach1", () => {
    it("Removing the target property from dev tools", () => {
        cy.visit("https://the-internet.herokuapp.com/windows"); // * Parent Tab
        cy.title().should("eq","The Internet");
        cy.wait(1200);
        cy.get("a[href='/windows/new']").invoke("removeAttr","target").click(); // * Opening the New Page on the Parent Tab itself
        cy.title().should("eq","New Window");
        cy.wait(1200);
        cy.url().should("eq", "https://the-internet.herokuapp.com/windows/new");
        cy.wait(1200);
        cy.go("back");
    });
});