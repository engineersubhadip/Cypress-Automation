// const { describe } = require("mocha");

describe ("Different types of Aliasing", () => {

    it.skip ("Aliasing on an array", () => {
        let data = [12, 13, 14, 15];
        cy.wrap(data).as("myCustomData");
        cy.get("@myCustomData").then((receivingData) => {
            cy.log("The data which I received is -> ",receivingData[1]);
        });
    });

    it ("Aliasing on an object", () => {
        let data = {
            userName : "Subhadip",
            class : "Marine",
            standard : "Pvt First Class"
        }
        cy.wrap(data).as("customData");
        cy.get("@customData").then((receivingData) => {
            let name = receivingData.userName;
            let userClass = receivingData.class;
            let userStandard = receivingData.standard;
            cy.log("Name -> "+name+" || userClass -> "+userClass+ " || userStandard -> "+userStandard);
        });
    });
    
});