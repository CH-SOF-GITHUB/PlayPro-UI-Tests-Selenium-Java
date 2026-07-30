describe("PlayPro V3 Reservations Page ", () => {

    // define global hook
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.wait(1000);
        cy.visit("https://chakerqa.playpro.fr/connexion");
        cy.wait(1000);
        cy.contains('button', 'Accepter').eq(0).click();
        cy.wait(1000);
        cy.get('input[name="email"]').eq(0).type("chakerqa-client@yopmail.com");
        cy.wait(1000);
        cy.get('input[name="password"]').eq(0).type("Admin1234!");
        cy.wait(1000);
        cy.contains('button', 'Me connecter').click();
    });

    it("Navigate to Reservations Page - Method 1", () => {
        // cy.visit("https://chakerqa.playpro.fr/");
        cy.contains('a', 'Réserver').eq(0).click();
        // add cypress assertion BDD
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/reservation');
    });

    it("Navigate to Reservations Page - Method 2", () => {
        // cy.visit("https://chakerqa.playpro.fr/");
        cy.get('header').contains('a', 'Réservations').eq(0).click();
        // cy.get('a[href="/discover/reservation"]:visible').click();
        // add cypress assertion BDD
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/reservation');
    });

    it("Check Title 'Nos activités'", () => {
        cy.contains('p', 'Nos activités').should('be.visible');
    });

    // TEST OK but system return Too Many Attempts 429
    /*it("Check Title 'Nos Forfaits & Abonnements'", () => {
        cy.contains('p', 'Nos Forfaits & Abonnements').should('be.visible');
    });*/

    // TEST OK but system return Too Many Attempts 429
    /*it("Check Title 'Envie d’une pause gourmande ?'", () => {
        cy.contains('p', 'Envie d’une pause gourmande ?').should('be.visible');
    });*/

    // TEST OK but system return Too Many Attempts 429
    /*it("Check Title 'Créez une expérience sur mesure !'", () => {
        cy.contains('p', 'Créez une expérience sur mesure !').should('be.visible');
    });*/

    // TEST OK but system return Too Many Attempts 429
    /*it("Check Title 'Questions fréquentes'", () => {
        cy.contains('p', 'Questions fréquentes').should('be.visible');
    });*/

    it("Pass to 'Mes Achats & Réservations' and check The Title", () => {
        // wait some time
        cy.wait(5000);
        cy.visit("https://chakerqa.playpro.fr/profile?tab=reservations");
        // wait some time to load page
        cy.contains('h1', 'Mes Achats & Réservations').should('be.visible');
    });
});
