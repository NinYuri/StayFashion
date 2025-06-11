// Variables botones
const btnLogout = document.querySelector("#btn-logout");

// Variables menú tab
const tabs = document.querySelectorAll('.tab_btn');
const allContent = document.querySelectorAll('.content');

// Variables de servicios bd
const serviciosDiv = document.getElementById("services-color");

// Click para cerrar sesión
btnLogout.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// Movimiento tabmenú
tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e)=> {
        tabs.forEach(tab => {tab.classList.remove('active')});
        tab.classList.add('active');

        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        allContent.forEach(content => {content.classList.remove('active')});
        allContent[index].classList.add('active');
    })
});

// Realizar la solicitud al backend para obtener los datos de los servicios
fetch('http://localhost:3000/api/getSservicio', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        tipo: 'Corte',
    }),
})
.then(response => response.json())
.then(data => {
    // Manipular los datos y mostrar en el div
    const servicios = data.servicios;
    servicios.forEach(servicio => {
        // Crear elementos HTML para mostrar cada servicio
        const servicioElement = document.createElement('div');
        servicioElement.innerHTML = `
            <h3>${servicio.nombreServicio}</h3>
            <p>Duración: ${servicio.duracionServicio}</p>
            <p>Costo: ${servicio.costoServicio}</p>
        `;
        serviciosDiv.appendChild(servicioElement);
    });
})
.catch(error => console.error('Error:', error));