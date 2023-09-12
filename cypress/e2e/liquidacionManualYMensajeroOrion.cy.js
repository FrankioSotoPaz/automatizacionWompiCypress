describe("Flujo para el módulo de recuado", () => {
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
    cy.get('a[href*="#submenu4"]').click();
    cy.get('a[href*="#submenu13"]').click();
    cy.get("#submenu13").contains("Liquidación Manual").click();
    cy.get("#numero-guia").type("85910400611531").type("{enter}");
    cy.get(".col-md-5").should("contain", "Mensajero");
    cy.get(".radio").contains("EFECTIVO").click();
    cy.get("#btn-guardar-recaudo").click(); //Liquidación manual
    cy.wait(4000);
    cy.get('a[href*="#submenu4"]').click(); // Liquidación mensajero
    cy.get('a[href*="#submenu13"]').click();
    //cy.scrollTo("top");
    cy.get("#submenu13").contains("Liquidación Mensajero").click();
    cy.get("#select2-mensajero_id-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("RICARDO CALDERON CASTELLANOS") // Cambiar mensajero
      .type("{enter}");
    cy.get("#select2-fecha_recaudo_mensajero-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("2023-08-15") // Cambiar fecha
      .type("{enter}");
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
