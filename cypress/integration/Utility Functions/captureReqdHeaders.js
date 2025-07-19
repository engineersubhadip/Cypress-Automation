Cypress.Commands.add("captureSingleHeader", (stringLocator, headerName) => {
    cy.get(stringLocator).each(($ele, index, $list) => {

        cy.wrap($ele).invoke("text").then((data) => {
            if (data === headerName) {
                return data;
            }
        });
    });
    return "";
});

Cypress.Commands.add("captureMultipleHeaders", (stringLocator, headerArr) => {
    let arr = [];
    cy.get(stringLocator).each(($ele, index, $list) => {

        cy.wrap($ele).invoke("text").then((data) => {
            if (headerArr.includes(data)) {
                arr.push(index);
            }
        })
    }).then(() => arr);
});