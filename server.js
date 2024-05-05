import express from "express";
import mongoose from "mongoose";
import  productRoutes  from "./routes/product.routes.js";

// Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// product routes
app.use("/api/", productRoutes);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

// datebase connections

mongoose
  .connect(
    "mongodb+srv://rashidpadda145:Password_1122@backenddb.1rsjynt.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => {
    console.log("Database Connected Successfully.");
  })
  .catch(() => {
    console.log("Connection Failed.");
  });
