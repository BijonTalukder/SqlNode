import express from 'express';
import erpUserRoute from './erpUserRoute';
import sysAdminRouter from './sysAdminRoute';

const router = express.Router();

router.use("/user",erpUserRoute);
router.use("/system-admin",sysAdminRouter);


export default router;
