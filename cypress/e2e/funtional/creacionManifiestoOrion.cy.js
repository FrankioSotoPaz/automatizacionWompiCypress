describe("Flujo para creación Manifiestos", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Manifiesto asignación a zona", () => {
    cy.fixture("creacionManifiestoOrion.json").then((data) => {
      cy.get('a[href*="#submenu4"]').click();
      cy.get("#submenu4").contains("Manifiestos").click();
      cy.contains("div a", "Nuevo manifiesto").click();
      cy.get("#tipo").select(data.tipoManifiesto, { force: true });
      cy.get("#tipo_tiempo").select(data.tiempo);
      cy.get("#tipo_mensajero").select(data.tipoMensajero, { force: true });
      cy.get("#mensajero").select(data.mensajero, { force: true });
      cy.get("#ciudad").select(data.cuidad, { force: true });
      cy.get("#zona").select(data.zona, { force: true });
      cy.get("#guardar").click();

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
