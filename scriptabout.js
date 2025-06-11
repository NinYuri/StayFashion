// Variables botones 
const btnLogout = document.querySelector("#btn-logout");

// Click para cerrar sesión
btnLogout.addEventListener('click', () => {
    window.location.href = 'login.html';
});