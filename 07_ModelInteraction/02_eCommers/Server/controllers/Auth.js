const User = require('../models/User.model.js');
const Products = require('../models/product.model.js');
const Order = require('../models/order.model.js');
const Cart = require('../models/Cart.model.js');
const Category = require('../models/category.model.js');

const bcrypt = require('bcryptjs');


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

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword, // Store hashed password
      contactNumber,
      role,
    });

    res.status(201).json({
      message: "User created successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};
