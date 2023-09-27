describe("Liquidación módulo recaudo", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Recaudo con método efectivo", () => {
    cy.fixture("liquidacionMensajeroOrion.json").then((data) => {
      cy.get('a[href*="#submenu4"]').click();
      cy.get('a[href*="#submenu13"]').click();
      cy.get("#submenu13")
        .contains("Liquidación Mensajero")
        .click({ force: true });
      cy.get("#mensajero_id").select(data.mensajero, { force: true });
      cy.get("#fecha_recaudo_mensajero").select(data.fechaRecaudoMensajero, {
        force: true,
      });
      cy.get("#btn-consultar").click();
      cy.get("#btn-ver").click();
      cy.wait(3000);
      cy.get('[class="btn btn-danger"]').contains("Cerrar").click();
      cy.get("#btn-si").click();

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
