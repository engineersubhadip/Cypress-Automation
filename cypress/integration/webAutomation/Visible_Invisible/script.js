{/* <reference types = "Cypress" /> */}

describe ("Suite 1", () => {
    it ("Check Visibility", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.wait(1200);
        cy.get("#displayed-text").should("be.visible");
        cy.wait(1200);
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should("not.be.visible");
    });
});