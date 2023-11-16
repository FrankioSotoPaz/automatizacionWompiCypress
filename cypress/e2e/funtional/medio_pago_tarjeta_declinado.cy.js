describe("Flujo para medio de pago tarjeta declinado", () => {
  before(() => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");

    cy.on("uncaught:exception", (err, runnable) => {
    return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Medio de pago tarjeta declinado", () => {
    cy.fixture("medio_pago_tarjeta_declinado.json").then((data) => {
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Ingresa el monto a pagar");
    cy.get(".amount-input").type(data.amount);
    cy.get(".submit-button").contains("Continuar").click();
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Escoge un método de pago");
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf").contains("Paga con tus tarjetas").click();
    cy.get("#email").type(data.email);
    cy.get("#fullName").type(data.fullName);
    cy.get("#number").type(data.number);
    cy.get(".submit-button").contains("Continuar con tu pago").click();
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Paga con tu tarjeta");
    cy.get("#cardNumber").type(data.cardNumber);
    cy.get("#expirationMonth").select(data.expirationMonth);
    cy.get("#expirationYear").select(data.expirationYear);
    cy.get("#code").type(data.code);
    cy.get("#cardHolder").type(data.cardHolder);
    cy.get("#legal_id_option").select(data.legal_id_option);
    cy.get("#legal_id_number").type(data.legal_id_number);
    cy.get("#installments").select(data.installments);
    cy.get("#acceptance").check();
    cy.get(".submit-button").contains("Continuar con tu pago").click();
    cy.wait(15000);
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Transacción declinada (Tarjetas)");
    cy.get(".src-components-Summary-__Summary__statusMessage__Y69I7").should("contain", "La transacción fue rechazada (Sandbox)");
    cy.get('tbody > :nth-child(2) > :nth-child(2)').then(($codeNumber) => {
      const declinedNumber = $codeNumber.text();
      cy.log(declinedNumber);
    });   

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});



