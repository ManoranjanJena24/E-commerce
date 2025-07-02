import Product from '../models/productModel.js'


// 1️⃣ Creating Products 
// req object is nothing but it is going to contain the data which is coming from the client 
export const createProducts=async(req,res)=>{
  console.log(req.body);
  const product = await Product.create(req.body)
  res.status(201).json({
    success:true,
    product
  })

}

// 2️⃣ get all products 
export const getAllProducts = async(req, res) => {
  const products=await Product.find()
  res.status(200).json({
    success:true,
    products
  });
};

// export const getSingleProduct = (req, res) => {
//   res.status(200).json({
//     message: "Single Product",
//   });
// };


// 3️⃣Update Product 
export const updateProduct=async(req,res)=>{
  console.log(req.params.id)
  let product = await Product.findById(req.params.id);
  console.log("productiiiiii", product);
  

  product = await Product.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
  })

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }


  res.status(200).json({
    success:true,
    product
  })

}


// 4️⃣Delete Product 
export const deleteProduct=async(req,res)=>{

  const product=await Product.findByIdAndDelete(req.params.id)
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }
  res.status(200).json({
    success:true,
    message:"Product Deleted Successfully"
  })


}


// 5️⃣ Accessing Single Product 
export const getSingleProduct=async(req,res)=>{
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }

  res.status(200).json({
    success:true,
    product
  })
}




