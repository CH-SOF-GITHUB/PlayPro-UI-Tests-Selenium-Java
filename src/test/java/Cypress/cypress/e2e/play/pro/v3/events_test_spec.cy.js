describe("PlayPro V3 should check events", {tags: '@events'}, () => {
    // define global hook
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://chakerqa.playpro.fr/connexion");
        cy.contains('button', 'Accepter').eq(0).click();
        cy.get('input[name="email"]').eq(0).type("chakerqa-client@yopmail.com");
        cy.get('input[name="password"]').eq(0).type("Admin1234!");
        cy.contains('button', 'Me connecter').click();
    });

    // TEST 1
    it("Navigate to the events page and check offer page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Offre découverte').should('be.visible');
        cy.contains('a', 'Offre découverte').click();
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/offer');
    });

    // TEST 2
    it("Navigate to the events page and check offer page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Bon cadeau').should('be.visible');
        cy.contains('a', 'Bon cadeau').click();
        cy.url().should('equal', 'https://chakerqa.playpro.fr/gift');
    });

    // TEST 3
    it("Navigate to the events page and check offer page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Événements').should('be.visible');
        cy.contains('a', 'Événements').click();
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/events');
    });

    // TEST 4
    it("Navigate to the events page and check offer page", () => {
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Restauration').should('be.visible');
        cy.contains('a', 'Restauration').click();
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/food');
    });

});
