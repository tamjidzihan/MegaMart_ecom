import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";

const app: Application = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors({ origin: '*' }));
app.use(express.json());// body parser
app.use(express.urlencoded({ extended: false })) // url parser


// error handling
app.use((err, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    res.status(500).send()
    next()
})


export default app