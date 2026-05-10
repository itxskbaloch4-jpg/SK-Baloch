require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const supabase = require('./config/supabaseClient'); // Supabase client import karein

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// --- Content Management System (CMS) Routes ---

// Get all content
app.get('/api/content/:section', async (req, res) => {
    const { data, error } = await supabase.from('site_content').select('*').eq('section_name', req.params.section).single();
    if (error) return res.status(400).json(error);
    res.json(data.content_json);
});

// Update content
app.post('/api/admin/update-content', async (req, res) => {
    const { section, content } = req.body;
    const { data, error } = await supabase.from('site_content').upsert({ section_name: section, content_json: content }, { onConflict: 'section_name' });
    if (error) return res.status(400).json(error);
    res.json({ success: true });
});

// Manage Pages (Add/Remove)
app.post('/api/admin/pages', async (req, res) => {
    const { data, error } = await supabase.from('pages').upsert(req.body);
    if (error) return res.status(400).json(error);
    res.json({ success: true });
});

app.get('/api/pages/:slug', async (req, res) => {
    const { data, error } = await supabase.from('pages').select('*').eq('slug', req.params.slug).single();
    if (error) return res.status(400).json(error);
    res.json(data);
});

// --- Purane Routes ---
const submitLead = require('./api/submitLead');
const { getLeads, updateLead, deleteLead } = require('./api/leadscontrol');
app.post('/api/submit-lead', submitLead);
app.get('/api/leads', getLeads);
app.put('/api/leads/:id', updateLead);
app.delete('/api/leads/:id', deleteLead);

app.post('/api/admin-login', (req, res) => {
    if (req.body.password === process.env.ADMIN_PASSWORD) {
        res.json({ success: true, token: 'sk-admin-session-2026' });
    } else {
        res.status(401).json({ success: false });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 CMS Server running on port ${PORT}`));
