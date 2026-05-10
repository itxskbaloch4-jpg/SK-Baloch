const { createClient } = require('@supabase/supabase-js');

// Sirf variables use karein, koi asli key yahan nahi honi chahiye
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Environment Variables missing!");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
