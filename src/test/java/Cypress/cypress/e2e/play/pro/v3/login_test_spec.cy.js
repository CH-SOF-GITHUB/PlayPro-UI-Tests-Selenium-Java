describe("PlayPro V3 should login successfully ", {tags: '@smoke'}, () => {
    // TEST 1
    it("Open the URL Of Web Site", () => {
        cy.visit("https://chakerqa.playpro.fr/");
    });

    // TEST 2
    it("Login into the application", () => {
        cy.visit("https://chakerqa.playpro.fr/connexion");
        cy.wait(1000);
        cy.contains('button', 'Accepter').eq(0).click();
        cy.wait(1000);
        cy.get('input[name="email"]').eq(0).type("chakerqa-client@yopmail.com");
        cy.wait(1000);
        cy.get('input[name="password"]').eq(0).type("Admin1234!");
        cy.wait(1000);
        cy.contains('button', 'Me connecter').click();
        // add cypress assertion BDD
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/');
    });
})
