import express from 'express';
// import { createUser, getUser } from '../controller/userController.js'; // Ensure correct path and extension
import UserModel from '../model/userModel.js'; // Ensure correct path and extension
import { userController } from '../controller/userController.js';

const router = express.Router();

router.post('/add', userController.createUser);
router.get('/get', userController.getUsers);
router.get("/getone/:id",userController.getUserById);
router.patch("/patch/:id",userController.updateUser);
router.delete("/del/:id",userController.deleteUser);


export default router;
