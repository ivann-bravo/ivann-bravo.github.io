// NAVBAR RESPONSIVE
function navbarResponsiveChecked(clase, tamanoADesplazar) {
    const claseADesplazar = document.querySelector(clase);
    const checkbox = document.querySelector('#menu');
    
    if (checkbox.checked) {
        claseADesplazar.style.marginTop = tamanoADesplazar;
    } else {
        claseADesplazar.style.marginTop = '0';
    }
}

// VALIDACION FORMULARIO
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

// CONSUMO JSON LOCAL - Parte de API
const hamburguesasSection = document.getElementById('hamburguesas-section'); // Obtengo el elemento del HTML por ID, donde se van a insertar las secciones de hamburguesas

fetch('hamburguesas.json')
 .then(response => response.json())
 .then(datosJSON => {
    datosJSON.hamburguesas.forEach(hamburguesa => {
        const section = document.createElement('section');
        section.className = 'header-content top-section-bg-2 separator-section';
        section.id = hamburguesa.id;

        const divTxt = document.createElement('div');
        divTxt.className = 'top-section-txt';

        const h1 = document.createElement('h1');
        h1.textContent = hamburguesa.nombre;

        const p = document.createElement('p');
        p.textContent = hamburguesa.descripcion;

        const divBotones = document.createElement('div');
        divBotones.className = 'botones';

        const a = document.createElement('a');
        a.href = 'contacto.html';
        a.className = 'btn-1';
        a.textContent = 'Comer ';

        const imgIcon = document.createElement('img');
        imgIcon.className = 'icon';
        imgIcon.src = 'IMG/cubiertos.svg';
        imgIcon.alt = 'Cubiertos';

        const divImg = document.createElement('div');
        divImg.className = 'header-img';

        const imgHamburguesa = document.createElement('img');
        imgHamburguesa.className = 'hamburger-menu';
        imgHamburguesa.src = hamburguesa.foto;
        imgHamburguesa.alt = hamburguesa.nombre;

        const divSeparator = document.createElement('div');
        divSeparator.className = 'separator-section-bg separator-section';

        a.appendChild(imgIcon);
        divBotones.appendChild(a);
        divTxt.appendChild(h1);
        divTxt.appendChild(p);
        divTxt.appendChild(divBotones);

        divImg.appendChild(imgHamburguesa);

        section.appendChild(divTxt);
        section.appendChild(divImg);

        hamburguesasSection.appendChild(section);
        hamburguesasSection.appendChild(divSeparator);
    });
 })

.catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
});