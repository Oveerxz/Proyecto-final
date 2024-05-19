const visualizacionFormularioAts = {
  desProTarAts:
    "Descripcion y procedimiento tarea hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj yyyyyyyyyyy",
  TipoHerramientaAts: "electrica",
  descripcionHerramientaAts: "RRRRRRRRRRRRRRRRRRRRRRRRRR descripcion",
  escaleraSencillaAts: "verdad",
  escaleraDobleAts: "falso",
  escaleraTijeraAts: "verdad",
  andamioModularAts: "falso",
  andamioColganteAts: "Verdad",
  elevadorPersonalAts: "falso",
  emergenciaAts: "verdadero",
  ruidoTrabajoAts: "falso",
  iluminacionAts: "Verdadero",
  peligroResbalarAts: "Falso",
  pasosDetalladosAts: "qwertyuiopasdfghjklzxcvbnm",
  peligrosExistentesAts: "qwertyuiopasdfghjklzxcvbnm",
  consecuenciasAts: "qwertyuiopasdfghjklzxcvbnm",
  controlesRequeridosAts: "1234567890qwertyuiopasdfghjklzxcvbnm"
};

// Descripcion y procedimiento tarea

const contenedorDesProTarAts = document.getElementById("desProTarAts");
contenedorDesProTarAts.textContent = visualizacionFormularioAts.desProTarAts;

//tipo de herramienta

const contenedorTipoHeramienta = document.getElementById("tipoHerranientaAts");
contenedorTipoHeramienta.textContent =
  visualizacionFormularioAts.TipoHerramientaAts;

// descripcion de la herramienta

const contenedorDescripcionHerramientaAts = document.getElementById(
  "descripcionHerramientaAts"
);
contenedorDescripcionHerramientaAts.textContent =
  visualizacionFormularioAts.descripcionHerramientaAts;

// escalera sencilla

const contenedorEscaleraSencillaAts = document.getElementById(
  "escaleraSencillaAts"
);
contenedorEscaleraSencillaAts.textContent =
  visualizacionFormularioAts.escaleraSencillaAts;

// escalera Doble

const contenedorEscaleraDobleAts = document.getElementById("escaleraDobleAts");
contenedorEscaleraDobleAts.textContent =
  visualizacionFormularioAts.escaleraDobleAts;

// escalera Tijera

const contenedorEscaleraTijeraAts =
  document.getElementById("escaleraTijeraAts");
contenedorEscaleraTijeraAts.textContent =
  visualizacionFormularioAts.escaleraTijeraAts;

// Andamio Modular

const contenedorAndamioModularAts =
  document.getElementById("andamioModularAts");
contenedorAndamioModularAts.textContent =
  visualizacionFormularioAts.andamioModularAts;

// Andamio Colgante

const contenedorAndamioColganteAts =
  document.getElementById("andamioColganteAts");
contenedorAndamioColganteAts.textContent =
  visualizacionFormularioAts.andamioColganteAts;

// Elevador Personal

const contenedorElevadorPersonalAts =
  document.getElementById("elevadorPersonalAts");
contenedorElevadorPersonalAts.textContent =
  visualizacionFormularioAts.elevadorPersonalAts;

//¿Existen, están despejadas y señalizadas las rutas, salidas de emergencia, planos de evacuación?

const contenedorEmergenciaAts =
  document.getElementById("emergenciaAts");
contenedorEmergenciaAts.textContent =
  visualizacionFormularioAts.emergenciaAts;

//¿El ruido del lugar de trabajo es tolerable y se puede controlar?
const contenedorRuidoTrabajoAts =
document.getElementById("ruidoTrabajoAts");
contenedorRuidoTrabajoAts.textContent =
visualizacionFormularioAts.ruidoTrabajoAts;

//¿La iluminación de lugar es aceptable ?
const contenedorIluminacionAts =
document.getElementById("iluminacionAts");
contenedorIluminacionAts.textContent =
visualizacionFormularioAts.iluminacionAts;

//¿No Hay peligro de resbalar o tropezar alrededor del área de trabajo?
const contenedorPeligroResbalarAts =
document.getElementById("peligroResbalarAts");
contenedorPeligroResbalarAts.textContent =
visualizacionFormularioAts.peligroResbalarAts;

// Pasos detallados de la actividad
const contenedorPasosDetalladosAts =
document.getElementById("pasosDetalladosAts");
contenedorPasosDetalladosAts.textContent =
visualizacionFormularioAts.pasosDetalladosAts;

// Peligros existente y Potenciales
const contenedorPeligrosExistentesAts =
document.getElementById("peligrosExistentesAts");
contenedorPeligrosExistentesAts.textContent =
visualizacionFormularioAts.peligrosExistentesAts;

// Consecuencias
const contenedorConsecuenciasAts =
document.getElementById("consecuenciasAts");
contenedorConsecuenciasAts.textContent =
visualizacionFormularioAts.consecuenciasAts;

// Controles Requeridos
const contenedorControlesRequeridosAts =
document.getElementById("controlesRequeridosAts");
contenedorControlesRequeridosAts.textContent =
visualizacionFormularioAts.controlesRequeridosAts;