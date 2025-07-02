import Product from '../models/productModel.js'
import HandleError from '../utils/handleError.js';
import handleAsyncError from '../middleware/handleAsyncError.js';


// 1️⃣ Creating Products 
// req object is nothing but it is going to contain the data which is coming from the client 
export const createProducts=handleAsyncError(async(req,res,next)=>{
  console.log(req.body);
  const product = await Product.create(req.body)
  res.status(201).json({
    success:true,
    product
  })

})

// 2️⃣ get all products 
export const getAllProducts = handleAsyncError(async(req, res,next) => {
  const products=await Product.find()
  res.status(200).json({
    success:true,
    products
  });
});

// export const getSingleProduct = (req, res) => {
//   res.status(200).json({
//     message: "Single Product",
//   });
// };


// 3️⃣Update Product 
export const updateProduct=handleAsyncError(async(req,res,next)=>{
  console.log(req.params.id)
  let product = await Product.findById(req.params.id);
  console.log("productiiiiii", product);
  

  product = await Product.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
  })

  if (!product) {
    return next(new HandleError("Product Not Found",404));
  }


  res.status(200).json({
    success:true,
    product
  })

})


// 4️⃣Delete Product 
export const deleteProduct=handleAsyncError(async(req,res,next)=>{

  const product=await Product.findByIdAndDelete(req.params.id)
  if (!product) {
    return next(new HandleError("Product Not Found",404))
  }
  res.status(200).json({
    success:true,
    message:"Product Deleted Successfully"
  })


})


// 5️⃣ Accessing Single Product 
export const getSingleProduct=handleAsyncError(async(req,res,next)=>{
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new HandleError("Product Not Found", 404));
  }

  res.status(200).json({
    success:true,
    product
  })
})




