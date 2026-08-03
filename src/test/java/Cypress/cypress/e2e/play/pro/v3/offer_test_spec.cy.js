describe("PlayPro V3 should check events", {tags: '@events'}, () => {
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

    // TEST 1
    it("Navigate to offer page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Offre découverte').should('be.visible');
        cy.wait(1000);
        cy.contains('a', 'Offre découverte').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/offer');
    });

    // TEST 2
    it("Navigate to bon cadeau page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Bon cadeau').should('be.visible');
        cy.wait(1000);
        cy.contains('a', 'Bon cadeau').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/gift');
    });

    // TEST 3
    it("Navigate to the events page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Événements').should('be.visible');
        cy.wait(1000);
        cy.contains('a', 'Événements').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/events');
    });

    // TEST 4
    it("Navigate to the events page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Abonnements').should('be.visible');
        cy.wait(1000);
        cy.contains('a', 'Abonnements').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/serie');
    });

    // TEST 5
    it("Navigate to restoration page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Restauration').should('be.visible');
        cy.wait(1000);
        cy.contains('a', 'Restauration').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/food');
    });

});
