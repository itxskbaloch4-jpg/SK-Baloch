require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const submitLead = require('./api/submitLead');
const { getLeads, updateLead, deleteLead } = require('./api/leadsControl');
const trackEvent = require('./api/analytics');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// --- Admin Login Route ---
app.post('/api/admin-login', (req, res) => {
    const { password } = req.body;
    // Vercel ke env mein jo ADMIN_PASSWORD rakha hai us se match karega
    if (password === process.env.ADMIN_PASSWORD) {
        res.json({ success: true, token: 'sk-admin-session-2026' });
    } else {
        res.status(401).json({ success: false, message: 'Ghalat Password!' });
    }
});

// --- Leads Routes ---
app.post('/api/submit-lead', submitLead);
app.get('/api/leads', getLeads);
app.put('/api/leads/:id', updateLead);
app.delete('/api/leads/:id', deleteLead);
app.post('/api/track-event', trackEvent);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
