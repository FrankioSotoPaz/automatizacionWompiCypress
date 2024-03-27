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

  it("Calcular el valor en pantalla", () => {
    cy.fixture("calcular_valor.json").then((data) => {
     
      let textoOriginal;

cy.get('.p-5 > .font-bold').invoke('text').then((texto) => {
  textoOriginal = texto;

  // Utiliza una expresión regular para separar números y operadores
  const partesSeparadas = textoOriginal.match(/(\d+|[*/+\-=?])/g);

  // Filtra los caracteres vacíos y reemplaza '*' por los asteriscos
  const simbolos = [];
  const numeros = [];

  partesSeparadas.forEach((parte) => {
    if (/\d/.test(parte)) {
      numeros.push(Number(parte));
    } else if (/[*/+\-]/.test(parte)) {
      simbolos.push(parte === '*' ? '*' : parte);
    }
  });

  cy.log(`Texto original: ${textoOriginal}`);
  cy.log(`Números: ${numeros}`);
  cy.log(`Símbolos: ${simbolos}`);

  let resultado = numeros[0]; // Inicia el resultado con el primer número

  for (let i = 0; i < simbolos.length; i++) {
    const siguienteNumero = numeros[i + 1];

    if (typeof siguienteNumero !== 'undefined') {
      cy.log(`DEBUG: Operación: ${resultado} ${simbolos[i]} ${siguienteNumero}`);
      
      switch (simbolos[i]) {
        case '+':
          resultado += siguienteNumero;
          break;
        case '-':
          resultado -= siguienteNumero;
          break;
        case '*':
          resultado *= siguienteNumero;
          break;
        case '/':
          if (siguienteNumero === 0) {
            throw new Error('División por cero no permitida');
          }
          resultado /= siguienteNumero;
          break;
        default:
          throw new Error(`Operador no válido en posición ${i}: '${simbolos[i]}' en la expresión '${textoOriginal}'`);
      }

      cy.log(`DEBUG: Resultado parcial: ${resultado}`);
    }
  }

  cy.log('Resultado final:', resultado);
});

      

      
     
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});