// const { describe } = require("mocha");

describe ("Mouse Hover Approach", () => {

    it ("Approach 1 : ", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.contains("Top").click({force : true});
        cy.url().should("contain","#top");
    });

});