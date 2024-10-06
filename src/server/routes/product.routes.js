import { Router } from "express";
import {
  searchProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/items", searchProducts);

router.get("/items/:id", getProductById);

export default router;
