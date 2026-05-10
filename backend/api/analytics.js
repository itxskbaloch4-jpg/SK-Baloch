const supabase = require('../config/supabaseClient');

const trackEvent = async (req, res) => {
    try {
        const { event_name, metadata } = req.body;

        const { data, error } = await supabase
            .from('analytics')
            .insert([{ 
                event_name, 
                metadata,
                created_at: new Date() 
            }]);

        if (error) throw error;
        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = trackEvent;
