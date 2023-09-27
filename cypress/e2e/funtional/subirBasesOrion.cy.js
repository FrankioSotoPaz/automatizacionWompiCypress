describe("Subir bases", () => {
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
    cy.fixture("subirBasesOrion.json").then((data) => {
      cy.get('a[href*="#submenu4"]').click();
      cy.get('a[href*="#submenu_archivo"]').click();
      cy.scrollTo("top");
      cy.contains("ul li a", "Subir Bases").click({ force: true });
      cy.get("#cliente").select(data.cliente, { force: true });
      cy.wait(3000);
      cy.get("#bases").selectFile("cypress/files/" + data.fileName + ".txt");
      cy.get("#btnSubir").click();

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
