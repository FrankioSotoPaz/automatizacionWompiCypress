describe("Consultar estado guías", () => {
  before(() => {});

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("API", () => {
    cy.request({
      method: "POST",
      url: "https://pruebasorion.infokairos.com.co:2904/api/guia-paqueteo/consultar",
      headers: {
        "Content-Type": "application/json",
        "token-api": "2c641c23ca3bab14cbebe77dddb80f83",
      },
      body: {
        guia: "85910400611834",
      },
    });

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
