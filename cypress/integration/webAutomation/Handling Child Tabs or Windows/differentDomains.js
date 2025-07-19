// const { describe } = require("mocha");

describe("Opening Child Tabs", () => {
    it("Practice Test Case 3", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/"); // * Parent Tab
        cy.title().should("eq", "Practice Page");
        cy.get("a[href='https://www.qaclickacademy.com']").invoke("removeAttr","target").click();

        // * This will take you to the new Domain
        // * Before running anything on the new domain, you need to set the origin

        cy.origin("https://www.qaclickacademy.com/", () => {
            cy.url().should("eq","https://www.qaclickacademy.com/"); // ! Validation 1
            cy.get(".category-text > h2").should("be.visible").and("have.text","Best platform to learn Software and Automation Testing"); // ! Validation 2
            cy.go("back");
        });

        // * If I write something here, where will it execute ???
    });
});