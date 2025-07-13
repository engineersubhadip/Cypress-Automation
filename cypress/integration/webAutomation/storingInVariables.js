describe("My First Test Suite", () => {
    it("Test case 1", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") // * Visit URL of the app
        cy.wait(1000);
        let logoPromise = cy.get("div.brand");
        logoPromise.then((data) => {
            let logoText = data.text(); // * Here data is the webelement
            cy.log(logoText);
            cy.log(data);
        });
    });
})