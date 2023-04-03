import express from 'npm:express';
import { router } from './routes/router.ts';
import './db.ts';
import dotenv from 'npm:dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use( express.urlencoded( { extended: true } ) );
app.use('/', router);

app.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
});