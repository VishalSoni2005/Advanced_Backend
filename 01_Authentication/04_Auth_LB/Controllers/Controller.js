const bcrypt = require("bcrypt");
const User = require("../Model/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, password) are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields (email, password) are required",
      });
    }

    // Check if user exists
    let user = await User.findOne({ email }); //* retrieves the entire document (i.e., the whole user entry) from the database if a match is found.

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      }); // TODO
    }

    // VERIFY PASSWORD AND PASSWORD HASH
    const isPasswordMatch = await bcrypt.compare(password, user.password); // TODO: two parameter required one is from req and other is from db
    
    //* read above line
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    if (isPasswordMatch) {
      // if password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      user = user.toObject();
      user.token = token; //* adding new entry to user object
      user.password = undefined; //* removing password from user object not from db

      res
        .cookie("token", token, {
          expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .status(200)
        .json({
          success: true,
          message: "Login successful",
          ["user.token"]: token,
          user,
        });
    } else {
      return res.status(403).json({
        success: false,
        message: "password incorrect",
      });
    }
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
