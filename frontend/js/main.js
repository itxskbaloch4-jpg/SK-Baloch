// Function to load dynamic content
async function loadDynamicContent() {
    try {
        // Hero Section fetch karein
        const response = await fetch('/api/content/hero');
        const content = await response.json();

        // UI update karein
        if(document.getElementById('hero-title')) {
            document.getElementById('hero-title').innerText = content.title;
            document.getElementById('hero-desc').innerText = content.description;
            document.getElementById('hero-img').src = content.imageUrl;
        }
    } catch (e) { console.log("CMS load error"); }
}

// Function to load dynamic pages
async function checkDynamicPage() {
    const path = window.location.pathname.replace('/', '');
    if(path && path !== 'index.html' && path !== 'admin') {
        const res = await fetch(`/api/pages/${path}`);
        if(res.ok) {
            const page = await res.json();
            document.body.innerHTML = page.html_content; // Pura page backend se load hoga
            document.title = page.title;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadDynamicContent();
    checkDynamicPage();
});
