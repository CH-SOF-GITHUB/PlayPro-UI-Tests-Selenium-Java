describe("PlayPro V3 Reservations Page ", () => {
    it("Navigate to Reservations Page - Method 1", () => {
        cy.visit("https://chakerqa.playpro.fr/");
        cy.contains('a', 'Réserver').eq(0).click();
        // add cypress assertion BDD
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/reservation');
    });

    it("Navigate to Reservations Page - Method 2", () => {
        cy.visit("https://chakerqa.playpro.fr/");
        cy.get('a[href="/discover/reservation"]:visible').click();
        // add cypress assertion BDD
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/reservation');
    });
})
