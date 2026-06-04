document.addEventListener('DOMContentLoaded', () => {

    // 1. Control Preloader & Afișare WhatsApp Widget
    const preloader = document.getElementById('preloader');
    const whatsappWidget = document.getElementById('whatsapp-widget');

    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    
                    // Afișează butonul WhatsApp imediat după dispariția preloaderului
                    if (whatsappWidget) {
                        whatsappWidget.classList.add('is-visible');
                    }
                }, 500);
            }
        }, 400); // Mici întârzieri pentru fluiditate vizuală
    });

    // 2. Efect pentru Bara de Navigație Fixă (Box Shadow la Scroll)
    const mainNav = document.getElementById('main-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });

    // 3. Animații Native Fluide cu Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Rulăm efectul o singură dată
            }
        });
    }, {
        threshold: 0.05, // Se declanșează când 5% din element este vizibil
        rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Sistem Simplu și Rapid de Schimbare a Limbii (RO/EN)
    const bodyElement = document.body;
    const btnEn = document.getElementById('btn-en');
    const btnRo = document.getElementById('btn-ro');

    if (btnEn && btnRo) {
        btnEn.addEventListener('click', () => {
            bodyElement.className = 'lang-en';
            btnEn.classList.add('active');
            btnRo.classList.remove('active');
        });

        btnRo.addEventListener('click', () => {
            bodyElement.className = 'lang-ro';
            btnEn.classList.remove('active');
            btnRo.classList.add('active');
        });
    }
});
