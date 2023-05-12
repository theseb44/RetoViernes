import express from "express";
const router = express.Router();

import { getAllMedicine, getMedicine, createMedicine, updateMedicine, deleteMedicine } from "../controllers/Medicines";

router.route('/api/v1/Medicines').get(getAllMedicine)
router.route('/api/v1/Medicines').post(createMedicine)
router.route('/api/v1/Medicines/:id').put(updateMedicine)
router.route('/api/v1/Medicines/:id').delete(deleteMedicine)
router.route('/api/v1/Medicines/:id').get(getMedicine)
//http://localhost:3000/api/v1/Medicines
export default router
