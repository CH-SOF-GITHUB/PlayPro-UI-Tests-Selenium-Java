describe("POS - Verify PIN API", () => {

    it("should verify the POS user PIN successfully", () => {
        cy.request({
            method: "POST",
            url: "https://demotenant-bo.playpro.fr/api/v1/admin/pos/users/2385/verify-pin",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // Ne jamais mettre le vrai token dans le code
                Authorization: `Bearer ${Cypress.env("POS_AUTH_TOKEN")}`,
                posdeviceid: Cypress.env("POS_DEVICE_ID")
            },
            body: {
                pin: "0000",
                user_id: 2385
            },
            failOnStatusCode: false
        }).then((response) => {
            // HTTP
            expect(response.status).to.eq(200);
            // Business response
            expect(response.body.success).to.eq(true);
            expect(response.body.message)
                .to.eq("Code PIN vérifié avec succès.");
            // User
            expect(response.body.data.user.id).to.eq(2385);
            expect(response.body.data.user.first_name)
                .to.eq("Chaker 1");
            // POS
            expect(response.body.data.pos).to.have.property("id");
            expect(response.body.data.pos.id).to.eq(8);
            // Session
            expect(response.body.data)
                .to.have.property("currentUserPosSessionUuid");
            expect(response.body.data)
                .to.have.property("notClosedPosSessionUuid");
        });
    });
});
