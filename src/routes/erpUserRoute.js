import express from 'express';
import { erpUserController } from '../controller/erpUserController.js';

const erpUserRoute = express.Router();
erpUserRoute.post('/create', erpUserController.createErpUser);
erpUserRoute.get('/get', erpUserController.getErpUsers);
erpUserRoute.get("/getSingle/:id",erpUserController.getErpUserById);
erpUserRoute.patch("/update/:id",erpUserController.updateErpUser);
erpUserRoute.delete("/delete/:id",erpUserController.deleteErpUser);
export default erpUserRoute
