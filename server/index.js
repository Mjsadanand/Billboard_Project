import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js';

connectToDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000; // Fallback to 5000 if PORT is not defined

app.listen(PORT, () => {
    console.log(`Server is running at the port ${PORT}`);
});
 