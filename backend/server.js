import app from "./app.js";
import dotenv from "dotenv";
import { connectMongoDatabase } from "./config/db.js";

dotenv.config({ path: "backend/config/config.env" });
// console.log(app)
connectMongoDatabase();

// Handle uncaught exception errors
process.on('uncaughtException',(err)=>{
  console.log(`Error : ${err.message}`);
  console.log(`Server is shutting down due to uncaught exception errors`)
  process.exit(1)
})
const port = process.env.PORT || 3000;

// const getAllProducts = (req, res) => {
//   res.status(200).json({
//     message: "All Products",
//   });
// };


// const getSingleProduct = (req, res) => {
//   res.status(200).json({
//     message: "Single Product",
//   });
// };


// 1 Way 
// app.get("/api/v1/products", getAllProducts);

// app.get("/api/v1/product", getSingleProduct);

// -----------------------------------------------------------------

// 2nd Way

// app.route("/api/v1/products").get(getAllProducts)
// app.route("/api/v1/product").get(getSingleProduct);



const server=  app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);

});

// console.log(myName)

process.on('unhandledRejection',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log(`Server is shutting down,due to unhandled promise rejection`);
  server.close(()=>{
    process.exit(1)
  })
})