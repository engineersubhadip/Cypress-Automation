Cypress.Commands.add("getInnerText", (stringLocator) => {
    cy.get(stringLocator).invoke("text").then((data) => data);
});