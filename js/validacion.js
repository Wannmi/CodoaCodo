const nombre = document.getElementById("name");
const apellido = document.getElementById("surname");
const correo = document.getElementById("mail");
const telefono = document.getElementById("phone");
const mensaje = document.getElementById("message");
const form = document.getElementById("form");
const advertencia = document.getElementById("warning");


form.addEventListener("submit", e => {
    e.preventDefault()
    let warning = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexTelefono = /^\d+$/;
    let entrar = false
    advertencia.innerHTML =""
    if (nombre.value.length < 3) {
        warning += 'El nombre no es válido - Ingrese más de 3 letras <br>'
        entrar = true;
    }
     if (apellido.value.length < 3) {
         warning += 'El apellido no es válido - Ingrese más de 3 letras <br>'
         entrar = true;
     }
     if (!regexEmail.test(correo.value)) {
         warning += 'El correo electrónico no es válido <br>'
         entrar = true;
     }
      if (!regexTelefono.test(telefono.value)) {
         warning += 'El teléfono no es válido - Ingrese sólo numeros <br>'
         entrar = true;
      }
              
        if (entrar) {
            advertencia.innerHTML = warning;
        }

        else {
            advertencia.innerHTML = "Enviado";
        }

    })