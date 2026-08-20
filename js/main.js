// =========================================
// JavaScript Principal
// =========================================

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =========================================
// Formulario de contacto - FormSubmit (gratis)
// =========================================
// El formulario envía a https://formsubmit.co/ajax/miriambrito139@hotmail.com
// IMPORTANTE: la primera vez, la dueña del correo debe confirmar la dirección
// con el mail de activación que le llega (1 clic). Después, cada consulta
// llega directamente al buzón miriambrito139@hotmail.com.

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const formSubmitBtn = document.getElementById('formSubmitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Deshabilitar el botón mientras se envía
        if (formSubmitBtn) {
            formSubmitBtn.disabled = true;
            formSubmitBtn.textContent = 'Enviando...';
        }
        if (formStatus) {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }

        try {
            // Armar el objeto con los datos del formulario
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => { data[key] = value; });

            // Envío AJAX al endpoint de FormSubmit
            const response = await fetch('https://formsubmit.co/ajax/miriambrito139@hotmail.com', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('FormSubmit respondió con estado ' + response.status);
            }

            if (formStatus) {
                formStatus.innerHTML = '✅ ¡Gracias! Tu consulta fue enviada correctamente. Te contactaremos pronto.';
                formStatus.className = 'form-status form-status--success';
            }
            contactForm.reset();
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            if (formStatus) {
                formStatus.textContent = 'Hubo un problema al enviar tu consulta. Intentá de nuevo o escribinos por WhatsApp.';
                formStatus.className = 'form-status form-status--error';
            }
        } finally {
            if (formSubmitBtn) {
                formSubmitBtn.disabled = false;
                formSubmitBtn.textContent = 'Enviar Consulta';
            }
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            if (entry.target.classList.contains('courses-split')) {
                entry.target.classList.add('visible');
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate service cards
    const cards = document.querySelectorAll('.service-card, .course-card, .step, .testimonial-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) scale(0.95)';
        card.style.transition = `opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.04}s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.04}s`;
        observer.observe(card);
    });

    // Animate Courses split (menú lateral + panel)
    const coursesSplit = document.querySelector('.courses-split');
    if (coursesSplit) {
        coursesSplit.style.opacity = '0';
        coursesSplit.style.transform = 'translateY(40px)';
        coursesSplit.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(coursesSplit);
    }

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section-header, .contact-content');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`;
        observer.observe(section);
    });

    // Special animation for About section - image from left, text from right
    const aboutImage = document.querySelector('.about-image');
    const aboutText = document.querySelector('.about-text');
    
    if (aboutImage) {
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'translateX(-60px)';
        aboutImage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        observer.observe(aboutImage);
    }
    
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(60px)';
        aboutText.style.transition = 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s';
        observer.observe(aboutText);
    }

    // Trigger initial animations after a short delay
    setTimeout(() => {
        const allElements = document.querySelectorAll('.service-card, .course-card, .step, .section-header, .about-content, .contact-content');
        allElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, 100);
});


// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// =========================================
// Modales (Popups) - Reemplaza Acordeones
// =========================================
const modalOverlay = document.getElementById('modalOverlay');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContentInner');
const modalActions = document.getElementById('modalActions');
const modalClose = document.getElementById('modalClose');

// Configuración de contacto
const CONTACT_WHATSAPP = '5491150577793';
const CONTACT_EMAIL = 'miriamelisabetbrito@gmail.com';

/**
 * Genera los botones de acción (WhatsApp y Gmail) para el modal.
 * @param {string} title - Título del servicio/curso
 * @returns {string} HTML de los botones
 */
function generateModalActions(title) {
    const encodedTitle = encodeURIComponent(title);
    const whatsappMsg = encodeURIComponent(`Hola Miriam, me interesa consultar sobre: ${title}`);
    const gmailSubject = encodeURIComponent(`Consulta sobre: ${title}`);
    const gmailBody = encodeURIComponent(`Hola Miriam,\n\nMe gustaría recibir más información sobre: ${title}.\n\nQuedo a la espera de tu respuesta.\n\nSaludos`);

    return `
        <a class="modal-action-btn whatsapp"
           href="https://wa.me/${CONTACT_WHATSAPP}?text=${whatsappMsg}"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Consultar por WhatsApp sobre ${title}">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Consultar</span>
        </a>
        <a class="modal-action-btn gmail"
           href="mailto:${CONTACT_EMAIL}?subject=${gmailSubject}&body=${gmailBody}"
           aria-label="Consultar por email sobre ${title}">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>Consultar</span>
        </a>
    `;
}

/**
 * Abre el modal con la información de la card clickeada.
 * @param {HTMLElement} button - El botón .accordion-header que fue clickeado.
 */
function openModal(button) {
    const card = button.closest('.service-card, .course-card');
    if (!card) return;

    // Título
    const titleEl = card.querySelector('h3');
    const title = titleEl ? titleEl.textContent : '';

    // Imagen: para cursos usa el img dentro de .course-image; para servicios usa data-practice-img
    let imageSrc = '';
    const courseImg = card.querySelector('.course-image img');
    if (courseImg) {
        imageSrc = courseImg.src;
    } else if (card.dataset.practiceImg) {
        imageSrc = card.dataset.practiceImg;
    }

    // Contenido del acordeón (hidden en el HTML, se clona al modal)
    const contentInner = button.closest('.accordion').querySelector('.accordion-content-inner');
    const content = contentInner ? contentInner.innerHTML : '';

    // Populate modal
    if (modalTitle) modalTitle.textContent = title;
    if (modalImage) {
        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalImage.style.display = imageSrc ? 'block' : 'none';
    }
    if (modalContent) modalContent.innerHTML = content;
    if (modalActions) modalActions.innerHTML = generateModalActions(title);

    // Resetear el scroll para que siempre abra desde arriba
    const modalBody = document.querySelector('.modal-body-wrapper');
    if (modalBody) modalBody.scrollTop = 0;
    const contentText = document.querySelector('.modal-content-text');
    if (contentText) contentText.scrollTop = 0;

    // Show
    if (modalOverlay) {
        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cierra el modal.
 */
function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

// --- Eventos de apertura (botones "Conocé más" / "Ver programa") ---
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal(header);
    });
});

// =========================================
// Cursos: menú lateral + desplegable móvil (Opción 7)
// =========================================
function initCoursesSplit() {
    const split = document.querySelector('.courses-split');
    if (!split) return;

    const activate = (i) => {
        split.querySelectorAll('.s-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.i == i));
        split.querySelectorAll('.split-panel').forEach(panel => panel.classList.toggle('active', panel.dataset.p == i));
    };

    // Escritorio: clic en el menú lateral
    split.querySelectorAll('.s-btn').forEach(btn => {
        btn.addEventListener('click', () => activate(btn.dataset.i));
    });

    // Móvil: clic en el encabezado (acordeón)
    split.querySelectorAll('.sp-head').forEach(head => {
        head.addEventListener('click', () => {
            const panel = head.closest('.split-panel');
            const i = panel.dataset.p;
            if (panel.classList.contains('active')) {
                panel.classList.remove('active');
                split.querySelectorAll('.s-btn[data-i="' + i + '"]').forEach(b => b.classList.remove('active'));
            } else {
                activate(i);
            }
        });
    });
}
initCoursesSplit();

// En móvil los cursos arrancan cerrados; en escritorio el primero activo
function initCoursesMobileClosed() {
    const split = document.querySelector('.courses-split');
    if (!split) return;

    const mq = window.matchMedia('(max-width: 1024px)');
    const apply = () => {
        if (mq.matches) {
            split.querySelectorAll('.split-panel').forEach(p => p.classList.remove('active'));
            split.querySelectorAll('.s-btn').forEach(b => b.classList.remove('active'));
        } else if (!split.querySelector('.split-panel.active')) {
            const panel = split.querySelector('.split-panel[data-p="0"]');
            const btn = split.querySelector('.s-btn[data-i="0"]');
            if (panel) panel.classList.add('active');
            if (btn) btn.classList.add('active');
        }
    };

    apply();
    if (mq.addEventListener) {
        mq.addEventListener('change', apply);
    } else if (mq.addListener) {
        mq.addListener(apply);
    }
}
initCoursesMobileClosed();


// --- Cerrar con botón X ---
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// --- Cerrar al hacer click fuera del modal (overlay) ---
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// --- Cerrar con tecla Escape ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// =========================================
// Trabajos Realizados: carrusel coverflow infinito
// =========================================
function initCoverflow() {
    const wrap = document.getElementById('cfCarousel');
    if (!wrap) return;

    const track = wrap.querySelector('.cf-track');
    const slides = [...wrap.querySelectorAll('.cf-slide')];
    if (!slides.length) return;

    const n = slides.length;
    const CLONE = 3; // clones por lado: permiten el loop infinito invisible

    // Clones que imitan los extremos para la transición circular
    const leftClones = slides.slice(-CLONE).map(s => s.cloneNode(true));
    const rightClones = slides.slice(0, CLONE).map(s => s.cloneNode(true));
    track.prepend(...leftClones);
    track.append(...rightClones);

    const all = [...leftClones, ...slides, ...rightClones];
    let pos = CLONE;   // posición actual dentro del track
    let idx = 0;       // índice real (0..n-1)
    let snapTimer = null;

    const update = (animate) => {
        const slideW = slides[0].offsetWidth;
        const trackW = track.offsetWidth;
        const target = (slideW * pos) + slideW / 2 - trackW / 2;
        if (animate === false) track.style.transition = 'none';
        track.style.transform = 'translateX(' + (-target) + 'px)';
        if (animate === false) {
            void track.offsetWidth; // fuerza reflow
            track.style.transition = '';
        }
        // Difuminado agresivo: solo la activa y una vecina apenas visible
        all.forEach((s, k) => {
            const dist = Math.abs(k - pos);
            if (dist === 0) {
                s.style.opacity = '1';
                s.style.transform = 'scale(1)';
                s.style.pointerEvents = 'auto';
            } else if (dist === 1) {
                s.style.opacity = '0.55';
                s.style.transform = 'scale(0.92)';
                s.style.pointerEvents = 'auto';
            } else {
                s.style.opacity = '0';
                s.style.transform = 'scale(0.85)';
                s.style.pointerEvents = 'none';
            }
        });
    };

    // Si la navegación quedó en un clon, salta al slide real equivalente (idéntico visualmente)
    const snap = () => {
        if (pos < CLONE) {
            const j = pos;
            pos = CLONE + (n - CLONE + j);
        } else if (pos >= CLONE + n) {
            const j = pos - (CLONE + n);
            pos = CLONE + j;
        }
        idx = pos - CLONE;
        update(false);
    };

    const navigate = (dir) => {
        clearTimeout(snapTimer);
        pos += dir;
        idx = (idx + dir + n) % n;
        update();
        snapTimer = setTimeout(snap, 400);
    };

    const prev = wrap.querySelector('.cf-prev');
    const next = wrap.querySelector('.cf-next');
    if (prev) prev.addEventListener('click', () => navigate(-1));
    if (next) next.addEventListener('click', () => navigate(1));

    // Clic en una tarjeta: ir a esa tarjeta por el camino más corto
    all.forEach(s => {
        s.addEventListener('click', () => {
            const targetIdx = +s.dataset.i;
            if (targetIdx === idx) return;
            const delta = (targetIdx - idx + n) % n;
            const dir = delta <= n - delta ? delta : delta - n;
            clearTimeout(snapTimer);
            pos += dir;
            idx = targetIdx;
            update();
            snapTimer = setTimeout(snap, 400);
        });
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        clearTimeout(snapTimer);
        resizeTimer = setTimeout(() => update(false), 150);
    });

    update(false);
}
initCoverflow();

console.log('✨ Landing page cargada correctamente');