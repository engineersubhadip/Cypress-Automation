// const { describe } = require("mocha");

describe("Approach1", () => {
    it("Removing the target property from dev tools", () => {
        cy.visit("https://the-internet.herokuapp.com/windows"); // * Parent Tab
        cy.title().should("eq","The Internet");
        cy.wait(1200);
        let url;
        cy.get("a[href='/windows/new']").then((ele) => {
            url = ele.prop("href");
            cy.visit(url);
        });
        cy.title().should("eq","New Window");
    });
});