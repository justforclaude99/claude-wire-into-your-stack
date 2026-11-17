const express = require('express');

const router = express.Router();

// GET /health — a simple liveness check.
router.get('/', (req, res) => {
  // Returns server status and uptime in seconds for monitoring
  res.json({ status: 'ok', uptime: process.uptime() });
});

module.exports = router;
