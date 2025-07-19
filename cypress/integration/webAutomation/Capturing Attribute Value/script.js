describe ("Handling Web Table", () => {

    it ("Test Case 1 : Verify price of course ", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        // * I am trying to capture few attributes for :-
        // * <table id="product" name="courses" class="table-display" border="1"> 
        
        cy.getAttribute("table[name='courses']", "name").then((data) => {
            cy.log("The final ans -> "+data);
        })
        
    });

});