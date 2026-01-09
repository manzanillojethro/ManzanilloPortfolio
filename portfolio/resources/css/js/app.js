// app.js

document.addEventListener('DOMContentLoaded', () => {
    /*** FADE-IN BODY ***/
    // Make sure your CSS has:
    // body { opacity: 0; transition: opacity 1s ease-in-out; }
    document.body.style.opacity = 1;

    /*** MOBILE MENU TOGGLE WITH SMOOTH SLIDE ***/
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        if (menu.classList.contains('max-h-0')) {
            menu.classList.remove('max-h-0');
            menu.classList.add('max-h-96'); // adjust max-h to fit your menu
        } else {
            menu.classList.add('max-h-0');
            menu.classList.remove('max-h-96');
        }
    });

    /*** SMOOTH SCROLL FOR NAV LINKS ***/
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // navbar offset
                    behavior: 'smooth'
                });
            }

            // Close mobile menu after click
            if (!menu.classList.contains('max-h-0')) {
                menu.classList.add('max-h-0');
                menu.classList.remove('max-h-96');
            }
        });
    });

    /*** ACTIVE LINK HIGHLIGHT ON SCROLL WITH TRANSITION ***/
    const updateActiveNav = () => {
        let scrollY = window.scrollY + 100; // adjust for navbar height
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('text-[#DFA381]'));
                const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink) activeLink.classList.add('text-[#DFA381]');
            }
        });
    };

    // Add color transition for smooth highlighting
    navLinks.forEach(link => {
        link.style.transition = 'color 0.3s ease-in-out';
    });

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
});
