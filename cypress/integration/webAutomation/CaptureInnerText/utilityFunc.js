// export "textGrabber";

Cypress.Commands.add("captureText", (locator) => {
    let data = undefined;
    cy.get(locator).invoke("text").then((text) => {
        data = text;
    });
    return data;
});