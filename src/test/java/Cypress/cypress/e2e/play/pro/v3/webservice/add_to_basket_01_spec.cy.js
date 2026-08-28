/*
PLPRB - Payment Add To Basket
POST /api/v1/payment/add-to-basket
*/

describe("Payment - Add To Basket API", () => {

    it("should create an order with 2 undated tickets", () => {

        /**
         * PROBLEME RECONNU (Cypress 15+) :
         * L'ancien appel 'Cypress.env()' synchrone est bloqué ou déprécié lorsque la sécurité
         * 'allowCypressEnv: false' est active, afin d'éviter d'exposer les secrets dans le navigateur.
         *
         * SOLUTION :
         * On utilise l'appel asynchrone 'cy.env(['CLE'])' recommandé par Cypress.
         * Il isole le token et le transmet de manière sécurisée uniquement au bloc '.then()' qui suit.
         */
        cy.env(['PAYMENT_AUTH_TOKEN']).then(({PAYMENT_AUTH_TOKEN}) => {

            cy.request({
                method: "POST",

                url: "https://chakerqa-bo.playpro.fr/api/v1/payment/add-to-basket",

                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                    Authorization:
                        `Bearer ${PAYMENT_AUTH_TOKEN}`
                },

                body: {
                    payment: {
                        wallet: {
                            amount: 0
                        },
                        stripe: {
                            paymentMethodId: "pm_1TE5iBLzRuw2JmVxW9mtjqbA",
                            amount: 111.32
                        }
                    },

                    purchase: {
                        undatedTickets: [
                            {
                                amount: 55.66,
                                priceByTimesId: 61,
                                name: "Exp VR Night",
                                type: "undated_ticket"
                            },
                            {
                                amount: 55.66,
                                priceByTimesId: 61,
                                name: "Exp VR Night",
                                type: "undated_ticket"
                            }
                        ],

                        totalPriceAcompte: 111.32,
                        totalPricePromo: 111.32
                    },

                    restPayment: 111.32,
                    restPaymentAcompte: 111.32,
                    is_paid_acompte: false,
                    promoCode: null
                },

                failOnStatusCode: false

            }).then((response) => {

                // ==========================================
                // DEBUG RESPONSE
                // ==========================================

                cy.log(`HTTP STATUS: ${response.status}`);

                cy.log(
                    `RESPONSE: ${JSON.stringify(response.body)}`
                );


                // ==========================================
                // HTTP
                // ==========================================

                expect(
                    response.status,
                    `API RESPONSE: ${JSON.stringify(response.body)}`
                ).to.eq(200);


                // ==========================================
                // BUSINESS RESPONSE
                // ==========================================

                expect(response.body.success)
                    .to.eq(true);

                expect(response.body.requires_action)
                    .to.eq(null);


                // ==========================================
                // ORDER
                // ==========================================

                expect(response.body.order_id)
                    .to.be.a("number");

                expect(response.body.order_details.id)
                    .to.eq(response.body.order_id);

                expect(response.body.order_details.total_price)
                    .to.eq(111.32);


                // ==========================================
                // PAYMENT
                // ==========================================

                expect(response.body.stripe_amount)
                    .to.eq(11132);

                expect(response.body.status)
                    .to.eq("succeeded");

                expect(response.body.payment_intent_id)
                    .to.exist;


                // ==========================================
                // ITEMS
                // ==========================================

                expect(response.body.order_details.items)
                    .to.have.length(2);

                expect(response.body.order_details.items[0].price)
                    .to.eq(55.66);

                expect(response.body.order_details.items[1].price)
                    .to.eq(55.66);


                // ==========================================
                // UNDATED TICKETS
                // ==========================================

                expect(response.body.message.undatedTickets)
                    .to.have.length(2);

                expect(response.body.message.undatedTickets[0].success)
                    .to.eq(true);

                expect(response.body.message.undatedTickets[1].success)
                    .to.eq(true);

                expect(response.body.message.undatedTickets[0].message)
                    .to.eq("le billet non daté a été généré.");

                expect(response.body.message.undatedTickets[1].message)
                    .to.eq("le billet non daté a été généré.");

            });
        });
    });
});
