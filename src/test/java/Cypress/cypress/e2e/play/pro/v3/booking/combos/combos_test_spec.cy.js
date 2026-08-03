describe("PlayPro V3 Combos Booking", () => {
    // Add Hook Cypress
    beforeEach(() => {
        cy.visit("https://chakerqa.playpro.fr/connexion");
        cy.wait(1000);
        cy.contains('button', 'Accepter').eq(0).click();
        cy.wait(1000);
        cy.get('input[name="email"]').eq(0).type("chakerqa-client@yopmail.com");
        cy.wait(1000);
        cy.get('input[name="password"]').eq(0).type("Admin1234!");
        cy.wait(1000);
        cy.contains('button', 'Me connecter').click();
        cy.wait(1000);
        cy.contains('a', 'Réserver').eq(0).click();
    });

    // TEST 1
    it("Navigate to Combos Page by category", () => {
        cy.get('a[href="/discover/tag/sport-collectif?id=1"]').eq(0).click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/tag/sport-collectif?id=1');
    });
});
