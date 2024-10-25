const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getUserOrders);

module.exports = router;
