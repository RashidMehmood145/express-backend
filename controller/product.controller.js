import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

const createProduct = async (req, res) => {
  try {
    const productDetail = await Product.create(req.body);
    res.status("200").json(productDetail);
  } catch (error) {
    res.status("500").json({ message: error.message });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const Products = await Product.find({});
    res.status("200").json(Products);
  } catch (error) {
    res.status("500").json({ message: error.message });
  }
};

const getSingleProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status("200").json(product);
  } catch (error) {
    res.status("500").json({ message: error.message });
  }
};

const updateProductById = async (req, res) => {
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
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status("404").json({ message: "product not found" });
    }
    res.status("200").json({ message: "product deleted successfully" });
  } catch (error) {
    res.status("500").json({ message: "Internal server error" });
  }
};

export default {
    createProduct,
  getSingleProductById,
  getAllProducts,
  updateProductById,
  deleteProductById,
};
