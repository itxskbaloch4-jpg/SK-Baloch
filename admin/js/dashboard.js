// Admin Logic for Leads & CMS
const API_URL = '/api';

// 1. Login Logic
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
            localStorage.setItem('admin_token', data.token);
            showDashboard();
        } else {
            errorMsg.classList.remove('hidden');
        }
    } catch (err) {
        alert("Server Error! Check Vercel Logs.");
    }
}

// 2. Dashboard View Control
function showDashboard() {
    const token = localStorage.getItem('admin_token');
    if (token) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('adminContent').style.display = 'block';
        fetchLeads();
        loadCurrentContent(); // CMS content load karne ke liye
    }
}

// 3. Logout
function logout() {
    localStorage.removeItem('admin_token');
    window.location.reload();
}

// --- SECTION 1: LEADS MANAGEMENT ---

async function fetchLeads() {
    try {
        const response = await fetch(`${API_URL}/leads`);
        const leads = await response.json();
        
        const tableBody = document.getElementById('leadsTableBody');
        tableBody.innerHTML = leads.map(lead => `
            <tr class="hover:bg-white/[0.02] border-b border-white/5">
                <td class="p-4 font-medium">${lead.name}<br><span class="text-xs text-gray-500">${lead.email}</span></td>
                <td class="p-4"><span class="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-xs">${lead.lead_score}%</span></td>
                <td class="p-4">
                    <select onchange="updateStatus('${lead.id}', this.value)" class="bg-[#111] text-white text-sm border border-white/10 rounded p-1 cursor-pointer">
                        <option value="new" ${lead.status === 'new' ? 'selected' : ''}>New</option>
                        <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                        <option value="closed" ${lead.status === 'closed' ? 'selected' : ''}>Closed</option>
                    </select>
                </td>
                <td class="p-4 text-xs text-gray-500">${new Date(lead.created_at).toLocaleDateString()}</td>
                <td class="p-4 text-right">
                    <button onclick="deleteLead('${lead.id}')" class="text-red-500 hover:text-red-400 text-sm">Delete</button>
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
    if(confirm("Kiya aap waqai yeh lead delete karna chahte hain?")) {
        await fetch(`${API_URL}/leads/${id}`, { method: 'DELETE' });
        fetchLeads();
    }
}

// --- SECTION 2: CMS & CONTENT CONTROL ---

// Database se mojooda text aur image URLs uthana
async function loadCurrentContent() {
    try {
        const response = await fetch(`${API_URL}/content/hero`);
        if (response.ok) {
            const content = await response.json();
            // Dashboard ke form fields mein data bharna
            if(document.getElementById('edit-title')) document.getElementById('edit-title').value = content.title || '';
            if(document.getElementById('edit-desc')) document.getElementById('edit-desc').value = content.description || '';
            if(document.getElementById('edit-img')) document.getElementById('edit-img').value = content.imageUrl || '';
        }
    } catch (err) {
        console.log("CMS load error");
    }
}

// Website ka content update karna
async function updateWebsiteContent() {
    const saveBtn = document.getElementById('saveContentBtn');
    saveBtn.innerText = "Saving...";
    
    const contentData = {
        section: 'hero',
        content: {
            title: document.getElementById('edit-title').value,
            description: document.getElementById('edit-desc').value,
            imageUrl: document.getElementById('edit-img').value
        }
    };

    try {
        const response = await fetch(`${API_URL}/admin/update-content`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contentData)
        });

        if (response.ok) {
            alert("Website Content Successfully Updated!");
        } else {
            alert("Update fail ho gaya.");
        }
    } catch (err) {
        alert("Server Error while updating content.");
    } finally {
        saveBtn.innerText = "Save Changes";
    }
}

// Naya Page Add Karna
async function createNewPage() {
    const pageData = {
        slug: document.getElementById('page-slug').value, // e.g. 'about-us'
        title: document.getElementById('page-title').value,
        html_content: document.getElementById('page-html').value, // Full HTML code
        is_active: true
    };

    const response = await fetch(`${API_URL}/admin/pages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pageData)
    });

    if(response.ok) alert("Naya Page Publish ho gaya!");
}

window.onload = showDashboard;
