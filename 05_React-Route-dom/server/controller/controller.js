const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel.js");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
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
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const allUsers = await User.find({});
    return res.status(201).render('login');
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password, please try again.",
      });
    }

    // Create JWT payload
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    // Generate token
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });

    user.token = token;
    user.password = undefined;

    const allUsers = await User.find({}); //todo: to all all user from db

    return res
      .cookie("token", token, {
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Matches JWT expiry
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
      })
      .status(200)
      .render('dashboard', { users: allUsers }); //!
      // .json({
      //   success: true,
      //   message: "Login successful",
      //   token,
      //   user,
      // });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).render('home');
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};


// exports.logout = (req, res) => {
//   try {
//     const token = req.body.token;
//     res.clearCookie(token);
//     return res.status(200).json({
//       success: true,
//       message: "Logged out successfully",
//     });
//   } catch (error) {
//     console.error("Logout Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong. Please try again later.",
//     });
//   }
// };
