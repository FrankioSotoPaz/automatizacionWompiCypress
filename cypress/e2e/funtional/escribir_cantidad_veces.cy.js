describe("Ciclo cálculo valor", () => {
  before(() => {
    cy.login("777883", "10df2f32286b7120Mi00LTM4ODc3Nw==30e0c83e6c29f1c3");

    cy.on("uncaught:exception", (err, runnable) => {
    return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

it('Toma o mapea valores específicos de un selector con palabras y números', () => {
  
 cy.get('.flex-wrap > .justify-around > .text-center').invoke('text').then((texto) => {
  const match = texto.match(/\d+/);
  expect(match).to.not.be.null;
  const valorNumerico = parseInt(match[0], 10);
  cy.log(`Valor Numérico: ${valorNumerico}`);

cy.get('.flex-wrap > .justify-around > .text-center').invoke('text').then((texto) => {
  const match = texto.match(/"([a-zA-Z])"/);
  expect(match).to.not.be.null;
  const letra = match[1];
  cy.log(`Letra: ${letra}`);

  const letraEscribir = letra ;
  const cantidadVeces = valorNumerico;

    for (let i = 0; i < cantidadVeces; i++) {
      cy.get('.flex-wrap > .justify-around > .border-2').type(letraEscribir);
    }
});
});
});

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
