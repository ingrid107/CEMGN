document.addEventListener('DOMContentLoaded', () => {
    const offeringCards = document.querySelectorAll('.offering-card');
    const detailSections = document.querySelectorAll('.detail-section');
    const backButtons = document.querySelectorAll('.back-button');
    const mainContent = document.querySelector('.main-content');
    const offeringsGrid = document.querySelector('.offerings-grid');

    offeringCards.forEach(card => { 
        card.addEventListener('click', (event) => {
            // Prevenir que el click en el botón se propague al card
            if (event.target.classList.contains('info-button')) {
                return;
            }

            const targetId = card.dataset.target + '-info';
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Ocultar la cuadrícula de ofertas con transición
                offeringsGrid.style.opacity = '0';
                offeringsGrid.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    offeringsGrid.style.display = 'none';

                    // Mostrar la sección de detalle con transición
                    detailSections.forEach(section => {
                        if (section.id === targetId) {
                            section.classList.add('active'); // Activa la transición CSS
                        } else {
                            section.classList.remove('active'); // Asegura que las otras estén ocultas
                        }
                    });
                }, 500); // Esperar que la transición de ocultar termine
            }
        });
    });

    // Event listener para el botón "Más Información" dentro de cada tarjeta
    offeringCards.forEach(card => {
        const infoButton = card.querySelector('.info-button');
        infoButton.addEventListener('click', () => {
            const targetId = card.dataset.target + '-info';
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Ocultar la cuadrícula de ofertas con transición
                offeringsGrid.style.opacity = '0';
                offeringsGrid.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    offeringsGrid.style.display = 'none';

                    // Mostrar la sección de detalle con transición
                    detailSections.forEach(section => {
                        if (section.id === targetId) {
                            section.classList.add('active'); // Activa la transición CSS
                        } else {
                            section.classList.remove('active'); // Asegura que las otras estén ocultas
                        }
                    });
                }, 500); // Esperar que la transición de ocultar termine
            }
        });
    });


    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentSection = button.closest('.detail-section');
            currentSection.classList.remove('active'); // Desactiva la sección actual

            // Ocultar la sección de detalle con transición
            currentSection.style.opacity = '0';
            currentSection.style.transform = 'translateY(20px)';

            setTimeout(() => {
                currentSection.style.display = 'none';
                // Mostrar la cuadrícula de ofertas con transición
                offeringsGrid.style.display = 'grid'; // Vuelve a mostrarla como grid
                setTimeout(() => {
                    offeringsGrid.style.opacity = '1';
                    offeringsGrid.style.transform = 'translateY(0)';
                }, 50); // Pequeño retraso para que la transición de display: block tenga efecto
            }, 500); // Esperar que la transición de ocultar termine
        });
    });
});