// const { expect } = require("chai");

// const { expect } = require("chai");

// const { it } = require("mocha");

describe("Alerts and Pop-ups", () => {
    it("Normal Alerts", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get(':nth-child(1) > button').click();
        cy.on("window:alert", (t) => {
            expect(t).to.contain("I am a JS Alert");
        });
        cy.get("#result").should("have.text","You successfully clicked an alert");
    });

    it("Confirmation Alerts", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("ul > li:nth-child(2) > button", {timeout:2000}).should("be.visible").click();
        cy.on("window:confirm", (t) => {
            expect(t).to.contain("I am a JS Confirm");
            return false; // I want to click Cancel
        });
        cy.get("#result").should("be.visible").and("have.text","You clicked: Cancel");
    });
    
});