import express from "express";
import  productRoutes  from "./routes/product.routes.js";
import connectDB from "./server.js";

// Middlewares
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", productRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});