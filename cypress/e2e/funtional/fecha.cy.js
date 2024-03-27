describe("Ciclo cantidad de emojis", () => {
  before(() => {
    cy.login("777883", "10df2f32286b7120Mi00LTM4ODc3Nw==30e0c83e6c29f1c3");

    cy.on("uncaught:exception", (err, runnable) => {
    return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

it('Toma o mapea valores específicos de un selector con numeros y la fecha', () => {

  cy.get(':nth-child(3) > .text-center').invoke('text').then((texto) => {
    const match = texto.match(/\d+/);
    expect(match).to.not.be.null;
    const valorNumerico = parseInt(match[0], 10);
    cy.log(`Valor Numérico: ${valorNumerico}`);

    const patronFecha = /\b(\d{1,2}\/\d{1,2}\/\d{4})\b/;

cy.get(':nth-child(3) > .text-center').invoke('text').then((texto) => {
  const coincidencias = texto.match(patronFecha);

  if (coincidencias) {
    const fechaEncontrada = coincidencias[0];

    cy.log(`Fecha encontrada: ${fechaEncontrada}`);
  } else {
    cy.log('No se encontró ninguna fecha en el texto.');
  }
 
  const fechaActual = new Date();

  const cantidadDiasASumar = valorNumerico;
  
  const nuevaFecha = new Date(fechaActual);
  nuevaFecha.setDate(fechaActual.getDate() + cantidadDiasASumar);
  
  cy.log(`Fecha actual: ${fechaActual.toDateString()}`);
  cy.log(`Nueva fecha después de sumar ${cantidadDiasASumar} días corridos: ${nuevaFecha.toLocaleDateString()}`);

  const fechaFormateada = `${nuevaFecha.getFullYear()}-${(nuevaFecha.getMonth() + 1).toString().padStart(2, '0')}-${nuevaFecha.getDate().toString().padStart(2, '0')}`;

  cy.get(':nth-child(3) > .border-2').type(fechaFormateada);

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
});