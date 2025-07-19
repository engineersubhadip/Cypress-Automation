Cypress.Commands.add("getAttribute", (stringLocator, attributeName) => {
    let result = "";
    cy.get(stringLocator).invoke("attr", attributeName).then((data) => {
        result = data;
        return result
    });
});