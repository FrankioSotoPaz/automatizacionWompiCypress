describe("Polarix", () => {
  before(() => {
    cy.loginPolarix("1094970294", "JUlio2023**.");
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
