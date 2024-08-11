import express from 'express';

import { setup } from './src/config/dbConnect.js';
import router from './src/routes/route.js';

const app = express();
app.use(express.json());
app.use('/api/v1', router);

app.listen(4000, async () => {
    console.log("server is listening at port 4000");
    
    await setup()
});
