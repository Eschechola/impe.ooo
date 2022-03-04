import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
// import swaggerUi from "swagger-ui-express";
// import swaggerJsDoc from "swagger-jsdoc";
import router from './routes/router';

dotenv.config()

if (!process.env.PORT)
    process.exit(1);

const PORT: number = parseInt(process.env.PORT as string);
const app = express();

app.use(router);
app.use(helmet());
app.use(cors());
app.use(express.json());

// const opts = {
//     definition: {
// 		openapi: "3.0.0",
// 		info: {
// 			title: "Library API",
// 			version: "1.0.0",
// 			description: "A simple Express Library API",
// 		},
// 		servers: [
// 			{
// 				url: "http://localhost:4000",
// 			},
// 		],
// 	},
// 	apis: ["./routes/*.js"],
// };
// const swaggerDocument = swaggerJsDoc(opts);
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    response.send("It's working!");
});