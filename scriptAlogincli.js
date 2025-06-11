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
const telefono = document.getElementById("telefono");
const genero = document.getElementById("gender");
const edad = document.getElementById("edad");
const contra = document.getElementById("pass-regis");
const confContra = document.getElementById("confpass");

// Variables de almacenamiento de datos
var nombreCliente = "";
var passwordCliente = "";
var telefonoCliente = "";
var generoCliente = "";
var edadCliente = "";
const numRegistro = 1; // Corresponde a cliente o empleado en MongoDB

// Click para cerrar sesión
btnLogout.addEventListener('click', () => {
    window.location.href = 'login.html';
});

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
InputValidacion(telefono);
InputValidacion(genero);
InputValidacion(edad);
InputValidacion(contra);
InputValidacion(confContra);

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

// Validaciones
registerForm.addEventListener('submit', e=>{
    e.preventDefault();
    let numeros = /^[0-9]+$/;
    if(usuario.value.length === 0 || usuario.value.trim() === '')
        Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'Debes escribir un nombre de usuario');
    else   
    //Falta la validacion de existe
        if(usuario.value.length < 8 || usuario.value.length > 20)
            Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'Debes escribir un nombre de usuario mayor a 8 caracteres y menor a 20.');
        else
            if(telefono.value.length === 0)
                Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'Debes escribir un número de teléfono.');
            else
                if(!numeros.test(telefono.value))
                    Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'El número de teléfono debe contener sólo números.');
                else
                    if(telefono.value.length != 10)
                        Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'El número de teléfono no cumple con la longitud requerida.');
                    else
                        if(genero.value.length === 0)
                            Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'Debes escribir un género.');
                        else
                            if(genero.value !== 'Femenino' && genero.value !== 'Masculino')
                                Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'El género ' + genero.value + ' no es una opción válida. Escribe Femenino o Masculino.');
                            else
                                if(edad.value.length === 0)
                                    Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'Debes escribir una edad.');
                            else
                                if(!numeros.test(edad.value))
                                    Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'La edad debe contener sólo números.');
                                else
                                    if(edad.value < 10 || edad.value > 90)
                                        Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'La edad ingresada no es válida.');
                                    else
                                        if(contra.value.length === 0)
                                            Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'Debes escribir una contraseña.');
                                        else
                                            if(Password(contra.value))
                                                if(confContra.value.length === 0)
                                                    Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'Debes confirmar tu contraseña');
                                                else
                                                    if(contra.value != confContra.value)
                                                        Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'Las contraseñas no coinciden.');
                                                    else
                                                    {                                                        
                                                        //Datos para MongoDB y SQL

                                                        nombreCliente = usuario.value.trim();
                                                        passwordCliente = contra.value.trim();
                                                        telefonoCliente = telefono.value.trim();
                                                        generoCliente = genero.value.trim();
                                                        edadCliente = edad.value.trim();
                                                        
                                                        // Limpiar los campos
                                                        usuario.value = ''; 
                                                        // Si usuario.value = ''; borra el valor del campo de entrada, pero la clase valid todavía está presente, la animación CSS podría no funcionar.
                                                        usuario.classList.remove("valid"); // Elimina la clase valid de tenerla activa.
                                                        telefono.value = '';
                                                        telefono.classList.remove("valid");
                                                        genero.value = '';
                                                        genero.classList.remove("valid");
                                                        edad.value = '';
                                                        edad.classList.remove("valid");
                                                        contra.value = '';
                                                        contra.classList.remove("valid");                                                            
                                                        confContra.value = '';
                                                        confContra.classList.remove("valid");
                                                    }
});

function Password(contrasena){
    const Mayuscula = /[A-Z]/.test(contrasena);
    const Minuscula = /[a-z]/.test(contrasena);
    const Digito = /\d/.test(contrasena);
    const Caracter = /[@#$%&+/]/.test(contrasena);

    if(contrasena.length < 8 || contrasena.length > 20)
        Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'La contraseña debe tener una longitud de 8 a 20 caracteres.');
    else
        if(!Mayuscula)
            Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'La contraseña debe contener al menos una mayúscula.');
        else
            if(!Minuscula)
                Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'La contraseña debe contener letras minúsculas.');
            else
                if(!Digito)
                    Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'La contraseña debe contener por lo menos un número.');
                else
                    if(!Caracter)
                        Toast('error', 'Registro en el Sistema' + '\n' + '\n' + 'La contraseña debe contener por lo menos un caracter especial como @#$%&+/');
                    else
                        return true;
}

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