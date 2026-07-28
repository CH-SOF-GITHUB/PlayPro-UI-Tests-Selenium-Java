describe("PlayPro V3 Combos Booking", () => {
    // Add Hook Cypress
    beforeEach(() => {
        cy.visit("https://chakerqa.playpro.fr/connexion");
        cy.contains('button', 'Accepter').eq(0).click();
        cy.get('input[name="email"]').eq(0).type("chakerqa-client@yopmail.com");
        cy.get('input[name="password"]').eq(0).type("Admin1234!");
        cy.contains('button', 'Me connecter').click();
        cy.contains('a', 'Réserver').eq(0).click();
    });

    // TEST 1
    it("Navigate to Combos Page by category", () => {
        cy.get('a[href="/discover/tag/sport-collectif?id=1"]').eq(0).click();
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/tag/sport-collectif?id=1');
    });
});
