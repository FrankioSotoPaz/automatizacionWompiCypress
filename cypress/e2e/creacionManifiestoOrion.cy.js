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
    cy.get('a[href*="#submenu4"]').click();
    cy.get("#submenu4").contains("Manifiestos").click();
    cy.contains("div a", "Nuevo manifiesto").click();
    cy.get("#select2-tipo-container").click(); // Tipo
    cy.get('input[class="select2-search__field"]')
      .type("Asignacion a Zona")
      .type("{enter}");
    cy.get("#tipo_tiempo").select("Normal"); // Tiempo
    cy.get("#select2-tipo_mensajero-container").click({ force: true }); //Tipo de mensajero
    cy.get('input[class="select2-search__field"]')
      .type("MENSAJERO 24 HORAS")
      .type("{enter}");
    cy.get("#select2-mensajero-container").click({ force: true }); // Mensajero
    cy.get('input[class="select2-search__field"]')
      .type("HECTOR FAVIO AGUDELO RINCON")
      .type("{enter}");
    cy.get("#select2-ciudad-container").click({ force: true }); // Cuidad
    cy.get('input[class="select2-search__field"]')
      .type("Medellin / Antioquia")
      .type("{enter}");
    cy.get("#select2-zona-container").click({ force: true }); // Zona
    cy.get('input[class="select2-search__field"]')
      .type("4 - AMERICA 3")
      .type("{enter}");
    cy.get("#guardar").click();

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
