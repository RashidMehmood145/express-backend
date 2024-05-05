import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/api/allProducts", async (req, res) => {
  try {
    const Products = await Product.find({});
    res.status("200").json(Products);
  } catch (error) {
    res.status("500").json({ message: error.message });
  }
});
app.get("/api/productById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status("200").json(product);
  } catch (error) {
    res.status("500").json({ message: error.message });
  }
});

app.put("/api/updateProductById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status("404").json("product not found");
    }
    const updateProduct = await Product.findById(id);
    res.status("200").json(updateProduct);
  } catch (error) {
    res.status("500").json({ message: error.message });
  }
});

app.delete("/api/deleteProductById/:id", async(req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status("404").json({message:"product not found"})
        }
        res.status("200").json({message:"product deleted successfully"})
        
    } catch (error) {
        res.status("500").json({message:"Internal server error"})
        
    }
})

app.post("/api/product", async (req, res) => {
  try {
    const productDetail = await Product.create(req.body);
    res.status("200").json(productDetail);
    console.log(productDetail, "productDetail");
  } catch (error) {
    res.status("500").json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});

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
