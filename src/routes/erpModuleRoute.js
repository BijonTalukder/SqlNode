import express from 'express'
import { erpModuleController } from '../controller/erpModuleController.js';

const erpModuleRoute = express.Router();

erpModuleRoute.post("/create",erpModuleController.createModule);
erpModuleRoute.get("/",erpModuleController.getAllModules);
erpModuleRoute.get("/module/:id",erpModuleController.getModuleById);
erpModuleRoute.patch("/update/:id",erpModuleController.updateModule);
erpModuleRoute.delete("/delete/:id",erpModuleController.deleteModule);

export default erpModuleRoute