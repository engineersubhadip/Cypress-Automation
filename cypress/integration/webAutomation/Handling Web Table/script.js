describe ("Handling Web Table", () => {

    it ("Test Case 1 : Verify price of course ", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        let courseNameIndex = undefined;
        let coursePriceIndex = undefined;

        cy.get("table[name='courses'] > tbody > tr > td:nth-child(2)", {timeout: 5000}).should("be.visible")
        .each(($ele, index, $list) => {
            let currCourse = $ele.text();
            let coursePrice = undefined;
            if (currCourse === "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C") {
                cy.get("table[name='courses'] > tbody > tr > td:nth-child(2)").eq(index).next().then((data) => {
                    coursePrice = data.text();
                    cy.log("Data -> "+data.text())
                });
                cy.log("Course Price is -> "+coursePrice);
            }
        });
    });

});