import express from 'express';
import erpUserRoute from './erpUserRoute.js';
import sysAdminRouter from './sysAdminRoute.js';
import sysCategoriesRouter from './sysCategoriesRouter.js';
import erpModuleRoute from './erpModuleRoute.js';
import erpAddonRoute from './erpAddonRoute.js';
const router = express.Router();

router.use("/user",erpUserRoute);
router.use("/system-admin",sysAdminRouter);
router.use("/sys-categories",sysCategoriesRouter);
router.use("/erp-module",erpModuleRoute);
router.use("/erp-addon",erpAddonRoute);
export default router;
