import Express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = Express();
const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})