function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("name").value.trim();
    var dni = document.getElementById("dni").value.trim();
    var email = document.getElementById("email").value.trim();
    var fecha = document.getElementById("date").value;
    var hora = document.getElementById("time").value;
    var personas = document.getElementById("people").value;

    // Verificar si algún campo está en blanco
    if (nombre === "" || dni === "" || email === "" || fecha === "" || hora === "" || personas === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El nombre solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    // Verificar si el DNI contiene solo 8 dígitos numéricos
    if (dni.length !== 8 || isNaN(dni)) {
      alert("El DNI debe contener exactamente 8 dígitos numéricos.");
      return false;
    }

    // Obtengo la fecha actual / fecha minima
    var fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    // Obtengo la fecha maxima - Una semana despues
    var fechaMaxima = new Date(fechaActual.getTime() + 7 * 24 * 60 * 60 * 1000); // Le sumo 7 dias

    // Verificar si la fecha de reserva esta entre mañana y una semana despues
    var fechaReserva = new Date(fecha);
    if (fechaReserva < fechaActual || fechaReserva > fechaMaxima){
      alert("La fecha de reserva debe estar entre mañana y una semana después");
      return false;
    }

    // Verificar que la hora este entre 11 y 23hs
    var horaReserva = hora.substr(0, 2);
    if (horaReserva < 11 || (horaReserva > 22)){
      alert("La hora de reserva debe estar entre las 11 y 23hs");
      return false;
    }

    // Verificar la cantidad de personas (1 a 10)
    if (personas < 1 || personas > 10) {
      alert("La cantidad de personas debe estar entre 1 y 10");
      return false;
    }

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }