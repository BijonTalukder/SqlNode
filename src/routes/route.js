import express from 'express';
import erpUserRoute from './erpUserRoute.js';
import sysAdminRouter from './sysAdminRoute.js';
import sysCategoriesRouter from './sysCategoriesRouter.js';
const router = express.Router();

router.use("/user",erpUserRoute);
router.use("/system-admin",sysAdminRouter);
router.use("/sys-categories",sysCategoriesRouter);

export default router;
