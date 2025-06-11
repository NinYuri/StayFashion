// Variables barra de navegación
const navBar = document.querySelector('.nav-bar');

// Variables imágenes brands
const brandImages = document.querySelectorAll('.brands');
const imageVogue = document.querySelector('#vogue');
const imageInStyle = document.querySelector('#instyle');
const imageEmilia = document.querySelector('#emilia');
const imageNobu = document.querySelector('#nobu');
const imageGlam = document.querySelector('#glam');
const imageStyle = document.querySelector('#style');

// Variables botones 
const btnLogout = document.querySelector("#btn-logout");
const btnAbout = document.querySelector("#btn-team");
const btnOffers = document.querySelector("#btn-offers");
const btnServices = document.querySelector("#btn-services");

// Camuflaje de la barra de encabezado
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navBar.classList.remove('transparent');
    } else {
        navBar.classList.add('transparent');
    }
});

// Clic de brands
brandImages.forEach((image) => {
    image.addEventListener('click', () => {
        const testimonial = document.querySelector('#testimonial');

        if(image.id === "vogue") {
            const description = '<i>"Stay Fashion es la joya oculta de la elegancia y el refinamiento en el mundo de la belleza. Cada visita es una experiencia lujosa que realza mi confianza y mi estilo personal. No puedo resistirme a su encanto."</i>';
            imageVogue.src = image.getAttribute('data-image');
            restorePreviousImage(imageInStyle, imageEmilia, imageNobu, imageGlam, imageStyle);
            testimonial.querySelector("h3").innerHTML = description;
            testimonial.querySelector("p.testimonial-author").textContent = "Claudia Rodríguez, Editora Jefe de Belleza";
        } 
        else 
            if(image.id === "instyle") {
                const description = '<i>"Stay Fashion es mi santuario de belleza. La atención al detalle y la pasión por el arte de realzar la apariencia natural son incomparables. Una visita a este oasis siempre rejuvenece mi espíritu y mi imagen."</i>';
                imageInStyle.src = image.getAttribute('data-image');
                restorePreviousImage(imageVogue, imageEmilia, imageNobu, imageGlam, imageStyle);
                testimonial.querySelector("h3").innerHTML = description;
                testimonial.querySelector("p.testimonial-author").textContent = "Elena Martínez, Influencer de InStyle.";
            }
            else
                if(image.id === "emilia") {
                    const description = '<i>"Descubrir Stay Fashion fue un verdadero regalo para mi rutina de cuidado personal. La fusión de lujo y sofisticación en cada servicio me hace sentir como una estrella de la alfombra roja."</i>';
                    imageEmilia.src = image.getAttribute('data-image');
                    restorePreviousImage(imageVogue, imageInStyle, imageNobu, imageGlam, imageStyle);
                    testimonial.querySelector("h3").innerHTML = description;
                    testimonial.querySelector("p.testimonial-author").textContent = "Alejandro Gómez, Estilista de Celebridades";
                }
                else
                    if(image.id === "nobu") {
                        const description = '<i>"Stay Fashion es un viaje transformador hacia la elegancia, donde cada tratamiento es una obra maestra que eleva mi belleza y confianza de manera incomparable."</i>';
                        imageNobu.src = image.getAttribute('data-image');
                        restorePreviousImage(imageVogue, imageInStyle, imageEmilia, imageGlam, imageStyle);
                        testimonial.querySelector("h3").innerHTML = description;
                        testimonial.querySelector("p.testimonial-author").textContent = "María Fernández, Editora de Belleza";
                    }
                    else
                        if(image.id === "glam") {
                            const description = '<i>"Stay Fashion encarna la verdadera esencia de la sofisticación y el lujo en el cuidado personal. Cada visita es una experiencia que supera mis expectativas, dejándome renovada y más segura que nunca."</i>';
                            imageGlam.src = image.getAttribute('data-image');
                            restorePreviousImage(imageVogue, imageInStyle, imageEmilia, imageNobu, imageStyle);
                            testimonial.querySelector("h3").innerHTML = description;
                            testimonial.querySelector("p.testimonial-author").textContent = "Sofía Velázquez, Periodista de Belleza";
                        }
                        else
                            if(image.id === "style") {
                                const description = '<i>"Stay Fashion, un auténtico reflejo del arte de la belleza, eleva los estándares de la industria con elegancia y estilo, como si cada modelo saliera de mi lente aún más impresionante."</i>';
                                imageStyle.src = image.getAttribute('data-image');
                                restorePreviousImage(imageVogue, imageInStyle, imageEmilia, imageNobu, imageGlam);
                                testimonial.querySelector("h3").innerHTML = description;
                                testimonial.querySelector("p.testimonial-author").textContent = "David Sánchez, Fotógrafo de Moda.";
                            }
    });
});

// Regresar las imágenes brands previas
function restorePreviousImage(image1, image2, image3, image4, image5) {
    const prevImage1 = image1.getAttribute('data-original-src');
    const prevImage2 = image2.getAttribute('data-original-src');
    const prevImage3 = image3.getAttribute('data-original-src');
    const prevImage4 = image4.getAttribute('data-original-src');
    const prevImage5 = image5.getAttribute('data-original-src');
    image1.src = prevImage1;
    image2.src = prevImage2;
    image3.src = prevImage3;
    image4.src = prevImage4;
    image5.src = prevImage5;
}

// Click para cerrar sesión
btnLogout.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// Click de servicios
btnServices.addEventListener('click', () => {
    window.location.href = 'services.html';
});

// Click de about us
btnAbout.addEventListener('click', () => {
    window.location.href = 'aboutus.html';
});

// Click de ofertas y paquetes
btnOffers.addEventListener('click', () => {
    window.location.href = 'services.html';
})