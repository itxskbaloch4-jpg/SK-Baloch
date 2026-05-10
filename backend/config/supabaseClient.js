const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;https://plbqvslzghamavkxbqmu.supabase.co

const supabaseKey = process.env.SUPABASE_SERVICE_KEY;sb_publishable_4jrYYaRizlEbOXNz8uRDDA_Y1XNEgi7


if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Supabase URL or Key missing in .env file");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
