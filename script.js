document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1 
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    console.log("Portfolio scripts loaded successfully!");
});