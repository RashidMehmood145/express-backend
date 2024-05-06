import { Router } from "express";
import {createProduct, deleteProductById, getAllProducts, getSingleProductById, updateProductById} from "../controller/product.controller.js";


const router = Router();
router.post("/", createProduct);
router.get("/api/productById/:id", getSingleProductById);
router.get("/api/allProducts", getAllProducts);
router.put("/api/updateProductById/:id", updateProductById);
router.delete("/api/deleteProductById/:id", deleteProductById);

export default router;
