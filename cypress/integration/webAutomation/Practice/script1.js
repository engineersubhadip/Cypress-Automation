
describe("Verify from WebTable", () => {

    it ("Verify the price of a book", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.captureMultipleHeaders("#product > tbody > tr > th", ["Pele", "Maradona"])
        .then((data) => {
            cy.log("The data from Util File -> "+data[0]+" and "+data[1]);
        });
    });

});