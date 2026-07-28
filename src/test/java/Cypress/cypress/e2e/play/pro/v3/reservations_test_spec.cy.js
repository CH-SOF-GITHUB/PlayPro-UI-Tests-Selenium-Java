describe("PlayPro V3 Booking", () => {

    beforeEach(() => {
        cy.visit("https://chakerqa.playpro.fr/connexion");
        cy.contains('button', 'Accepter').eq(0).click();
        cy.get('input[name="email"]').eq(0).type("chakerqa-client@yopmail.com");
        cy.get('input[name="password"]').eq(0).type("Admin1234!");
        cy.contains('button', 'Me connecter').click();
        cy.contains('a', 'Réserver').eq(0).click();
    });

    /*it('', () => {

    });*/
})
