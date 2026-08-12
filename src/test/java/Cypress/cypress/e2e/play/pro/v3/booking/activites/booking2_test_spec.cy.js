require('@cypress/xpath')
describe("Booking Suite 2", () => {
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
        cy.wait(5000);
    });

    // TEST 1
    it("Navigate to Activity tagged by category 'Aventures Immersives' before booking ", () => {
        cy.contains('h3', 'Aventures Immersives').should('exist');
        cy.wait(1000);
        cy.contains('h3', 'Aventures Immersives').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/tag/aventures-immersives?id=4');
    });

    // TEST 2
    it("Navigate to Activity for booking ", () => {
        cy.contains('h3', 'Aventures Immersives').click();
        cy.wait(5000);
        cy.contains('h3', 'Exp Rum 2 booking').should('exist');
        cy.wait(1000);
        cy.contains('h3', 'Exp Rum 2 booking').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/discover/reservation/exp-rum-2-booking');
    });

    // TEST 3
    it("Booking the activity 'Exp Rum 2 booking' - STEP 1.0", () => {
        cy.contains('h3', 'Aventures Immersives').click();
        cy.wait(5000);
        cy.contains('h3', 'Exp Rum 2 booking').click();
        cy.wait(5000);
        for (let i = 0; i < 2; i++) {
            cy.wait(1000);
            cy.contains('label', "Je souhaite réserver tout l'espace").click();
        }
        cy.wait(1000);
        cy.get('button[id="menu-button"]').click();
    });

    // TEST 4
    it("Booking the activity 'Exp Rum 2 booking' - STEP 1.1", () => {
        cy.contains('h3', 'Aventures Immersives').click();
        cy.wait(5000);
        cy.contains('h3', 'Exp Rum 2 booking').click();
        cy.wait(5000);
        for (let i = 0; i < 2; i++) {
            cy.wait(1000);
            cy.contains('label', "Je souhaite réserver tout l'espace").click();
        }
        cy.wait(1000);
        cy.get('button[id="menu-button"]').click();
        cy.wait(1000);
        cy.contains('button', 'Avancé').click();
        cy.wait(1000);
        cy.contains('button', 'Continuer ➔').click();
        cy.wait(3000);
        cy.contains('span', '10 pers.').should('be.visible');
        cy.contains('span', '10 pers.').should('exist');
    });

    // TEST 5
    it("Booking the activity 'Exp Rum 2 booking' - STEP 2.0", () => {
        cy.contains('h3', 'Aventures Immersives').click();
        cy.wait(5000);
        cy.contains('h3', 'Exp Rum 2 booking').click();
        cy.wait(1000);
        cy.get('button[id="menu-button"]').click();
        cy.wait(1000);
        cy.contains('button', 'Avancé').click();
        cy.wait(1000);
        cy.contains('button', 'Continuer ➔').click();
        cy.wait(1000);
        cy.get('div.relative').find('button[type="button"].w-full').contains('span', '20:25').click();
        cy.wait(1000);
        cy.xpath('(//button[contains(@class,"relative w-full h-[50px] rounded-md max-md:px-[15px] lg:text-base gap-[10px] opacity-100 font-poppins font-medium text-[15px] leading-[21px] tracking-[0px] text-center border bg-primary")])[1]').click();
        cy.wait(1000);
        cy.contains('h2', 'Pour mieux préparer votre venue').should('be.visible');
        cy.contains('h2', 'Pour mieux préparer votre venue').should('exist');
    });

    // TEST 6
    it("Booking the activity 'Exp Rum 2 booking' - STEP 2.1", () => {
        cy.contains('h3', 'Aventures Immersives').click();
        cy.wait(5000);
        cy.contains('h3', 'Exp Rum 2 booking').click();
        cy.wait(1000);
        cy.get('button[id="menu-button"]').click();
        cy.wait(1000);
        cy.contains('button', 'Avancé').click();
        cy.wait(1000);
        cy.contains('button', 'Continuer ➔').click();
        cy.wait(1000);
        cy.get('div.relative').find('button[type="button"].w-full').contains('span', '20:25').click();
        cy.wait(1000);
        // add a condition to be the button enabled before clicking on it
        cy.xpath('(//button[contains(@class,"relative w-full h-[50px] rounded-md max-md:px-[15px] lg:text-base gap-[10px] opacity-100 font-poppins font-medium text-[15px] leading-[21px] tracking-[0px] text-center border bg-primary")])[1]').should('not.have.attr', 'disabled');
        cy.wait(1000);
        cy.xpath('(//button[contains(@class,"relative w-full h-[50px] rounded-md max-md:px-[15px] lg:text-base gap-[10px] opacity-100 font-poppins font-medium text-[15px] leading-[21px] tracking-[0px] text-center border bg-primary")])[1]').click();
        cy.wait(1000);
        cy.contains('button', 'Finaliser').click();
        cy.wait(5000);
        cy.url().should('equal', 'https://chakerqa.playpro.fr/Panier');
        cy.wait(1000);
        cy.contains('div.relative', '****-4242').should('be.visible');
        cy.contains('div.relative', '****-4242').click();
        cy.wait(1000);
        cy.contains('button', 'Payer maintenant').click();
        cy.wait(5000);
        cy.contains('p', 'Merci pour votre réservation ! 🎉').should('be.visible');
        cy.contains('span', 'Votre réservation a bien été enregistrée.').should('exist');
    });
});
