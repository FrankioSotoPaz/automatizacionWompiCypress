describe("Consignación módulo de recaudo", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Consignación", () => {
    cy.fixture("liquidacionConsignacionOrion.json").then((data) => {
      cy.get('a[href*="#submenu4"]').click();
      cy.get('a[href*="#submenu13"]').click();
      cy.get("#submenu13").contains("Liquidación Manual").click();
      cy.get(".font-12").contains("Consignación Domina").click({ force: true });
      cy.get("#cedulaMensajero").select(data.mensajero, { force: true });
      cy.get("#monto-consignado-temp").type(data.valorConsignacion);
      cy.get("#numero-aprobacion").type(data.numeroAprobacion);
      cy.get("#fecha-hora-consigna").type(data.fechaHoraConsignacion);
      cy.get("#imagen-consigna").selectFile(
        "cypress/files/" + data.foto + ".png"
      );
      cy.get("#btn-guardar-consigna").click();

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
