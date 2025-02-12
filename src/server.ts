import dotenv from 'dotenv';
import express from 'express';

// Load environment variables
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` });

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
    console.log(`Server is running in ${NODE_ENV} mode on http://localhost:${port}`);
});
