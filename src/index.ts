import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from './routes/router';
import { exceptionHandler } from './middlewares/exception.middleware';

dotenv.config()

if (!process.env.PORT)
    process.exit(1);

const PORT: number = parseInt(process.env.PORT as string);
const app = express();

app.use(router);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(exceptionHandler);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    response.send("It's working!");
});