require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const analyticsRoute = require('./api/analytics');
const submitLeadRoute = require('./api/submitLead');
const leadsControlRoute = require('./api/leadsControl');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'SK Baloch Backend Running'
  });
});

app.use('/api/analytics', analyticsRoute);
app.use('/api/submit-lead', submitLeadRoute);
app.use('/api/leads-control', leadsControlRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
