// const { describe } = require("mocha");

describe ("Mouse Hover Approach", () => {

    it ("Approach 1 : ", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("div.mouse-hover-content", {timeout:5000}).invoke("show");
        // cy.get("div.mouse-hover-content > a:nth-child(2)", {timeout:2000}).click();
        cy.contains("Top").click();
    });

});