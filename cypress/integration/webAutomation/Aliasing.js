
describe("Aliasing Suite", () => {
    it("Store it in one place and refer it in multiple places", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.wait(1000);
        cy.title().should("eq","GreenKart - veg and fruits kart");
        cy.wait(1200);
        // // let listOfElementPromise = cy.get(".products > .product");
        // // listOfElementPromise.then((data) => {
        // //     data.each(($e1, index, $list) => {
        // //         let productName = $e1.find("h4").text();
        // //         cy.log(productName);
        // //     });
        // // });

        // cy.get(".products > .product").each(($e1, index, $list) => {
        //     let name = $e1.find("h4:visible").text();
        //     cy.log(name);
        // });
        cy.get("input.search-keyword").as("inputField");
        cy.get("@inputField").type("Po");
        cy.wait(1200);
        cy.get("@inputField").clear();
        cy.wait(1200);
        cy.get("@inputField").type("Ca");
    });
});