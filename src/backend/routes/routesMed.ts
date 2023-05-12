import express from "express";
const router = express.Router();

import { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder } from "../controllers/MedicalOrder";

router.route('/api/v1/MedicalOrder').get(getAllOrders)
router.route('/api/v1/MedicalOrder').post(createOrder)
router.route('/api/v1/MedicalOrder/:id').put(updateOrder)
router.route('/api/v1/MedicalOrder/:id').delete(deleteOrder)
router.route('/api/v1/MedicalOrder/:id').get(getOrder)

export default router

