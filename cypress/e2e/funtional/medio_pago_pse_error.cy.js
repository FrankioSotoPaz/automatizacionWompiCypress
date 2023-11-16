describe("Flujo para medio de pago PSE error", () => {
  before(() => {
    cy.visit("https://checkout.co.uat.wompi.dev/l/stagtest_VPOS_bdQraT");

    cy.on("uncaught:exception", (err, runnable) => {
    return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Medio de pago PSE error", () => {
    cy.fixture("medio_pago_pse_error.json").then((data) => {
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Ingresa el monto a pagar");
    cy.get(".amount-input").type(data.amount);
    cy.get(".submit-button").contains("Continuar").click();
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Escoge un método de pago");
    cy.get(".src-components-PaymentMethod-__PaymentMethod__methodName__EpbVf").contains("Transfiere con tu cuenta de ahorros o corriente").click();
    cy.get("#email").type(data.email);
    cy.get("#fullName").type(data.fullName);
    cy.get("#number").type(data.number);
    cy.get(".submit-button").contains("Continuar con tu pago").click();
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Paga con PSE");
    cy.get("#financialInstitutionCode").select(data.financialInstitutionCode, {force:true});
    cy.get("#userLegalIdType").select(data.userLegalIdType);
    cy.get("#userLegalId").type(data.userLegalId);
    cy.get("#acceptance").check();
    cy.get(".submit-button").contains("Continuar con tu pago").click();
    cy.wait(15000);
    cy.get(".src-components-App-__App__title__Y13rn").should("contain", "Transacción con error (PSE)");
    cy.get(".src-components-Summary-__Summary__statusMessage__Y69I7").should("contain", "Transacción con ERROR en Sandbox");
    cy.get(':nth-child(2) > tbody > :nth-child(2) > :nth-child(2)').then(($codeNumber) => {
      const errorNumber = $codeNumber.text();
      cy.log(errorNumber);
    });   
    

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});



