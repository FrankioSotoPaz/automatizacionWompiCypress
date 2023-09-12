describe("Flujo subir bases", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Subir base", () => {
    cy.get('a[href*="#submenu4"]').click();
    cy.get('a[href*="#submenu_archivo"]').click();
    cy.scrollTo("top");
    cy.contains("ul li a", "Subir Bases").click({ force: true });
    cy.get("#select2-cliente-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("EFFICOMMERCE S.A.S") //EFFICOMMERCE S.A.S
      .type("{enter}");
    cy.wait(3000);
    cy.get("#bases").selectFile("cypress/files/208350.txt");
    cy.get("#btnSubir").click();

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
