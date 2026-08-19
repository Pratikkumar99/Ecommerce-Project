import express from 'express';
import { placeOrder, getOrders, getOrderById, updateOrderStatus } from '../controllers/orderController.js';

const router = express.Router();

router.post('/place', placeOrder);
router.get('/user/:userId', getOrders);
router.get('/:id', getOrderById);
router.put('/:id/status', updateOrderStatus);

export default router;