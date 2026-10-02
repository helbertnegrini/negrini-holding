// SCROLL NO HEADER
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// MENU MOBILE
function toggleMenu() {
    document.querySelector('nav').classList.toggle('ativo');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('ativo');
    });
});

// REVEAL ON SCROLL (Anima as seções ao aparecerem na tela)
const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            observerReveal.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => {
    observerReveal.observe(el);
});

// EFEITO 3D TILT (Cards que inclinam ao passar o mouse)
document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});