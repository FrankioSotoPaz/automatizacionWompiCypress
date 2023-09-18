describe("Flujo creación de ordenes", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Creación Orden", () => {
    cy.fixture("creacionOrdenesOrion.json").then((data) => {
      cy.get(".font-header").should("contain", "Rol Administrador del sistema");
      cy.get('a[href*="#submenu4"]').click();
      cy.get('a[href*="#submenu_ordenes"]').click();
      cy.contains("ul li a", "Ordenes de servicio").click();
      cy.contains("div a", "Nueva Orden").click();
      cy.get("#tipoCreacion").select("Sin Número de Recogida");
      cy.get("#formaPago").select("Crédito");
      cy.get("#cliente").select(data.cliente, { force: true });
      cy.get("#tipoMensajeriaID").select(data.tipoMensajeria);
      cy.get("#tipoTiempo").select("Normal");
      cy.get("#producto").select(data.producto, { force: true });
      cy.get("#sucursalFisico").select(data.sucursal, { force: true });
      cy.get("#responsableEntrega").type(data.responsableEntrega);
      cy.get("#btn-guardar").click();

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
