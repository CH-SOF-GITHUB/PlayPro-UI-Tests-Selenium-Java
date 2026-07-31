require('@cypress/xpath');
describe("Booking Suite 1", () => {
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

    it("Booking Activity 'Paintball Experience Appointment' ", () => {
        cy.wait(5000);
        cy.get('div[role="button"]').contains('h3', 'Paintball Experience Appointment').click();
        cy.wait(5000);
        cy.get('div[style*="plus.svg"]').closest('button').click();
        cy.wait(1000);
        cy.get('button#menu-button').eq(0).click();
        cy.wait(1000);
        cy.contains('button', '30 min').eq(0).click();
        cy.wait(1000);
        cy.contains('button', 'Continuer ➔').click();
        cy.wait(5000);
        cy.get('div.relative').find('button[type="button"].w-full').contains('span', '09:00').should('exist');
        cy.get('div.relative').find('button[type="button"].w-full').contains('span', '09:00').click();
        cy.wait(1000);
        cy.xpath('(//button[contains(@class,"relative w-full h-[50px] rounded-md max-md:px-[15px] lg:text-base gap-[10px] opacity-100 font-poppins font-medium text-[15px] leading-[21px] tracking-[0px] text-center border bg-primary")])[1]').click();
        cy.wait(5000);
        cy.contains('h2', 'Pour mieux préparer votre venue').should('exist');
    });
});
