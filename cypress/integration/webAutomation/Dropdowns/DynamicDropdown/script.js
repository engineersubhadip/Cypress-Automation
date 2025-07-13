
describe("Suite", () => {
    it ("Static Dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.title().should("eq", "Practice Page");
        cy.get("#autocomplete").type("Ind").get("#ui-id-1 > li > div").each(($ele, index, $list) => {
            let currCountry = $ele.text();
            if (currCountry.toLowerCase() === "india") {
                cy.wrap($ele).click();
            }
        });
        // * Verrify that we have indeed selected India from the Autosuggestive dropdown :-
        cy.get("#autocomplete").should("have.value","India"); 
    });
})