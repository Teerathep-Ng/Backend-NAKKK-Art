import express from 'express';
import { placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js'
import adminAuth from "../middleware/adminAuth.js"


const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Features
orderRouter.post('/stripe', authUser, placeOrderStripe);

// User Feature
orderRouter.post('/userorder', authUser, userOrders);

// Verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);

export default orderRouter;