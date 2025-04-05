document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded successfully!');
});
