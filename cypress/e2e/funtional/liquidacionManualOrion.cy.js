describe("Liquidación manual módulo recaudo", () => {
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
    cy.fixture("liquidacionManualOrion.json").then((data) => {
      cy.get('a[href*="#submenu4"]').click();
      cy.get('a[href*="#submenu13"]').click();
      cy.get("#submenu13").contains("Liquidación Manual").click();
      cy.get("#numero-guia").type(data.guia).type("{enter}");
      cy.get(".col-md-5").should("contain", "Mensajero");
      cy.get(".radio").contains(data.medioRecaudo).click();
      cy.get("#btn-guardar-recaudo").click();
      cy.wait(4000);

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
