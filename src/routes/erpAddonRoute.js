import express from 'express'
import { erpAddonController } from '../controller/erpAddonController.js';

const erpAddonRoute = express.Router();

erpAddonRoute.post("/create",erpAddonController.createAddon);
erpAddonRoute.get("/",erpAddonController.getAllAddons);
erpAddonRoute.get("/module/:id",erpAddonController.getAddonById);
erpAddonRoute.patch("/update/:id",erpAddonController.updateAddon);
erpAddonRoute .delete("/delete/:id",erpAddonController.deleteAddon);

export default erpAddonRoute