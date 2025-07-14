// const { describe } = require("mocha");

// const { expect } = require("chai");
// const { it } = require("mocha");

// const { expect } = require("chai");

describe ("Pop-up Alert", () => {
    it ("Alert", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#alertbtn").should("be.visible").click();
        cy.on("window:alert", (t) => {
            expect(t).to.contain("Hello , share this practice page and share your knowledge");
        });
    });

    it.only ("Confirmation", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#confirmbtn").should("be.visible").click();
        cy.on("window:alert", (t) => {
            expect(t).to.contain("Hello , Are you sure you want to confirm?");
            return false;
        });
    });
});