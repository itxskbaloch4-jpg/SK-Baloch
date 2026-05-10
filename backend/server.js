require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const submitLead = require('./api/submitLead');
const { getLeads, updateLead, deleteLead } = require('./api/leadsControl');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/submit-lead', submitLead);
app.get('/api/leads', getLeads);
app.put('/api/leads/:id', updateLead);
app.delete('/api/leads/:id', deleteLead);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
