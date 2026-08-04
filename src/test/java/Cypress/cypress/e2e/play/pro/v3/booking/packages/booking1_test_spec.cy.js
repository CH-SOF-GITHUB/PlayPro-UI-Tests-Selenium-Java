require('@cypress/xpath')
describe("PlayPro V3 should check booking packages - Suite 04", {tags: '@booking'}, () => {
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
        cy.wait(1000);
        cy.get("button#headlessui-menu-button-\\:r0\\:").click({force: true});
        cy.get('[role="menu"]').should('be.visible');
        cy.contains('a', 'Offre découverte').should('be.visible');
        cy.wait(1000);
        cy.contains('a', 'Offre découverte').click();
    });

    // TEST 1
    it("Navigate to booking package page 'Forfait-VR-Illimité' ", () => {
        cy.contains('span', 'Forfait-VR-Illimité').should('be.visible');
        cy.contains('span', 'Forfait-VR-Illimité').click();
        console.log("Navigate to booking package page 'Forfait-VR-Illimité'");
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/offer/forfaitvrillimite?id=4');
        for (let i = 0; i < 2; i++) {
            cy.wait(1000);
            cy.xpath("(//button[contains(@class,'rounded-full cursor-pointer')])[2]").click();
        }
        cy.wait(1000);
        for (let i = 0; i < 2; i++) {
            cy.wait(1000);
            cy.xpath("(//button[contains(@class,'rounded-full cursor-pointer')])[1]").click();
        }
    });

});
