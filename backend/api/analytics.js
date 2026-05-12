const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      totalVisitors: 12540,
      totalLeads: 642,
      totalPages: 18
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
