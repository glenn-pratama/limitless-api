const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send('Limitless backend API'));
router.get('/items', (req, res) => res.send('yolo'));

module.exports = router;
