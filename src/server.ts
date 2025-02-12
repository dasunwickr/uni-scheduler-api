import dotenv from 'dotenv'
import app from './app';


// Load environment variables
const NODE_ENV: string = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${NODE_ENV}` });

const port: number = parseInt(process.env.PORT as string, 10) || 3000;

app.listen(port, (): void => {
    console.log(`Server is running in ${NODE_ENV} mode on http://localhost:${port}`)
})