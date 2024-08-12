import express from 'express';

import { setup } from './src/config/dbConnect.js';
import router from './src/routes/route.js';
import sysAdminRouter from './src/routes/sysAdminRoute.js';
import globalErrorHandler from './src/error/globalErrorHandler.js';
import httpStatus from 'http-status';

const app = express();
app.use(express.json());


app.use('/api/v1', router);
app.use("/api/v1/system-admin",sysAdminRouter);
app.use(globalErrorHandler);
app.use((req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Not Found',
      errorMessages: [
        {
          path: req.originalUrl,
          message: 'API Not Found',
        },
      ],
    });
    next();
  });
  
app.listen(4000, async () => {
    console.log("server is listening at port 4000");
    
    await setup()
});
