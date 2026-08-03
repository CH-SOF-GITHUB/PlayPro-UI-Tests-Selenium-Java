describe("PlayPro V3 My Profile Page ", () => {
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
    it("Click on User Menu Button", () => {
        // code GitHub Copilot Chat
        cy.get('button#headlessui-menu-button-\\:r1\\:').click({force: true});
        cy.get('div.lg\\:hidden.flex.items-center').invoke('show'); // Rendre le parent visible
        cy.get('[role="menu"]').should('be.visible'); // Vérifie que le menu est visible
    });

    // TEST 2
    it("Click on user menu button and then profil link", () => {
        cy.get('button#headlessui-menu-button-\\:r1\\:').click({force: true});
        cy.get('div.lg\\:hidden.flex.items-center').invoke('show');
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('span', 'Découvrir').click();
    });

    // TEST 3
    it("click on profil - Offre découverte (Mes forfaits)", () => {
        cy.get('button#headlessui-menu-button-\\:r1\\:').click({force: true});
        cy.get('div.lg\\:hidden.flex.items-center').invoke('show');
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('span', 'Découvrir').click();
        cy.wait(1000);
        cy.contains('a', 'Offre découverte').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/offer');
    });

    // TEST 4
    it("click on profil - Mes Bon cadeaux", () => {
        cy.get('button#headlessui-menu-button-\\:r1\\:').click({force: true});
        cy.get('div.lg\\:hidden.flex.items-center').invoke('show');
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('span', 'Découvrir').click();
        cy.wait(1000);
        cy.contains('a', 'Bon cadeau').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/gift');
    });

    // TEST 5
    it("click on profil - Mes Evenements)", () => {
        cy.get('button#headlessui-menu-button-\\:r1\\:').click({force: true});
        cy.get('div.lg\\:hidden.flex.items-center').invoke('show');
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('span', 'Découvrir').click();
        cy.wait(1000);
        cy.contains('a', 'Événements').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/events');
    });

    // TEST 6
    it("click on profil - Mes abonnements", () => {
        cy.get('button#headlessui-menu-button-\\:r1\\:').click({force: true});
        cy.get('div.lg\\:hidden.flex.items-center').invoke('show');
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('span', 'Découvrir').click();
        cy.wait(1000);
        cy.contains('a', 'Abonnements').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/serie');
    });

    // TEST 7
    it("click on profil - Resto", () => {
        cy.get('button#headlessui-menu-button-\\:r1\\:').click({force: true});
        cy.get('div.lg\\:hidden.flex.items-center').invoke('show');
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('span', 'Découvrir').click();
        cy.wait(1000);
        cy.contains('a', 'Restauration').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/food');
    });
});
