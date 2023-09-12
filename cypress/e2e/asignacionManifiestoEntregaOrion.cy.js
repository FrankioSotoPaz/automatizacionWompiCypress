describe("Flujo para Asignación de guía a Manifiestos y cambio de estado a entrega", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Manifiesto asignación a zona punteo interno entrega", () => {
    cy.get('a[href*="#submenu4"]').click();
    cy.get("#submenu4").contains("Manifiestos").click();
    cy.get("#1147861").contains("Asignar envios").click(); //cambiar manifiesto
    cy.get("#idenvio").type("85910400611434").type("{enter}"); // cambiar guía
    cy.get(".alert-success").should(
      "contain",
      "Envío 85910400611434 actualizado"
    ); // cambiar guía para mensaje exitoso
    cy.wait(5000);
    cy.get("#myModal").click({ force: true });
    cy.get(".sorting_1").contains("1147851").click(); // cambiar manifiesto
    cy.get("#select2-tipo_servicio-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("PAQUETEO")
      .type("{enter}");
    cy.get("#select2-estado_paqueteo-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("ENTREGA")
      .type("{enter}");
    cy.get("#idenvio").type("85910400611434").type("{enter}"); // cambiar guía

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
