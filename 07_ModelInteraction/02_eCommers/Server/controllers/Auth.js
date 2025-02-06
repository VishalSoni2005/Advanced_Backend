const User = require("../models/User");
// const Products = require("../models/Product");
// const Order = require("../models/order.model");
// const Cart = require("../models/Cart.model");
// const Category = require("../models/category");

// const bcrypt = require("bcryptjs");

exports.getUsers = async (req, res) => {
  try{
    
    const users = await User.find();
    res.status(200).send({
      success: true,
      data: users,
    });
  }catch(e) {
    console.log("Error: ", e);
    res.status(404).send({
      sucess: false,
      mag: "Error fetching users",
    })
    
  }
}
 
// signup
exports.signup = async (req, res) => {
  try {
    const { email, name, password, contactNumber, role } = req.body;

    if (!email || !name || !password || !contactNumber || !role) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Store hashed password
      contactNumber,
      role,
    });

    await newUser.save();

    console.log("User created", newUser);
    res.status(201).json({
      message: "User created successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};

// get all products
// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Products.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//       success: false,
//     });
//   }
// };

// //todo: create a new product
// exports.createProduct = async (req, res) => {
//   try {
//     const { name, price, category, stock, description } = req.body;

//     if (!name || !price || !category || !stock || !description) {
//       return res.status(400).json({
//         message: "All fields are required",
//         success: false,
//       });
//     }

//     // check
//     const existingProduct = await Products.findOne({ name });
//     if (existingProduct) {
//       return res.status(400).json({
//         message: "Product already exists",
//         success: false,
//       });
//     }

//     const newProduct = await Products.create({
//       name,
//       price,
//       category,
//       stock,
//       description,
//     });

//     res.status(201).json({
//       message: "Product created successfully",
//       success: true,
//       product: newProduct,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: error.message,
//       success: false,
//     });
//   }
// };

// // category
// exports.getCategories = async function (req, res) {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message,
//       success: false,
//     });
//   }
// };

// exports.createCategory = async (req, res) => {
//   try {
//     const { name, description } = req.body;

//     // check if category is already
//     const existingCategory = await Category.findOne({ name });
//     if (existingCategory) {
//       return res.status(400).json({
//         message: "Category already exists",
//         success: false,
//       });
//     }

//     const newCategory = await Category.create({ name, description });
//     res.status(201).json({
//       message: "Category created successfully",
//       success: true,
//       category: newCategory,
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: error.message,
//       success: false,
//     });
//   }
// };
