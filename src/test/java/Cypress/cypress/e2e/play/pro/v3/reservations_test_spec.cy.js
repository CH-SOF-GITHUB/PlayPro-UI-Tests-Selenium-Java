describe("PlayPro V3 Booking", () => {
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
    it("Navigate to Activity 'Paintball Experience Appointment' ", () => {
        cy.get('div[role="button"]').contains('h3', 'Paintball Experience Appointment').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/reservation/paintball-experience-appointment');
    });

    // TEST 2
    it("Click on Button '+' and Button '-' to increase and decrease the number of participants", () => {
        cy.get('div[role="button"]').contains('h3', 'Paintball Experience Appointment').click();
        // Solution GitHub Copilot Chat: Cherche le div puis remonte au bouton
        cy.wait(1000);
        cy.get('div[style*="plus.svg"]').closest('button').click();
        // assert expected value of participants
        cy.wait(1000);
        cy.get('Select option:selected').should('have.text', '4');
        cy.wait(1000);
        cy.get('div[style*="minus.svg"]').closest('button').click();
        cy.wait(1000);
        cy.get('Select option:selected').should('have.text', '3');
    });

    // TEST 3
    it("Pass the Step 1 of reservation", () => {
        cy.get('div[role="button"]').contains('h3', 'Paintball Experience Appointment').click();
        cy.wait(1000);
        cy.get('div[style*="plus.svg"]').closest('button').click();
        cy.get('button#menu-button').eq(0).click();
        cy.wait(1000);
        cy.contains('button', '30 min').eq(0).click();
        cy.wait(1000);
        cy.contains('button', 'Continuer ➔').click();
        cy.wait(10000);
    });
});
