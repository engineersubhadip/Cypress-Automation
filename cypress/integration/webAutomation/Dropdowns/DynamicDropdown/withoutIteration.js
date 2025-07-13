
describe("Suite", () => {
    it ("Static Dropdown", () => {
        cy.visit("https://www.google.com/");
        cy.get("#APjFqb").type("sele");
        cy.wait(1200);
        cy.get("#Alh6id ul[role='listbox'] > li[data-entityid = 'autocomplete_user_feedback_kp_id']").contains("selenophile").click();
    });
})