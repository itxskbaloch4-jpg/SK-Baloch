const API_BASE = 'http://localhost:5000/api';

async function submitLead(data) {
  const response = await fetch(`${API_BASE}/submit-lead`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

window.submitLead = submitLead;
