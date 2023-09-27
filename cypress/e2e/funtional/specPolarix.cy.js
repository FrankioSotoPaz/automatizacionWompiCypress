describe("Polarix", () => {
  before(() => {
    cy.loginPolarix("1094970294", "OCtubre2023**.");
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Login", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
