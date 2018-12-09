const express = require('express');

const router = express.Router();
const itemAdapter = require('./items/adapter');

router.get('/', (req, res) => res.send('Limitless backend API'));
router.get('/items', (req, res) => itemAdapter.getItems(req, res));
router.post('/items', (req, res) => itemAdapter.postItem(req, res));

module.exports = router;
