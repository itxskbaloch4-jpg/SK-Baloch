const API_URL = 'http://localhost:5000/api'; // Change to Vercel URL after deployment

const leadForm = document.getElementById('leadForm');
const statusMsg = document.getElementById('formStatus');

leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.innerText = "Analyzing with AI...";
    btn.disabled = true;

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        business_type: document.getElementById('business_type').value,
        budget: document.getElementById('budget').value,
        message: document.getElementById('message').value,
        country: Intl.DateTimeFormat().resolvedOptions().timeZone // Basic geo detection
    };

    try {
        const response = await fetch(`${API_URL}/submit-lead`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            statusMsg.innerText = "Success! AI has prioritized your request.";
            statusMsg.className = "mt-4 text-center text-emerald-400";
            leadForm.reset();
        }
    } catch (err) {
        statusMsg.innerText = "Error connecting to server.";
        statusMsg.className = "mt-4 text-center text-red-400";
    } finally {
        btn.innerText = "Send Proposal Request";
        btn.disabled = false;
        statusMsg.classList.remove('hidden');
    }
});
