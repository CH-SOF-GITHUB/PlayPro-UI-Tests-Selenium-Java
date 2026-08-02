describe("Booking Suite 3", () => {
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
        cy.get('button#headlessui-menu-button-\\:r1\\:').click({force: true});
        cy.get('div.lg\\:hidden.flex.items-center').invoke('show');
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('span', 'Découvrir').click();
        cy.wait(1000);
        cy.contains('a', 'Bon cadeau').click();
        // load the fixture data of vouchers
        cy.fixture('voucherdata').as('voucher');
    });

    // TEST 1
    it("Booking Bon Cadeau(x) ", () => {
        // parametrize the test with the fixture data
        cy.get('@voucher').then((v) => {
            // transform file json to table
            Object.keys(v).forEach((element) => {
                cy.wait(5000);
                cy.contains('button', element).click();
                cy.wait(1000);
                cy.get('div[style*="plus.svg"]').closest('button').click();
                cy.wait(1000);
                cy.contains('button', 'Ajouter au panier ➔').click();
                cy.wait(1000);
                cy.contains('div.relative', '****-4242').click();
                cy.wait(1000);
                cy.contains('button', 'Payer maintenant').click();
                cy.wait(5000);
                cy.contains('p', 'Merci pour votre commande ! 🎉').should('be.visible');
                cy.contains('span', 'Votre commande a bien été enregistrée.').should('exist');
                // 🌟 CORRECTION : Navigation interne pour réinitialiser l'écran
                cy.visit("https://chakerqa.playpro.fr/gift");
            });
        });
    });

});
