const { createClient } = require('@supabase/supabase-js');

// 1. Keys ko Environment Variables se fetch karein
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

// 2. Safety Check: Agar keys na milen toh error log karein
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ ERROR: Supabase Keys missing in Environment Variables!");
}

// 3. Supabase client initialize karein
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
