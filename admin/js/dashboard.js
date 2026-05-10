// Admin Security & Data Logic
const API_URL = '/api'; // Vercel deployment ke liye relative path use karen

// 1. Check Login Function
async function checkLogin() {
    const pass = document.getElementById('adminPass').value;
    const errorMsg = document.getElementById('loginError');

    try {
        const response = await fetch(`${API_URL}/admin-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: pass })
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('admin_token', data.token); // Session save kar liya
            showDashboard();
        } else {
            errorMsg.classList.remove('hidden');
        }
    } catch (err) {
        alert("Server Error!");
    }
}

// 2. Show Dashboard if token exists
function showDashboard() {
    const token = localStorage.getItem('admin_token');
    if (token) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminContent').style.display = 'block';
        fetchLeads();
    }
}

// 3. Logout
function logout() {
    localStorage.removeItem('admin_token');
    window.location.reload();
}

// 4. Fetch Leads from Database
async function fetchLeads() {
    try {
        const response = await fetch(`${API_URL}/leads`);
        const leads = await response.json();
        
        const tableBody = document.getElementById('leadsTableBody');
        tableBody.innerHTML = leads.map(lead => `
            <tr class="hover:bg-white/[0.02]">
                <td class="p-4 font-medium">${lead.name}<br><span class="text-xs text-gray-500">${lead.email}</span></td>
                <td class="p-4"><span class="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs">${lead.lead_score}%</span></td>
                <td class="p-4">
                    <select onchange="updateStatus('${lead.id}', this.value)" class="bg-transparent text-sm border-none outline-none cursor-pointer">
                        <option value="new" ${lead.status === 'new' ? 'selected' : ''}>New</option>
                        <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                        <option value="closed" ${lead.status === 'closed' ? 'selected' : ''}>Closed</option>
                    </select>
                </td>
                <td class="p-4 text-xs text-gray-500">${new Date(lead.created_at).toLocaleDateString()}</td>
                <td class="p-4 text-right">
                    <button onclick="deleteLead('${lead.id}')" class="text-red-500 hover:text-red-400">Delete</button>
                </td>
            </tr>
        `).join('');

        document.getElementById('totalLeads').innerText = leads.length;
        document.getElementById('highScoreLeads').innerText = leads.filter(l => l.lead_score > 80).length;
        document.getElementById('activeLeads').innerText = leads.filter(l => l.status !== 'closed').length;

    } catch (err) {
        console.log("Error loading leads");
    }
}

async function updateStatus(id, status) {
    await fetch(`${API_URL}/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
    });
}

async function deleteLead(id) {
    if(confirm("Lead delete karni hai?")) {
        await fetch(`${API_URL}/leads/${id}`, { method: 'DELETE' });
        fetchLeads();
    }
}

// Check if user is already logged in on page load
window.onload = showDashboard;
