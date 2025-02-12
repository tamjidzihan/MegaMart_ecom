import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", router);
app.get("/data/:id/:asdasdasdasd", (req: Request, res: Response) => {
    res.send(req.params.asdasdasdasd)
})

app.get("/", (req: Request, res: Response) => {
    res.send(`Hello, TypeScript + Express!: ${req.baseUrl}`);
    res.sendStatus(200)
});

app.post("/", (req: Request, res: Response) => {
    const newData = req.body
    console.log(newData)
    res.send(newData)
})



app.listen(PORT, () => {
    console.log(`Server is running on on http://localhost:${PORT}`);
});
