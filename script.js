document.addEventListener('DOMContentLoaded', () => {
    const btnMobile = document.getElementById('btn-mobile');
    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }
    if (btnMobile) {
        btnMobile.addEventListener('click', toggleMenu);
        btnMobile.addEventListener('touchstart', toggleMenu);
    }
    const header = document.getElementById('header');
    if(header) {
        const navHeight = header.offsetHeight;
        function changeHeaderWhenScroll() {
            if (window.scrollY >= navHeight) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', changeHeaderWhenScroll);
    }
    const faders = document.querySelectorAll('.fade-in');
    if (faders.length > 0) {
        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        const appearOnScroll = new IntersectionObserver(function(
            entries,
            appearOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        },
        appearOptions);
        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }
});