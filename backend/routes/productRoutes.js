import express from 'express';
import { createProducts, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controller/productController.js';
// inside this express we have access to router class 
// express.Router() it will be creating new router object on using this we can easily handle http request 
const router=  express.Router();


// Routes
router.route("/products").get(getAllProducts).post(createProducts)
// whatever variable you have given you have to access 
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getSingleProduct)

export default router;
