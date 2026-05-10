const { createClient } = require('@supabase/supabase-js');

// Environment variables se data uthayen
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

// Agar keys missing hon toh console mein error dikhaye (sirf debugging ke liye)
if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase Configuration! Check Vercel Environment Variables.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
