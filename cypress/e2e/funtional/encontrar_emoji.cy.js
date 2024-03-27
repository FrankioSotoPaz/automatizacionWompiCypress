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

it('Toma o mapea valores específicos de un selector con palabras y números', () => {

 cy.get('.flex-wrap > :nth-child(2)').invoke('text').then((texto) => {

    const matches = texto.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g);
  
    if (matches && matches.length > 0) {
      const primerEmoji = matches[0];
      cy.log(`Primer Emoji encontrado: ${primerEmoji}`);
    } else {
      cy.log('No se encontraron emojis en la secuencia.');
    }
    
    const valorBuscado = matches[0]; 

    cy.get('.flex-wrap > :nth-child(2)').invoke('text').then((texto) => {
      const expresionRegular = new RegExp(valorBuscado, 'g');
    
      const coincidencias = texto.match(expresionRegular);
    
      const cantidad = coincidencias ? coincidencias.length - 1 : 0;
    
      cy.log(`El valor "${valorBuscado}" aparece ${cantidad} veces en el texto.`);

      cy.get('.flex-wrap > :nth-child(2) > .border-2').type(cantidad.toString()); // Convierte la cantidad a cadena antes de establecerla en el input
    
    });


      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});

