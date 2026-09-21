// Menú para celulares
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');

if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
        const open = nav.classList.toggle('open');

        menuButton.setAttribute(
            'aria-expanded',
            String(open)
        );
    });

    nav.querySelectorAll('a').forEach((enlace) => {
        enlace.addEventListener('click', () => {
            nav.classList.remove('open');

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );
        });
    });
}


// Precio de una libra de café
const precioUnitario = 5;

const quantity = document.querySelector('#cantidad');
const total = document.querySelector('#total');


// Calcular el total
function updateTotal() {
    const cantidad = Math.max(
        1,
        Number(quantity.value) || 1
    );

    total.textContent =
        `$${cantidad * precioUnitario} USD`;
}

if (quantity && total) {
    quantity.addEventListener('input', updateTotal);

    updateTotal();
}


// Formulario de pedido
const coffeeForm = document.querySelector('#coffeeForm');

if (coffeeForm) {
    coffeeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!coffeeForm.reportValidity()) {
            return;
        }

        const nombre = document
            .querySelector('#nombre')
            .value
            .trim();

        const presentacion = document
            .querySelector('#presentacion')
            .value;

        const cantidad = Math.max(
            1,
            Number(quantity.value) || 1
        );

        const direccion = document
            .querySelector('#direccion')
            .value
            .trim();

        const pago = document
            .querySelector('#pago')
            .value;

        const totalPedido =
            cantidad * precioUnitario;

        const mensaje =
`☕ *PEDIDO DE CAFÉ DE OLMEDO*

👤 *Cliente:* ${nombre}
📦 *Presentación:* ${presentacion}
⚖️ *Cantidad:* ${cantidad} libra(s)
💵 *Precio por libra:* $${precioUnitario} USD
💰 *Total:* $${totalPedido} USD
📍 *Dirección:* ${direccion}
💳 *Forma de pago:* ${pago}

Deseo confirmar mi pedido. ¡Gracias!`;

        // WhatsApp: 0997212673
        const numeroWhatsApp = '593997212673';

        const enlaceWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        window.open(
            enlaceWhatsApp,
            '_blank',
            'noopener'
        );
    });
}


// Año actual
const year = document.querySelector('#year');

if (year) {
    year.textContent = new Date().getFullYear();
}


// Animaciones de la página
const elementosReveal =
    document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    elementosReveal.forEach((elemento) => {
        observer.observe(elemento);
    });
} else {
    elementosReveal.forEach((elemento) => {
        elemento.classList.add('visible');
    });
}


// Fotografías cambiantes de la portada
const heroImages =
    document.querySelectorAll('.hero-image');

let currentHeroImage = 0;

function changeHeroImage() {
    heroImages[currentHeroImage]
        .classList
        .remove('active');

    currentHeroImage =
        (currentHeroImage + 1) % heroImages.length;

    heroImages[currentHeroImage]
        .classList
        .add('active');
}

if (heroImages.length > 1) {
    setInterval(changeHeroImage, 4000);
}