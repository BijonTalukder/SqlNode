import express from 'express';
import erpUserRoute from './erpUserRoute.js';
import sysAdminRouter from './sysAdminRoute.js';

const router = express.Router();

router.use("/user",erpUserRoute);
router.use("/system-admin",sysAdminRouter);


export default router;
