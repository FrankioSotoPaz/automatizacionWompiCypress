describe("Flujo para medio de pago Nequi declinado", () => {
  before(() => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");

    cy.on("uncaught:exception", (err, runnable) => {
    return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Medio de pago nequi declinado", () => {
    cy.fixture("medio_pago_nequi_declinado.json").then((data) => {
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Ingresa el monto a pagar");
    cy.get(".amount-input").type(data.amount);
    cy.get(".submit-button").contains("Continuar").click();
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Escoge un método de pago");
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf").contains("Paga con tu cuenta Nequi").click();
    cy.get("#email").type(data.email);
    cy.get("#fullName").type(data.fullName);
    cy.get("#number").type(data.number);
    cy.get(".submit-button").contains("Continuar con tu pago").click();
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Paga con Nequi");
    cy.get("#mobilePhone").type(data.mobilePhone);
    cy.get("#acceptance").check();
    cy.get(".submit-button").contains("Continuar con tu pago").click();
    cy.wait(10000);
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Transacción declinada (Nequi)");
    cy.get(".src-components-Summary-__Summary__statusMessage__Y69I7").should("contain", "Transacción RECHAZADA en Sandbox");
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



