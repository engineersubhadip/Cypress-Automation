
describe("Execution steps", () => {
    it("Version 1", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.title().should("eq","GreenKart - veg and fruits kart");

        // * Custom Promise try :-
        let inputBarPromise = cy.get("input.search-keyword");
        inputBarPromise.then((data) => {
            cy.wrap(data).type("Ca");
        });

        cy.get("button.search-button").click();

        cy.wait(1200);

        cy.get(".products > .product").each(($el, index, $list) => {
            let currText = $el.find("h4").text();
            if (currText.toLowerCase().includes("carr")) {
                $el.find("button").click();
            }
        });

        cy.wait(1000);

        let shoppingBagPromise = cy.get(".cart-icon > img");
        shoppingBagPromise.then((data) => {
            cy.wrap(data).click();
        });

        cy.get("div.cart-preview > .action-block > button").click();

        cy.wait(1200);
        
        cy.get("button").contains("Place Order").click();
    });
});