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
    cy.get(".font-header").should("contain", "Rol Administrador del sistema");
    cy.get('a[href*="#submenu4"]').click();
    cy.get('a[href*="#submenu_ordenes"]').click();
    cy.contains("ul li a", "Ordenes de servicio").click();
    cy.contains("div a", "Nueva Orden").click();
    cy.get("#tipoCreacion").select("Sin Número de Recogida");
    cy.get("#formaPago").select("Crédito");
    cy.get("#select2-cliente-container").click(); // cliente
    cy.wait(5000);
    cy.get("#select2-cliente-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("EFFICOMMERCE S.A.S")
      .type("{enter}");
    cy.get("#tipoMensajeriaID").select("Paqueteo");
    cy.get("#tipoTiempo").select("Normal");
    cy.get("#select2-producto-container").click(); // producto
    cy.get('input[class="select2-search__field"]')
      .type("Sobredimensionado / CAJAS")
      .type("{enter}");
    cy.get("#select2-sucursalFisico-container").click(); // sucursal
    cy.get('input[class="select2-search__field"]')
      .type("MEDELLIN")
      .type("{enter}");
    cy.get("#responsableEntrega").type("Frankio");
    cy.get("#btn-guardar").click();

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
