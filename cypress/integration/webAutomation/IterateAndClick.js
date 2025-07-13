describe("My First Test Suite", () => {
    it("Test case 1", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") // * Visit URL of the app
        cy.wait(1000);
        cy.get("form > *.search-keyword").type("Ca"); // * Enter text in a I/P field
        cy.wait(1000);
        // cy.get("form > *.search-button").click(); // * Click on a button is also correct
        cy.get("form").find("> *.search-button").click(); // * Click on a button
        cy.get("div.products-wrapper > *.products .product:visible").should("have.length", 4); // * Validate number of products returned
        cy.wait(1000);

        // * Iterate and click on an element :-

        cy.get("div.products > *.product").each(($e1, index, $list) => {
            // * $e1 -> represents current WebElement
            let currElement = $e1.find(".product-name").text();
            if (currElement.toLowerCase().includes("cashew")) {
                let addToCart = $e1.find("button");
                addToCart.click();
            }
        });
    });
})