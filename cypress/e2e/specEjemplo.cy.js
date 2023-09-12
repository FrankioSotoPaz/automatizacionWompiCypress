/*describe("Mi primera prueba Login", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Logout", () => {
    cy.get(".font-header").should("contain", "Rol Administrador del sistema");
    cy.get(".dropdown").click();
    cy.wait(5000);
    cy.get("ul li a").contains("Cerrar sesión").click({ force: true });

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});*/

/*describe("Flujo creación de ordenes", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Creación Orden", () => {
    cy.get(".font-header").should("contain", "Rol Administrador del sistema");
    cy.get('a[href*="#submenu4"]').click();
    cy.get('a[href*="#submenu_ordenes"]').click();
    cy.contains("ul li a", "Ordenes de servicio").click();
    cy.contains("div a", "Nueva Orden").click();
    cy.get("#tipoCreacion").select("Sin Número de Recogida");
    cy.get("#formaPago").select("Crédito");
    cy.get("#select2-cliente-container").click(); // cliente
    cy.wait(5000);
    cy.get("#select2-cliente-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("EFFICOMMERCE S.A.S")
      .type("{enter}");
    cy.get("#tipoMensajeriaID").select("Paqueteo");
    cy.get("#tipoTiempo").select("Normal");
    cy.get("#select2-producto-container").click(); // producto
    cy.get('input[class="select2-search__field"]')
      .type("Sobredimensionado / CAJAS")
      .type("{enter}");
    cy.get("#select2-sucursalFisico-container").click(); // sucursal
    cy.get('input[class="select2-search__field"]')
      .type("MEDELLIN")
      .type("{enter}");
    cy.get("#responsableEntrega").type("Frankio");
    cy.get("#btn-guardar").click();

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});*/

/*describe("Flujo subir bases", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Subir base", () => {
    cy.get('a[href*="#submenu4"]').click();
    cy.get('a[href*="#submenu_archivo"]').click();
    cy.scrollTo("top");
    cy.contains("ul li a", "Subir Bases").click({ force: true });
    cy.get("#select2-cliente-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("EFFICOMMERCE S.A.S") //EFFICOMMERCE S.A.S
      .type("{enter}");
    cy.wait(3000);
    cy.get("#bases").selectFile("cypress/files/208350.txt");
    cy.get("#btnSubir").click();

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});*/

/*describe("Flujo para creación Manifiestos", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Manifiesto asignación a zona", () => {
    cy.get('a[href*="#submenu4"]').click();
    cy.get("#submenu4").contains("Manifiestos").click();
    cy.contains("div a", "Nuevo manifiesto").click();
    cy.get("#select2-tipo-container").click(); // Tipo
    cy.get('input[class="select2-search__field"]')
      .type("Asignacion a Zona")
      .type("{enter}");
    cy.get("#tipo_tiempo").select("Normal"); // Tiempo
    cy.get("#select2-tipo_mensajero-container").click({ force: true }); //Tipo de mensajero
    cy.get('input[class="select2-search__field"]')
      .type("MENSAJERO 24 HORAS")
      .type("{enter}");
    cy.get("#select2-mensajero-container").click({ force: true }); // Mensajero
    cy.get('input[class="select2-search__field"]')
      .type("HECTOR FAVIO AGUDELO RINCON")
      .type("{enter}");
    cy.get("#select2-ciudad-container").click({ force: true }); // Cuidad
    cy.get('input[class="select2-search__field"]')
      .type("Medellin / Antioquia")
      .type("{enter}");
    cy.get("#select2-zona-container").click({ force: true }); // Zona
    cy.get('input[class="select2-search__field"]')
      .type("4 - AMERICA 3")
      .type("{enter}");
    cy.get("#guardar").click();

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});*/

/*describe("Flujo para Asignación de guía a Manifiestos y cambio de estado a entrega", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Manifiesto asignación a zona punteo interno entrega", () => {
    cy.get('a[href*="#submenu4"]').click();
    cy.get("#submenu4").contains("Manifiestos").click();
    cy.get("#1147861").contains("Asignar envios").click(); //cambiar manifiesto
    cy.get("#idenvio").type("85910400611434").type("{enter}"); // cambiar guía
    cy.get(".alert-success").should(
      "contain",
      "Envío 85910400611434 actualizado"
    ); // cambiar guía para mensaje exitoso
    cy.wait(5000);
    cy.get("#myModal").click({ force: true });
    cy.get(".sorting_1").contains("1147851").click(); // cambiar manifiesto
    cy.get("#select2-tipo_servicio-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("PAQUETEO")
      .type("{enter}");
    cy.get("#select2-estado_paqueteo-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("ENTREGA")
      .type("{enter}");
    cy.get("#idenvio").type("85910400611434").type("{enter}"); // cambiar guía

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});*/

/*describe("Flujo para el módulo de recuado", () => {
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
    cy.get('a[href*="#submenu4"]').click();
    cy.get('a[href*="#submenu13"]').click();
    cy.get("#submenu13").contains("Liquidación Manual").click();
    cy.get("#numero-guia").type("85910400611531").type("{enter}");
    cy.get(".col-md-5").should("contain", "Mensajero");
    cy.get(".radio").contains("EFECTIVO").click();
    cy.get("#btn-guardar-recaudo").click(); //Liquidación manual
    cy.wait(4000);
    cy.get('a[href*="#submenu4"]').click(); // Liquidación mensajero
    cy.get('a[href*="#submenu13"]').click();
    //cy.scrollTo("top");
    cy.get("#submenu13").contains("Liquidación Mensajero").click();
    cy.get("#select2-mensajero_id-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("RICARDO CALDERON CASTELLANOS") // Cambiar mensajero
      .type("{enter}");
    cy.get("#select2-fecha_recaudo_mensajero-container").click();
    cy.get('input[class="select2-search__field"]')
      .type("2023-08-15") // Cambiar fecha
      .type("{enter}");
    cy.get("#btn-consultar").click();
    cy.get("#btn-ver").click();
    cy.wait(3000);
    cy.get('[class="btn btn-danger"]').contains("Cerrar").click();
    cy.get("#btn-si").click();

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});*/

/*const userApiMock = {
  getUsers: () => [
    { id: 1, name: "Alvaro" },
    { id: 2, name: "Vero" },
    { id: 3, name: "Frank" },
    { id: 4, name: "Kelly" },
  ],
  getLogin: (user, password) => {
    if (user && password) {
      return { id: 1, name: "Alvaro" };
    } else {
      return { message: "usuario y contraseña incorrecta" };
    }
  },
};

describe("Mocks", () => {
  before(() => {
    cy.login("1094970294", "1094970294");

    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {});

  afterEach(() => {});

  after(() => {});

  it("Mocks", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});*/

/*describe("Probando API", () => {
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
});*/

/*cy.request(
   "https://pruebasorion.infokairos.com.co:2904/api/guia-paqueteo/consultar"
 );
 Headers.its("headers")
   .its("content-type")
   .should("include", "application/json");*/
