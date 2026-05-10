// Analytics tracking function
async function trackUserAction(eventName, details = {}) {
    try {
        await fetch('http://localhost:5000/api/track-event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event_name: eventName, metadata: details })
        });
    } catch (e) { console.log("Analytics error"); }
}

// Track Portfolio View
document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectName = card.querySelector('h3').innerText;
        trackUserAction('portfolio_click', { project: projectName });
    });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        trackUserAction('menu_opened');
    });
}
