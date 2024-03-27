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

//EMOJIS  
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
   

    //FECHA
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


    // CANTIDAD DE VECES
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

  cy.wait(20000);
  cy.get('.space-y-10 > :nth-child(2) > .border-black').click();    

  //CICLO2

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
  
  //EMOJIS  
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
     
  
      //FECHA
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
  
  
      // CANTIDAD DE VECES
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
  
    cy.wait(20000);
    cy.get('.space-y-10 > :nth-child(2) > .border-black').click();

    //CICLO 3
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
  
  //EMOJIS  
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
     
  
      //FECHA
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
  
  
      // CANTIDAD DE VECES
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
  
    cy.wait(20000);
    cy.get('.space-y-10 > :nth-child(2) > .border-black').click();

    //CICLO 4
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
  
  //EMOJIS  
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
     
  
      //FECHA
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
  
  
      // CANTIDAD DE VECES
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
  
    cy.wait(20000);
    cy.get('.space-y-10 > :nth-child(2) > .border-black').click();


    //CICLO 5

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
  
  //EMOJIS  
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
     
  
      //FECHA
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
  
  
      // CANTIDAD DE VECES
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
  
    cy.wait(20000);
    cy.get('.space-y-10 > :nth-child(2) > .border-black').click();

    //CICLO 6

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
  
  //EMOJIS  
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
     
  
      //FECHA
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
  
  
      // CANTIDAD DE VECES
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
  
    cy.wait(20000);
    cy.get('.space-y-10 > :nth-child(2) > .border-black').click();


    //CICLO 7

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
  
  //EMOJIS  
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
     
  
      //FECHA
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
  
  
      // CANTIDAD DE VECES
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
  
    cy.wait(20000);
    cy.get('.space-y-10 > :nth-child(2) > .border-black').click();


    //CICLO 8


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
  
  //EMOJIS  
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
     
  
      //FECHA
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
  
  
      // CANTIDAD DE VECES
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
  
    cy.wait(20000);
    cy.get('.space-y-10 > :nth-child(2) > .border-black').click();


    //CICLO 9 

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
  
  //EMOJIS  
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
     
  
      //FECHA
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
  
  
      // CANTIDAD DE VECES
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
  
    cy.wait(20000);
    cy.get('.space-y-10 > :nth-child(2) > .border-black').click();

    //CICLO 10

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
    
    //EMOJIS  
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
       
    
        //FECHA
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
    
    
        // CANTIDAD DE VECES
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
    
      cy.wait(20000);
      cy.get('.space-y-10 > :nth-child(2) > .border-black').click();
      cy.wait(20000);

      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
  });
});
});
});
}); 
});
});
});
});
});
});
});
});
});
});
}); 
});
});
});
});
});
});
});
});
});
}); 
});
});
});
});
});
});
});
});
});
});
}); 
});
});
});
});
});
});
});
});
});
});
}); 
});
});
});
});