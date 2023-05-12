import express from "express";
const router = express.Router();

import {getAllUsers,createUser,getUser,updateUser,deleteUser} from "../controllers/User";

router.route('/api/v1/User').get(getAllUsers)
router.route('/api/v1/User').post(createUser)
router.route('/api/v1/User/:id').put(updateUser)
router.route('/api/v1/User/:id').delete(deleteUser)
router.route('/api/v1/User/:id').get(getUser)

export default router
