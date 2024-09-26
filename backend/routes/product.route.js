// backend/routes/product.routes.js
import express from "express";
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts);
router.post("/",createProduct);
router.delete("/:id" ,deleteProduct);
router.put("/:id",updateProduct);
export default router; 
