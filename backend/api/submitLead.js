const supabase = require('../config/supabaseClient');
const { analyzeLead } = require('../services/aiService');
const { sendClientWelcome } = require('../services/emailService');

module.exports = async (req, res) => {
    try {
        const { name, email, message, business_type, budget, country } = req.body;

        // 1. AI Analysis
        const aiAnalysis = await analyzeLead(req.body);

        // 2. Save to Supabase
        const { data, error } = await supabase.from('leads').insert([{
            name, email, message, business_type, budget, country,
            lead_score: aiAnalysis.score,
            ai_summary: aiAnalysis.summary
        }]);

        // 3. Trigger Email
        await sendClientWelcome(email, name);

        res.status(200).json({ success: true, score: aiAnalysis.score });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
