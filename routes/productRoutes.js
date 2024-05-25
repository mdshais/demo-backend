import express from "express";
import { showAll,saveProduct } from "../controllers/productController.js";
const router = express.Router();

router.get("/", showAll);
router.post("/", saveProduct);


export default router;



