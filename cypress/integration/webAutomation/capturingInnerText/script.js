describe ("Capture Inner Text via Utility Function", () => {
    it ("Test case", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.getInnerText("#radio-btn-example legend").then((data) => {
        cy.log(data);
    });
    });
});