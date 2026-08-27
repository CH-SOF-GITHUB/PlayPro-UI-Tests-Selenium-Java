/*
PLPRB-2692  [BUG] Impossible pour un Administrateur de fermer la session d'un autre utilisateur
* */

describe("POS - Verify That Admin should close session of another user Manager for exp", () => {

    it("should verify the POS delete session successfully", () => {
        cy.request({
            method: "POST",
            url: "https://demotenant-bo.playpro.fr/api/v1/admin/pos/session/manage",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // Ne jamais mettre le vrai token dans le code
                Authorization: `Bearer ${Cypress.env("POS_AUTH_TOKEN")}`,
                possessionuuid: Cypress.env("POS_SESSION_UUID"),
                posdeviceid: Cypress.env("POS_DEVICE_ID")
            },
            body: {
                "action": "close",
                "cash_amount": 50,
                "note": "Session of manager deleted successfully",
                "banking": 0
            },
            failOnStatusCode: false
        }).then((response) => {
            // HTTP
            expect(response.status).to.eq(200);
            // Business response
            expect(response.body.success).to.eq(true);
            expect(response.body.message)
                .to.eq("Session POS fermée avec succès.");
            expect(response.body.data.action).to.eq("closed");
            // Session
            expect(response.body.data.session_uuid).to.eq("d3a1dc20-2be9-44c8-91e3-f84731dc115d");
            // Refund
            //expect(response.body.data.total_fund).to.eq(116.07);
            //expect(response.body.data.cash_total).to.eq(116.07);
            expect(response.body.data.cash_init).to.eq(50);
        });
    });
});
