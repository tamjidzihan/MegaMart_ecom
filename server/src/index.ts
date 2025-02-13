import { Request, Response } from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import app from "./utils/app";
import { connectDB } from "./utils/mongo";
import categoryRoutes from "./routes/categoryRoutes";

dotenv.config();
const PORT = process.env.PORT || 3000;

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send(`Hello, TypeScript + Express!: ${req.baseUrl}`);
});
app.use("/product", productRoutes)
app.use("/category", categoryRoutes)


// Connecting DataBase 
connectDB()

// Initializing Server
app.listen(PORT, () => {
    console.log(`✅ Server is listening on http://localhost:${PORT}`);
});
