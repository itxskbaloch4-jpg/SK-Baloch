const supabase = require('../config/supabaseClient');

// GET all leads
const getLeads = async (req, res) => {
    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) return res.status(400).json(error);
    res.json(data);
};

// UPDATE status
const updateLead = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const { data, error } = await supabase
        .from('leads')
        .update({ status })
        .eq('id', id);
        
    res.json({ success: true });
};

// DELETE lead
const deleteLead = async (req, res) => {
    const { id } = req.params;
    await supabase.from('leads').delete().eq('id', id);
    res.json({ success: true });
};

module.exports = { getLeads, updateLead, deleteLead };
