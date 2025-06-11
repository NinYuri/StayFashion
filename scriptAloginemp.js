// Variables de botones
const btnLogout = document.querySelector("#btn-logout");

// Variables de visibilidad de contraseña
const passwordFields = [
    { input: document.getElementById("pass-regis"), icon: document.querySelector("#icon-lock-register") },
    { input: document.getElementById("confpass"), icon: document.querySelector("#icon-lock-conf") }
];

// Variables de validación
const registerForm = document.getElementById("register-form");
const usuario = document.getElementById("user-regis");
const direccion = document.getElementById("address");
const telefono = document.getElementById("telefono");
const hora = document.getElementById("hour");
const sueldo = document.getElementById("payment");
const contra = document.getElementById("pass-regis");
const confContra = document.getElementById("confpass");

// Variables de almacenamiento de datos
var nombreEmpleado = "";
var passworEmpleado = "";
var direccionEmpleado = "";
var telefonoEmpleado = "";
var horarioEmpleado = "";
var sueldoEmpleado = "";
const numRegistro = 2; // Corresponde a cliente o empleado en MongoDB

// Validación de los input para animación
function InputValidacion(inputElement) {
    inputElement.addEventListener("input", () => {
        if (inputElement.value.trim() !== "") {
            inputElement.classList.add("valid");
        } else {
            inputElement.classList.remove("valid");
        }
    });
}

InputValidacion(usuario);
InputValidacion(direccion);
InputValidacion(telefono);
InputValidacion(hora);
InputValidacion(sueldo);
InputValidacion(contra);
InputValidacion(confContra);

// Click para cerrar sesión
btnLogout.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// Visibilidad de contraseñas
passwordFields.forEach(({ input, icon }) => {
    icon.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            icon.innerHTML = '<ion-icon name="lock-open"></ion-icon>';
        } else {
            input.type = "password";
            icon.innerHTML = '<ion-icon name="lock-closed"></ion-icon>';
        }
    });
});

// Mensaje alerta error
function Toast(icon, titulo) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    });
  
    Toast.fire({
      icon: icon,
      title: titulo
    });
  }