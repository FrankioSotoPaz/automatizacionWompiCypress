describe("Creación de guías Paqueteo", () => {
  before(() => {});

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Creación Guía Efficommerce", () => {
    cy.request({
      method: "POST",
      url: "https://pruebasorion.infokairos.com.co:2904/api/guia-paqueteo/crear",
      headers: {
        "Content-Type": "application/json",
        "token-api": "2c641c23ca3bab14cbebe77dddb80f83",
      },
      body: [
        {
          cuenta: "123456",
          piezas: [
            {
              alto: "10",
              peso: 1,
              ancho: "30",
              largo: "30",
              cantidad: 1,
              producto: "cajas",
            },
          ],
          celular: "3214715688",
          factura: "Fact_2",
          telefono: "3214715688",
          cel_origen: "3106718980",
          peso_total: 1,
          tel_origen: "3106718980",
          telfonos: "31067189892",
          destinatario: "Frankio Soto",
          nombre_origen: "EFFI 6700 | Carlos Javier Pelaez Rendon",
          valor_recaudo: 340000,
          cantidad_piezas: "1",
          valor_declarado: "100000",
          divipola_destino: "05001000",
          flete: "70000",
          numero_de_pedido: "345",
          tipo_de_servicio: "NORMAL",
          direccion_destino: "Carrera 25 45",
          peso_volumetrico_total: 1,
          divipola_origen: "05001000",
          ciudad: "MEDELLIN",
          auxiliar_1: "Prueba",
          auxiliar_2: "Prueba",
          valor_a_recaudar: "50000",
          orden_servicio: "170915",
        },
      ],
    }).then((response) => {
      const data = response.body.data[0];

      expect(data).to.have.property("guia");
      expect(data).to.have.property("status");
      expect(data).to.have.property("url");
    });
  });

  cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});
