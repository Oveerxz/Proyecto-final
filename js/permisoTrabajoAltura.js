const firebaseConfig = {
  apiKey: "AIzaSyCFOE9HABPO98q4CalVCisoVM7TIVo2czI",
  authDomain: "bd-appconnet.firebaseapp.com",
  projectId: "bd-appconnet",
  storageBucket: "bd-appconnet.appspot.com",
  messagingSenderId: "749439432233",
  appId: "1:749439432233:web:861541de33ed615b9fce38",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const baseDatos = firebase.firestore();

// fin de codigo firebase

const formularioDatosTrabajoAltura = document.getElementById(
  "enviar-datos-trabajo-alturas"
);
formularioDatosTrabajoAltura.addEventListener("click", function () {
  const impresionFormularioTrabajoAltura = {};

  impresionFormularioTrabajoAltura.ciudadTrabajoAltura =
    document.getElementById("ciudad-trabajo-altura").value;
  impresionFormularioTrabajoAltura.direccionTrabajoAltura =
    document.getElementById("direccion-trabajo-altura").value;
  impresionFormularioTrabajoAltura.fechaInicioActividad =
    document.getElementById("fecha-inicio-actividad").value;
  impresionFormularioTrabajoAltura.fechaCulminacionActividad =
    document.getElementById("fecha-culminacion-actividad").value;
  impresionFormularioTrabajoAltura.horaInicioActividad =
    document.getElementById("hora-inicio-actividad").value;
  impresionFormularioTrabajoAltura.horaCulminacionActividad =
    document.getElementById("hora-culminacion-actividad").value;
  impresionFormularioTrabajoAltura.alturaActividad =
    document.getElementById("altura-actividad").value;
  impresionFormularioTrabajoAltura.actividadRutinaria = document.getElementById(
    "actividad-rutinaria"
  ).value;
  impresionFormularioTrabajoAltura.actividadRutinaria = document.getElementById(
    "actividad-rutinaria"
  ).checked;
  impresionFormularioTrabajoAltura.descripcionProcedimientoTarea =
    document.getElementById("descripcion-procedimiento-tarea").value;
  //3 Acordeon
  impresionFormularioTrabajoAltura.cascoBurbuquejoAt =
    document.getElementById("cascoBurbuquejoAt").checked;
  impresionFormularioTrabajoAltura.gafasSeguridadAt =
    document.getElementById("gafasSeguridadAt").checked;
  impresionFormularioTrabajoAltura.protectorRespiratorioAt =
    document.getElementById("protectorRespiratorioAt").checked;
  impresionFormularioTrabajoAltura.protectoresAuditivosAt =
    document.getElementById("protectoresAuditivosAt").checked;
  impresionFormularioTrabajoAltura.guantesNitriloAt =
    document.getElementById("guantesNitriloAt").checked;
  impresionFormularioTrabajoAltura.guantesVaquetaAt =
    document.getElementById("guantesVaquetaAt").checked;
  impresionFormularioTrabajoAltura.guantesDielectricosAt =
    document.getElementById("guantesDielectricosAt").checked;
  impresionFormularioTrabajoAltura.botaSeguridadAt =
    document.getElementById("botaSeguridadAt").checked;
  impresionFormularioTrabajoAltura.trajeOverolAt =
    document.getElementById("trajeOverolAt").checked;
  impresionFormularioTrabajoAltura.arnes4ArgollasAt =
    document.getElementById("arnes4ArgollasAt").checked;
  impresionFormularioTrabajoAltura.arnes5ArgollasAt =
    document.getElementById("arnes5ArgollasAt").checked;

  //4 Acordeon actividades criticas

  impresionFormularioTrabajoAltura.trabajoAlturasAt =
    document.getElementById("trabajoAlturasAt").checked;
  impresionFormularioTrabajoAltura.espaciosConfinadosAt =
    document.getElementById("espaciosConfinadosAt").checked;
  impresionFormularioTrabajoAltura.energiasPeligrosasAt =
    document.getElementById("energiasPeligrosasAt").checked;

  //Acordeon 5 Identificacion de Peligros

  impresionFormularioTrabajoAltura.presenciaVirusAt =
    document.getElementById("presenciaVirusAt").checked;
  impresionFormularioTrabajoAltura.presenciaAnimalesAt =
    document.getElementById("presenciaAnimalesAt").checked;
  impresionFormularioTrabajoAltura.iluminacionDeficienteAt =
    document.getElementById("iluminacionDeficienteAt").checked;
  impresionFormularioTrabajoAltura.exposicionRuidoAt =
    document.getElementById("exposicionRuidoAt").checked;
  impresionFormularioTrabajoAltura.altasTemperaturasAt =
    document.getElementById("altasTemperaturasAt").checked;
  impresionFormularioTrabajoAltura.bajasTemperaturasAt =
    document.getElementById("bajasTemperaturasAt").checked;
  impresionFormularioTrabajoAltura.caidaObjetosAt =
    document.getElementById("caidaObjetosAt").checked;
  impresionFormularioTrabajoAltura.caidaMismoNivelAt =
    document.getElementById("caidaMismoNivelAt").checked;
  impresionFormularioTrabajoAltura.caidaDiferenteNivelAts =
    document.getElementById("caidaDiferenteNivelAt").checked;
  impresionFormularioTrabajoAltura.colapsoEstructuralAt =
    document.getElementById("colapsoEstructuralAt").checked;
  impresionFormularioTrabajoAltura.malOrdenAseoAt =
    document.getElementById("malOrdenAseoAt").checked;
  impresionFormularioTrabajoAltura.superficieIrregularAt =
    document.getElementById("superficieIrregularAt").checked;
  impresionFormularioTrabajoAltura.cercaniaRedesElectricasAt =
    document.getElementById("cercaniaRedesElectricasAt").checked;
  impresionFormularioTrabajoAltura.arcoElectricoAt =
    document.getElementById("arcoElectricoAt").checked;
  impresionFormularioTrabajoAltura.contactoPartesMovimientoAt =
    document.getElementById("contactoPartesMovimientoAt").checked;
  impresionFormularioTrabajoAltura.manipulacionHerramientasManualesAT =
    document.getElementById("manipulacionHerramientasManualesAT").checked;
  impresionFormularioTrabajoAltura.proyeccionParticulasAt =
    document.getElementById("proyeccionParticulasAt").checked;
  impresionFormularioTrabajoAltura.contactoSustanciasQuimicasAt =
    document.getElementById("contactoSustanciasQuimicasAt").checked;
  impresionFormularioTrabajoAltura.PresenciaGasesVaporesAt =
    document.getElementById("PresenciaGasesVaporesAt").checked;
  impresionFormularioTrabajoAltura.exposicionPolvoAt =
    document.getElementById("exposicionPolvoAt").checked;
  impresionFormularioTrabajoAltura.manipulacionManualCargasAt =
    document.getElementById("manipulacionManualCargasAt").checked;
  impresionFormularioTrabajoAltura.posturasInadecuadasAt =
    document.getElementById("posturasInadecuadasAt").checked;
  impresionFormularioTrabajoAltura.movimientosRepetitivosAt =
    document.getElementById("movimientosRepetitivosAt").checked;
  impresionFormularioTrabajoAltura.exposicionLluviaAt =
    document.getElementById("exposicionLluviaAt").checked;
  impresionFormularioTrabajoAltura.exposicionVientosFuertesAt =
    document.getElementById("exposicionVientosFuertesAt").checked;
  impresionFormularioTrabajoAltura.exposicionDerrumbesDesliamientosAt =
    document.getElementById("exposicionDerrumbesDesliamientosAt").checked;
  impresionFormularioTrabajoAltura.presenciaFuegoAt =
    document.getElementById("presenciaFuegoAt").checked;
  impresionFormularioTrabajoAltura.derramesFugasAt =
    document.getElementById("derramesFugasAt").checked;
  impresionFormularioTrabajoAltura.riesgoExplosionAt =
    document.getElementById("riesgoExplosionAt").checked;
  // acordeon 6 Sistemas de Restriccion y Posicionamiento
  impresionFormularioTrabajoAltura.lineaVidaVerticalFijaAt =
    document.getElementById("lineaVidaVerticalFijaAt").checked;
  impresionFormularioTrabajoAltura.lineaVidaVerticalPortatilAt =
    document.getElementById("lineaVidaVerticalPortatilAt").checked;
  impresionFormularioTrabajoAltura.lineaVidaHoriontalHorizontalAt =
    document.getElementById("lineaVidaHoriontalHorizontalAt").checked;
  impresionFormularioTrabajoAltura.lineaVidaHoriontalFijaAt =
    document.getElementById("lineaVidaHoriontalFijaAt").checked;
  impresionFormularioTrabajoAltura.anclajePortatilAt =
    document.getElementById("anclajePortatilAt").checked;
  impresionFormularioTrabajoAltura.cintaAnclajeAt =
    document.getElementById("cintaAnclajeAt").checked;
  impresionFormularioTrabajoAltura.conectorTransitoVerticalAt =
    document.getElementById("conectorTransitoVerticalAt").checked;
  impresionFormularioTrabajoAltura.eslingaRestriccionAt =
    document.getElementById("eslingaRestriccionAt").checked;
  impresionFormularioTrabajoAltura.eslingaPosicionamientoAt =
    document.getElementById("eslingaPosicionamientoAt").checked;
  impresionFormularioTrabajoAltura.eslingaDetencionCaidasAt =
    document.getElementById("eslingaDetencionCaidasAt").checked;
  impresionFormularioTrabajoAltura.eslingaDetencionCaidasSencillaAt =
    document.getElementById("eslingaDetencionCaidasSencillaAt").checked;
  impresionFormularioTrabajoAltura.eslingaDetencionCaidasDobleAt =
    document.getElementById("eslingaDetencionCaidasDobleAt").checked;
  // acordeon 7 Medidas de Prevencion Contra Caidas
  impresionFormularioTrabajoAltura.delimitacionAreaAT =
    document.getElementById("delimitacionAreaAT").checked;
  impresionFormularioTrabajoAltura.barandasAt =
    document.getElementById("barandasAt").checked;
  impresionFormularioTrabajoAltura.señaliacionAt =
    document.getElementById("señaliacionAt").checked;
  impresionFormularioTrabajoAltura.lineaAdvertenciaAt =
    document.getElementById("lineaAdvertenciaAt").checked;
  impresionFormularioTrabajoAltura.controlAccesoAt =
    document.getElementById("controlAccesoAt").checked;
  // acordeon 8 Aprobacion y validacion permiso
  impresionFormularioTrabajoAltura.archicoFirmaDigitalSst =
    document.getElementById("archivo-firma-digital-sst").value;
  impresionFormularioTrabajoAltura.registroFotograficoTrabajoAlturas =
    document.getElementById("registro-fotografico-trabajo-alturas").value;
  impresionFormularioTrabajoAltura.seleccionTrabajadorAlturas =
    document.getElementById("selecion-trabajador-alturas").value;
  impresionFormularioTrabajoAltura.seleccionAutorizadorAlturas =
    document.getElementById("seleccion-autorizador-alturas").value;

  console.log(impresionFormularioTrabajoAltura);

  baseDatos
    .collection("formulaTrabajoAlturas")
    .add({
      impresionFormularioTrabajoAltura,
    })
    .then((docRef) => {
      alert("Datos Guardados correctamente");
    })
    .catch((error) => {
      alert("Error");
      console.error(error);
    });
});
