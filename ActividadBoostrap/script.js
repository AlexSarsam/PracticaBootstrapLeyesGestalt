// Modo oscuro
document.getElementById('themeToggle').addEventListener('click', function () {
    const html = document.documentElement;
    if (html.getAttribute('data-bs-theme') === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
        this.textContent = '🌙 Modo Oscuro';
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        this.textContent = '☀️ Modo Claro';
    }
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

