const supabase = require('../config/supabaseClient');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "No token provided. Access denied." });
    }

    // Supabase se token verify karna
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
        return res.status(403).json({ error: "Invalid or expired token." });
    }

    req.user = user;
    next();
};

module.exports = authMiddleware;
