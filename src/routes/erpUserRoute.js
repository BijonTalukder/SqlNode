import express from 'express';
import { erpUserController } from '../controller/erpUserController';

const erpUserRoute = express.Router();
router.post('/create', erpUserController.createErpUser);
router.get('/get', erpUserController.getErpUsers);
router.get("/getSingle/:id",erpUserController.getErpUserById);
router.patch("/update/:id",erpUserController.updateErpUser);
router.delete("/delete/:id",erpUserController.deleteErpUser);
export default erpUserRoute
