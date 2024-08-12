import express from 'express';
import { sysAdminController } from '../controller/sysAdminController.js';

const sysAdminRouter = express.Router();

sysAdminRouter.post('/create', sysAdminController.createSysAdmin);
sysAdminRouter.get('/get', sysAdminController.getSysAdmin);

sysAdminRouter.patch("/patch/:id",sysAdminController.updateSysAdmin);

sysAdminRouter.delete("/del/:id",sysAdminController.deleteSysAdmin);


export default sysAdminRouter;
