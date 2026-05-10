// dashboard.js - Admin CRM Logic
const API_URL = 'http://localhost:5000/api';

async function fetchLeads() {
    try {
        const response = await fetch(`${API_URL}/leads`);
        const leads = await response.json();
        renderTable(leads);
        updateStats(leads);
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}

function renderTable(leads) {
    const tableBody = document.getElementById('leadsTableBody');
    tableBody.innerHTML = leads.map(lead => `
        <tr class="hover:bg-white/[0.02] transition">
            <td class="p-4">
                <div class="font-bold">${lead.name}</div>
                <div class="text-xs text-gray-500">${lead.email}</div>
            </td>
            <td class="p-4">
                <span class="px-2 py-1 rounded text-xs font-bold ${lead.lead_score > 70 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-orange-500/20 text-orange-400'}">
                    ${lead.lead_score}%
                </span>
            </td>
            <td class="p-4">
                <select onchange="updateStatus('${lead.id}', this.value)" class="bg-transparent border-none text-sm focus:ring-0 cursor-pointer">
                    <option value="new" ${lead.status === 'new' ? 'selected' : ''}>New</option>
                    <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                    <option value="closed" ${lead.status === 'closed' ? 'selected' : ''}>Closed</option>
                </select>
            </td>
            <td class="p-4 text-sm text-gray-400">
                ${new Date(lead.created_at).toLocaleDateString()}
            </td>
            <td class="p-4 text-right">
                <button onclick="deleteLead('${lead.id}')" class="text-red-500 hover:text-red-400 p-2">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </td>
        </tr>
    `).join('');
    
    // Refresh icons
    lucide.createIcons();
}

async function updateStatus(id, newStatus) {
    await fetch(`${API_URL}/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
    });
}

async function deleteLead(id) {
    if(confirm("Are you sure?")) {
        await fetch(`${API_URL}/leads/${id}`, { method: 'DELETE' });
        fetchLeads(); // Refresh table
    }
}

function updateStats(leads) {
    document.getElementById('totalLeads').innerText = leads.length;
    document.getElementById('highScoreLeads').innerText = leads.filter(l => l.lead_score > 80).length;
}

// Initialize
fetchLeads();
