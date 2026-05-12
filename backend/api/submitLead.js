const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and Email required'
      });
    }

    res.json({
      success: true,
      message: 'Lead submitted successfully',
      data: {
        name,
        email,
        phone,
        message
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
