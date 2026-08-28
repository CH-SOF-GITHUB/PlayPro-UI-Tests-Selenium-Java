/*
PLPRB-2692  [BUG] Impossible pour un Administrateur de fermer la session d'un autre utilisateur
* */

describe("POS - Verify That Admin should close session of another user Manager for exp", () => {

    it("should verify the POS delete session successfully", () => {

        cy.env(['POS_AUTH_TOKEN', 'POS_SESSION_UUID', 'POS_DEVICE_ID']).then(({
                                                                                  POS_AUTH_TOKEN,
                                                                                  POS_SESSION_UUID,
                                                                                  POS_DEVICE_ID
                                                                              }) => {
            cy.request({
                method: "POST",
                url: "https://demotenant-bo.playpro.fr/api/v1/admin/pos/session/manage",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    // Ne jamais mettre le vrai token dans le code
                    Authorization: `Bearer ${POS_AUTH_TOKEN}`,
                    possessionuuid: POS_SESSION_UUID,
                    posdeviceid: POS_DEVICE_ID
                },
                body: {
                    "action": "close",
                    "cash_amount": 50,
                    "note": "Session of manager deleted successfully",
                    "banking": 0
                },
                failOnStatusCode: false
            }).then((response) => {
                // =========================
                // DEBUG RESPONSE
                // =========================
                cy.log("========== API RESPONSE ==========");
                cy.log("STATUS:", response.status);
                cy.log("BODY:", response.body);
                cy.log("HEADERS:", response.headers);

                cy.log(`HTTP Status: ${response.status}`);
                cy.log(`Response Body: ${JSON.stringify(response.body)}`);

                // HTTP
                expect(response.status).to.eq(200);
                // Business response
                expect(response.body.success).to.eq(true);
                expect(response.body.message)
                    .to.eq("Session POS fermée avec succès.");
                expect(response.body.data.action).to.eq("closed");
                // Session
                expect(response.body.data.session_uuid).to.eq("541db3e1-a9f3-48d8-adc5-6715ac7c5468");
                // Refund
                //expect(response.body.data.total_fund).to.eq(116.07);
                //expect(response.body.data.cash_total).to.eq(116.07);
                expect(response.body.data.cash_init).to.eq(50);
            });
        });
    });
});
