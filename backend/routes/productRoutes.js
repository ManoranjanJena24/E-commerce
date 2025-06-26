import express from 'express';
import { getAllProducts, getSingleProduct } from '../controller/productController.js';
// inside this express we have access to router class 
// express.Router() it will be creating new router object on using this we can easily handle http request 
const router=  express.Router();


// Routes
router.route("/products").get(getAllProducts);
router.route("/product").get(getSingleProduct);

export default router;
