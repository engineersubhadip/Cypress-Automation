// const { describe } = require("mocha");
// export 
import CustomUtility from "../../../support/utilityFunc";

describe ("How to use Utility Function", () => {
    it("Test case", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.wait(1200);
        let output = cy.captureText("#radio-btn-example legend");
        cy.log("Using utility function we captured -> "+output);
    });
});

