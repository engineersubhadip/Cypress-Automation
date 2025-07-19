// const { describe } = require("mocha");

describe("Capture Inner Text", () => {
    it("Test Case 1", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.wait(1200);
        let data = undefined;
        cy.get("#radio-btn-example legend").invoke("text").then((text) => {
            cy.log("The data captured -> "+data);
            data = text;
        });
    });
});


// state -> pending -> Fulfilled
// value -> undefined -> Value replacement
// onFulfillment -> [cb]
// onRejection -> []