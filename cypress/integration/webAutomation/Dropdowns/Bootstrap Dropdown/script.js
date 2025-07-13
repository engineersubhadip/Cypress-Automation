
describe("Automation Suite", () => {
    it("Test case 1", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.wait(1200);
        cy.get("span[aria-label='Country'] b").click();
        cy.wait(1200);
        cy.get("ul > li.select2-results__option").each(($ele, index, $list) => {
            let currCountry = $ele.text();
            if (currCountry === "Japan") {
                cy.wrap($ele).click();
            }
        });
    });
});

// ul > li.select2-results__option -> All the list