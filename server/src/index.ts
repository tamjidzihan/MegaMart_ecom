import { Request, Response } from "express";
import dotenv from "dotenv";
import app from "./utils/app";
import { connectDB } from "./utils/connectDB";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import userRouter from "./routes/userRouter";
import addressRouter from "./routes/addressRouter";
import router from "./router";

dotenv.config();
const PORT = process.env.PORT || 3000;

// Routes
app.get("/", (req: Request, res: Response) => {
    res.json({ "message": "Welcome to MegaMart API" });
});
app.use('/', router())

// app.use("/user", userRouter)
// app.use("/product", productRoutes)
// app.use("/category", categoryRoutes)
// app.use("/address", addressRouter)


// Connecting DataBase 
connectDB()

// Initializing Server
app.listen(PORT, () => {
    console.log(`✅ Server is listening on http://localhost:${PORT}`);
});
